const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Função para ler configurações do arquivo
function getConfig() {
    try {
        const configPath = path.join(__dirname, 'config.env');
        const configContent = fs.readFileSync(configPath, 'utf8');
        const config = {};

        configContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                config[key.trim()] = value.trim();
            }
        });

        return config;
    } catch (error) {
        console.error('Erro ao ler arquivo de configuração:', error);
        return { PORT: 3000, API_KEY: 'xavier-secret-api-key-2025' };
    }
}

// Rotas
const productsRoutes = require('./routes/products');
app.use('/api/products', productsRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.json({
        message: 'API de Produtos funcionando!',
        version: '1.0.0',
        endpoints: {
            products: '/api/products',
            productById: '/api/products/:id'
        },
        authentication: 'Use x-api-key header para autenticação'
    });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro não tratado:', err);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: 'Ocorreu um erro inesperado'
    });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        message: `A rota ${req.originalUrl} não existe`
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    const config = getConfig();
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`API disponível em: http://localhost:${PORT}`);
    console.log(`API Key configurada: ${config.API_KEY}`);
}); 