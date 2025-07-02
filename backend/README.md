# API de Produtos - Backend

API REST para visualização de produtos com autenticação por API Key e paginação.

> **Nota**: Este é o README específico do backend. Para instruções completas de execução do projeto (backend + frontend), consulte o [README principal](../README.md).

## 🚀 Como Executar

### Pré-requisitos
- **Node.js**: versão 18.0.0 ou superior (testado com v22.13.0)
- **npm** ou **yarn**

### Verificação de Versão
```bash
node --version
```

### Instalação

1. **Navegue para a pasta do backend:**
   ```bash
   cd backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a API Key (opcional):**
   - Edite o arquivo `config.env` se quiser alterar a API Key padrão
   - API Key padrão: `xavier-secret-api-key-2025`

4. **Execute o servidor:**
   ```bash
   # Modo desenvolvimento (com auto-reload)
   npm run dev
   
   # Modo produção
   npm start
   ```

5. **Verifique se está funcionando:**
   - Acesse: http://localhost:3000
   - Você deve ver uma mensagem de boas-vindas da API

## 📡 Endpoints

### Autenticação
Todos os endpoints requerem autenticação via API Key no header:
```
x-api-key: xavier-secret-api-key-2025
```

### Listar Produtos (com paginação)
```
GET /api/products
```

**Parâmetros de query:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Produtos por página (padrão: 20)
- `search` (opcional): Buscar por nome do produto

**Exemplo:**
```bash
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products?page=1&limit=20"
```

**Resposta:**
```json
{
  "products": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalProducts": 56,
    "productsPerPage": 20,
    "hasNextPage": true,
    "hasPrevPage": false,
    "nextPage": 2,
    "prevPage": null
  }
}
```

### Buscar Produto por ID
```
GET /api/products/:id
```

**Exemplo:**
```bash
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products/1"
```

## 🔧 Configuração

### Variáveis de Ambiente
Edite o arquivo `config.env`:

```env
PORT=3000
API_KEY=xavier-secret-api-key-2025
NODE_ENV=development
```

## 📊 Banco de Dados

Os produtos estão armazenados em `data/products.js` com 56 produtos fictícios, incluindo:
- ID único
- Nome do produto
- Preço
- URL da imagem (Unsplash)

## 🛠️ Estrutura do Projeto

```
backend/
├── data/
│   └── products.js          # Banco de dados local
├── middleware/
│   └── auth.js             # Middleware de autenticação
├── routes/
│   └── products.js         # Rotas da API
├── config.env              # Configurações
├── package.json            # Dependências
├── server.js              # Servidor principal
└── README.md              # Documentação
```

## 🔒 Segurança

- Autenticação obrigatória via API Key
- Validação de entrada
- Tratamento de erros
- CORS configurado

## 🧪 Testando a API

### Com curl:
```bash
# Teste básico
curl http://localhost:3000

# Listar produtos (página 1)
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products"

# Buscar produtos com filtro
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products?search=notebook"

# Produto específico
curl -H "x-api-key: xavier-secret-api-key-2025" \
     "http://localhost:3000/api/products/1"
```

### Com Postman:
1. Configure o header: `x-api-key: xavier-secret-api-key-2025`
2. Teste os endpoints acima

## 🚨 Solução de Problemas

### Erro de API Key inválida:
- Verifique se o header `x-api-key` está correto
- Confirme a API Key no arquivo `config.env`

### Erro de porta em uso:
- Altere a porta no arquivo `config.env`
- Ou mate o processo que está usando a porta 3000

### Erro de dependências:
- Delete a pasta `node_modules`
- Execute `npm install` novamente 