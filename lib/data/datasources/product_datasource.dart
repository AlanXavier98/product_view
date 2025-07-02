import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import '../../core/constants/app_constants.dart';
import '../models/product_model.dart';

abstract class ProductDataSource {
  Future<PaginatedProductsResponse> getProducts({int page = 1, String? search});
}

class ProductDataSourceImpl implements ProductDataSource {
  final Dio _dio;

  ProductDataSourceImpl() : _dio = Dio() {
    _dio.options.baseUrl = AppConstants.baseUrl;
    _dio.options.headers = {
      'x-api-key': AppConstants.apiKey,
      'Content-Type': 'application/json',
    };

    // Configurar timeout
    _dio.options.connectTimeout = const Duration(seconds: 10);
    _dio.options.receiveTimeout = const Duration(seconds: 10);

    // Interceptor para logs (apenas em desenvolvimento)
    if (const bool.fromEnvironment('dart.vm.product') == false) {
      _dio.interceptors.add(
        LogInterceptor(
          requestBody: false,
          responseBody: false,
          logPrint: (obj) => debugPrint('API: $obj'),
        ),
      );
    }
  }

  @override
  Future<PaginatedProductsResponse> getProducts({
    int page = 1,
    String? search,
  }) async {
    try {
      // Log apenas em desenvolvimento
      if (kDebugMode) {
        print(
          'Tentando conectar em: ${AppConstants.baseUrl}${AppConstants.apiEndpoint}',
        );
      }

      final queryParameters = {
        'page': page.toString(),
        'limit': AppConstants.productsPerPage.toString(),
      };

      if (search != null && search.isNotEmpty) {
        queryParameters['search'] = search;
      }

      final response = await _dio.get(
        AppConstants.apiEndpoint,
        queryParameters: queryParameters,
      );

      if (response.statusCode == 200) {
        // Log apenas em desenvolvimento
        if (kDebugMode) {
          print(
            'Sucesso! Produtos carregados: ${response.data['products']?.length ?? 0}',
          );
        }
        return PaginatedProductsResponse.fromJson(response.data);
      } else {
        throw Exception('Erro ao buscar produtos: ${response.statusCode}');
      }
    } on DioException catch (e) {
      if (e.response?.statusCode == 401) {
        throw Exception('API Key inválida ou não fornecida');
      } else if (e.type == DioExceptionType.connectionTimeout) {
        throw Exception(
          'Timeout de conexão. Verifique se o servidor está rodando.',
        );
      } else if (e.type == DioExceptionType.connectionError) {
        throw Exception(
          'Erro de conexão. Verifique se o servidor está rodando em ${AppConstants.baseUrl}',
        );
      } else {
        throw Exception('Erro de rede: ${e.message}');
      }
    } catch (e) {
      throw Exception('Erro inesperado: $e');
    }
  }
}
