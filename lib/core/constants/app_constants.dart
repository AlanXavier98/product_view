import 'package:flutter/foundation.dart';

class AppConstants {
  // API Constants
  static final String baseUrl = kIsWeb
      ? 'http://localhost:3000'
      : 'http://10.0.2.2:3000';
  static const String apiKey = 'xavier-secret-api-key-2025';
  static const String apiEndpoint = '/api/products';

  // Pagination
  static const int productsPerPage = 20;

  // UI Constants
  static const double cardBorderRadius = 12.0;
  static const double cardElevation = 4.0;
  static const double imageAspectRatio = 1.0;
}
