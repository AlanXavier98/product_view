const fs = require('fs');
const path = require('path');

// Função para ler a API key do arquivo de configuração
function getApiKey() {
    try {
        const configPath = path.join(__dirname, '..', 'config.env');
        const configContent = fs.readFileSync(configPath, 'utf8');
        const apiKeyLine = configContent.split('\n').find(line => line.startsWith('API_KEY='));
        return apiKeyLine ? apiKeyLine.split('=')[1] : null;
    } catch (error) {
        console.error('Erro ao ler arquivo de configuração:', error);
        return null;
    }
}

// Middleware de autenticação
const authenticateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'] || req.headers['authorization'];
    const validApiKey = getApiKey();

    if (!apiKey) {
        return res.status(401).json({
            error: 'API Key não fornecida',
            message: 'É necessário fornecer uma API Key válida no header x-api-key ou authorization'
        });
    }

    // Remove 'Bearer ' se presente
    const cleanApiKey = apiKey.replace('Bearer ', '');

    if (cleanApiKey !== validApiKey) {
        return res.status(401).json({
            error: 'API Key inválida',
            message: 'A API Key fornecida não é válida'
        });
    }

    next();
};

module.exports = authenticateApiKey; 