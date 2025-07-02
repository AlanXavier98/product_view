import '../entities/product.dart';
import '../../data/models/product_model.dart';

abstract class ProductRepository {
  Future<PaginatedProductsResponse> getProducts({int page = 1, String? search});
}
