import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import '../../domain/repositories/product_repository.dart';
import '../../data/models/product_model.dart';

// Events
abstract class ProductEvent extends Equatable {
  @override
  List<Object?> get props => [];
}

class LoadProducts extends ProductEvent {
  final int page;
  final String? search;
  final bool isLoadMore;

  LoadProducts({this.page = 1, this.search, this.isLoadMore = false});

  @override
  List<Object?> get props => [page, search, isLoadMore];
}

class LoadMoreProducts extends ProductEvent {
  final String? search;

  LoadMoreProducts({this.search});

  @override
  List<Object?> get props => [search];
}

class SearchProducts extends ProductEvent {
  final String search;

  SearchProducts(this.search);

  @override
  List<Object?> get props => [search];
}

// States
abstract class ProductState extends Equatable {
  @override
  List<Object?> get props => [];
}

class ProductInitial extends ProductState {}

class ProductLoading extends ProductState {}

class ProductLoaded extends ProductState {
  final List<ProductModel> products;
  final int currentPage;
  final int totalPages;
  final bool hasNextPage;
  final String? search;
  final bool isLoadMore;

  ProductLoaded({
    required this.products,
    required this.currentPage,
    required this.totalPages,
    required this.hasNextPage,
    this.search,
    this.isLoadMore = false,
  });

  @override
  List<Object?> get props => [
    products,
    currentPage,
    totalPages,
    hasNextPage,
    search,
    isLoadMore,
  ];
}

class ProductError extends ProductState {
  final String message;

  ProductError(this.message);

  @override
  List<Object?> get props => [message];
}

// Bloc
class ProductBloc extends Bloc<ProductEvent, ProductState> {
  final ProductRepository _productRepository;

  ProductBloc(this._productRepository) : super(ProductInitial()) {
    on<LoadProducts>(_onLoadProducts);
    on<LoadMoreProducts>(_onLoadMoreProducts);
    on<SearchProducts>(_onSearchProducts);
  }

  Future<void> _onLoadProducts(
    LoadProducts event,
    Emitter<ProductState> emit,
  ) async {
    final isLoadMore = event.isLoadMore;
    List<ProductModel> currentProducts = [];
    if (state is ProductLoaded && isLoadMore) {
      currentProducts = List<ProductModel>.from(
        (state as ProductLoaded).products,
      );
    }

    if (!isLoadMore) {
      emit(ProductLoading());
    }

    try {
      final response = await _productRepository.getProducts(
        page: event.page,
        search: event.search,
      );
      final newProducts = response.products;
      final allProducts = isLoadMore
          ? [...currentProducts, ...newProducts]
          : newProducts;
      emit(
        ProductLoaded(
          products: allProducts,
          currentPage: response.pagination.currentPage,
          totalPages: response.pagination.totalPages,
          hasNextPage: response.pagination.hasNextPage,
          search: event.search,
          isLoadMore: isLoadMore,
        ),
      );
    } catch (e) {
      emit(ProductError(e.toString()));
    }
  }

  Future<void> _onLoadMoreProducts(
    LoadMoreProducts event,
    Emitter<ProductState> emit,
  ) async {
    if (state is ProductLoaded) {
      final currentState = state as ProductLoaded;
      if (currentState.hasNextPage) {
        add(
          LoadProducts(
            page: currentState.currentPage + 1,
            search: event.search,
            isLoadMore: true,
          ),
        );
      }
    }
  }

  Future<void> _onSearchProducts(
    SearchProducts event,
    Emitter<ProductState> emit,
  ) async {
    add(LoadProducts(search: event.search));
  }
}
