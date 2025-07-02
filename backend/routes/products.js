const express = require('express');
const router = express.Router();
const products = require('../data/products');
const authenticateApiKey = require('../middleware/auth');

// GET /api/products - Lista produtos com paginação
router.get('/', authenticateApiKey, (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const search = req.query.search || '';

        // Filtrar produtos por nome se search for fornecido
        let filteredProducts = products;
        if (search) {
            filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Calcular paginação
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        // Calcular informações de paginação
        const totalProducts = filteredProducts.length;
        const totalPages = Math.ceil(totalProducts / limit);
        const hasNextPage = endIndex < totalProducts;
        const hasPrevPage = page > 1;

        // Construir resposta
        const response = {
            products: paginatedProducts,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalProducts: totalProducts,
                productsPerPage: limit,
                hasNextPage: hasNextPage,
                hasPrevPage: hasPrevPage,
                nextPage: hasNextPage ? page + 1 : null,
                prevPage: hasPrevPage ? page - 1 : null
            }
        };

        res.json(response);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: 'Ocorreu um erro ao buscar os produtos'
        });
    }
});

// GET /api/products/:id - Busca produto por ID
router.get('/:id', authenticateApiKey, (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = products.find(p => p.id === productId);

        if (!product) {
            return res.status(404).json({
                error: 'Produto não encontrado',
                message: `Produto com ID ${productId} não foi encontrado`
            });
        }

        res.json(product);
    } catch (error) {
        console.error('Erro ao buscar produto por ID:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            message: 'Ocorreu um erro ao buscar o produto'
        });
    }
});

module.exports = router; 