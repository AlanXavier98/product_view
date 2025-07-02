# Sistema de Visualização de Produtos

Sistema completo para visualização de produtos de uma loja fictícia, desenvolvido com Flutter (frontend) e Node.js (backend).

## 📋 Descrição

Este projeto implementa um sistema de visualização de produtos com:
- **Backend**: API REST em Node.js com autenticação via API Key
- **Frontend**: Aplicativo Flutter com interface responsiva
- **Funcionalidades**: Listagem de produtos, paginação, busca e carregamento infinito

### 📚 Documentação

Este README principal contém instruções completas para executar todo o projeto. Para documentação específica do backend, consulte o arquivo `backend/README.md` que contém detalhes técnicos da API, endpoints e configurações avançadas.

## 🏗️ Arquitetura

### Backend (Node.js)
- **Framework**: Express.js
- **Autenticação**: API Key via header `x-api-key`
- **Dados**: Simulação de banco com 56 produtos
- **Endpoints**:
  - `GET /api/products` - Lista produtos com paginação
  - `GET /api/products?search=termo` - Busca produtos por nome

### Frontend (Flutter)
- **Arquitetura**: Clean Architecture com BLoC
- **Gerenciamento de Estado**: flutter_bloc
- **HTTP Client**: Dio
- **UI**: Material Design com Grid responsivo

## 🚀 Como Executar

### Pré-requisitos
- **Node.js**: versão 18.0.0 ou superior (testado com v22.13.0)
- **Flutter SDK**: versão 3.32.0 ou superior (testado com 3.32.5)
- **Dart SDK**: versão 3.8.1 ou superior
- **Android Studio** / **VS Code** com extensões Flutter e Dart

### Verificação de Versões
Antes de começar, verifique se as versões estão corretas:

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do Flutter
flutter --version

# Verificar versão do Dart
dart --version
```

### Backend

1. **Navegue para a pasta do backend**:
```bash
cd backend
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure as variáveis de ambiente**:
O arquivo `config.env` já está configurado com:
```
PORT=3000
API_KEY=xavier-secret-api-key-2025
NODE_ENV=development
```

4. **Inicie o servidor**:
```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`

### Frontend

1. **Navegue para a pasta raiz do projeto**:
   ```bash
   cd product_view
   ```

2. **Instale as dependências**:
   ```bash
   flutter pub get
   ```

3. **Execute o aplicativo**:
   ```bash
   flutter run
   ```

## 🔑 Autenticação

A API requer autenticação via API Key no header `x-api-key`:

```
x-api-key: xavier-secret-api-key-2025
```

## 📱 Funcionalidades

### Backend
- ✅ Listagem de produtos com paginação
- ✅ Busca por nome do produto
- ✅ Autenticação via API Key
- ✅ Tratamento de erros
- ✅ CORS habilitado

### Frontend
- ✅ Interface responsiva com Grid
- ✅ Carregamento infinito
- ✅ Busca em tempo real
- ✅ Indicadores de carregamento
- ✅ Tratamento de erros
- ✅ Pull-to-refresh
- ✅ Estados de loading, erro e sucesso

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** v22.13.0 - Runtime JavaScript
- **Express.js** v4.18.2 - Framework web
- **CORS** v2.8.5 - Cross-origin resource sharing
- **dotenv** v16.3.1 - Gerenciamento de variáveis de ambiente

### Frontend
- **Flutter** v3.32.5 - Framework UI
- **Dart** v3.8.1 - Linguagem de programação
- **flutter_bloc** v8.1.4 - Gerenciamento de estado
- **Dio** v5.4.0 - HTTP client
- **flutter_screenutil** v5.9.0 - Responsividade
- **equatable** v2.0.5 - Comparação de objetos
- **get_it** v7.6.7 - Injeção de dependências
- **cached_network_image** v3.3.1 - Carregamento de imagens

## 📁 Estrutura do Projeto

```
product_view/
├── backend/
│   ├── config.env          # Configurações
│   ├── data/
│   │   └── products.js     # Dados dos produtos
│   ├── middleware/
│   │   └── auth.js         # Middleware de autenticação
│   ├── routes/
│   │   └── products.js     # Rotas da API
│   ├── package.json
│   └── server.js           # Servidor principal
├── lib/
│   ├── core/
│   │   └── constants/      # Constantes da aplicação
│   ├── data/
│   │   ├── datasources/    # Fontes de dados
│   │   ├── models/         # Modelos de dados
│   │   └── repositories/   # Implementações dos repositórios
│   ├── domain/
│   │   ├── entities/       # Entidades do domínio
│   │   └── repositories/   # Interfaces dos repositórios
│   ├── injector/           # Injeção de dependências
│   ├── presentation/
│   │   ├── bloc/           # Gerenciamento de estado
│   │   ├── pages/          # Páginas da aplicação
│   │   └── widgets/        # Widgets reutilizáveis
│   └── main.dart           # Ponto de entrada
└── README.md
```

## 🧪 Testando a API

### Teste com curl

1. **Listar produtos (com autenticação)**:
```bash
curl -H "x-api-key: xavier-secret-api-key-2025" \
     http://localhost:3000/api/products
```

2. **Buscar produtos**:
```bash
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products?search=notebook"
```

3. **Teste sem autenticação (deve retornar 401)**:
```bash
curl http://localhost:3000/api/products
```

## 📊 Dados dos Produtos

O sistema inclui 56 produtos fictícios com:
- ID único
- Nome do produto
- Preço em reais
- URL da imagem (Unsplash)

## 🔧 Configurações

### Backend
- **Porta**: 3000 (configurável via `config.env`)
- **API Key**: `xavier-secret-api-key-2025` (configurável via `config.env`)

### Frontend
- **URL da API**: `http://10.0.2.2:3000` (para Android Emulator)
- **Produtos por página**: 20
- **API Key**: Configurada em `lib/core/constants/app_constants.dart`

## 🐛 Solução de Problemas

### Versões Incompatíveis
- **Node.js**: Se estiver usando versão inferior a 18.0.0, atualize para uma versão mais recente
- **Flutter**: Se estiver usando versão inferior a 3.32.0, execute `flutter upgrade`
- **Dart**: Se estiver usando versão inferior a 3.8.1, atualize o Flutter

### Backend não inicia
- Verifique se a porta 3000 está disponível
- Confirme se o Node.js está instalado corretamente
- Execute `npm install` para instalar dependências
- Verifique se o arquivo `config.env` existe

### Frontend não conecta com o backend
- Verifique se o backend está rodando em `http://localhost:3000`
- Para Android Emulator: use `10.0.2.2:3000` (já configurado)
- Para iOS Simulator: use `localhost:3000`
- Para dispositivo físico: altere a URL em `lib/core/constants/app_constants.dart`

### Erro de autenticação
- Verifique se a API Key está correta: `xavier-secret-api-key-2025`
- Confirme se o header `x-api-key` está sendo enviado
- Verifique se o arquivo `config.env` do backend está correto

### Erro de dependências Flutter
- Execute `flutter clean` seguido de `flutter pub get`
- Verifique se o Flutter está no PATH do sistema
- Execute `flutter doctor` para verificar problemas de configuração

## 📝 Licença


