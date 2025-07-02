import '../../domain/entities/product.dart';
import '../../domain/repositories/product_repository.dart';
import '../datasources/product_datasource.dart';
import '../models/product_model.dart';

class ProductRepositoryImpl implements ProductRepository {
  final ProductDataSource _dataSource;

  ProductRepositoryImpl(this._dataSource);

  @override
  Future<PaginatedProductsResponse> getProducts({
    int page = 1,
    String? search,
  }) async {
    return await _dataSource.getProducts(page: page, search: search);
  }
}
