import 'package:get_it/get_it.dart';
import '../data/datasources/product_datasource.dart';
import '../data/repositories/product_repository_impl.dart';
import '../domain/repositories/product_repository.dart';
import '../presentation/bloc/product_bloc.dart';

final getIt = GetIt.instance;

void setupInjection() {
  // DataSources
  getIt.registerLazySingleton<ProductDataSource>(() => ProductDataSourceImpl());

  // Repositories
  getIt.registerLazySingleton<ProductRepository>(
    () => ProductRepositoryImpl(getIt<ProductDataSource>()),
  );

  // BLoCs
  getIt.registerFactory<ProductBloc>(
    () => ProductBloc(getIt<ProductRepository>()),
  );
}
