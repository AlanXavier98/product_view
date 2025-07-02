import '../../domain/entities/product.dart';

class ProductModel extends Product {
  const ProductModel({
    required int id,
    required String name,
    required double price,
    required String imageUrl,
  }) : super(id: id, name: name, price: price, imageUrl: imageUrl);

  factory ProductModel.fromJson(Map<String, dynamic> json) {
    return ProductModel(
      id: json['id'] as int,
      name: json['name'] as String,
      price: (json['price'] as num).toDouble(),
      imageUrl: json['imageUrl'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {'id': id, 'name': name, 'price': price, 'imageUrl': imageUrl};
  }
}

class PaginatedProductsResponse {
  final List<ProductModel> products;
  final PaginationInfo pagination;

  const PaginatedProductsResponse({
    required this.products,
    required this.pagination,
  });

  factory PaginatedProductsResponse.fromJson(Map<String, dynamic> json) {
    return PaginatedProductsResponse(
      products: (json['products'] as List)
          .map((productJson) => ProductModel.fromJson(productJson))
          .toList(),
      pagination: PaginationInfo.fromJson(json['pagination']),
    );
  }
}

class PaginationInfo {
  final int currentPage;
  final int totalPages;
  final int totalProducts;
  final int productsPerPage;
  final bool hasNextPage;
  final bool hasPrevPage;
  final int? nextPage;
  final int? prevPage;

  const PaginationInfo({
    required this.currentPage,
    required this.totalPages,
    required this.totalProducts,
    required this.productsPerPage,
    required this.hasNextPage,
    required this.hasPrevPage,
    this.nextPage,
    this.prevPage,
  });

  factory PaginationInfo.fromJson(Map<String, dynamic> json) {
    return PaginationInfo(
      currentPage: json['currentPage'] as int,
      totalPages: json['totalPages'] as int,
      totalProducts: json['totalProducts'] as int,
      productsPerPage: json['productsPerPage'] as int,
      hasNextPage: json['hasNextPage'] as bool,
      hasPrevPage: json['hasPrevPage'] as bool,
      nextPage: json['nextPage'] as int?,
      prevPage: json['prevPage'] as int?,
    );
  }
}
