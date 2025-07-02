const products = [
    {
        id: 1,
        name: "Camiseta Azul",
        price: 49.99,
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Tênis Vermelho",
        price: 199.9,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        name: "Mochila Preta",
        price: 129.0,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Relógio Esportivo",
        price: 349.99,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
        id: 5,
        name: "Fone de Ouvido Bluetooth",
        price: 89.9,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Jaqueta Jeans",
        price: 229.5,
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
    },
    {
        id: 7,
        name: "Óculos de Sol",
        price: 79.9,
        imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Calça Jeans",
        price: 159.0,
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Camisa Social Branca",
        price: 89.9,
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Notebook Gamer",
        price: 5499.99,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
    },
    {
        id: 11,
        name: "Smartphone Android",
        price: 2999.99,
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    },
    {
        id: 12,
        name: "Tablet 10 Polegadas",
        price: 1899.0,
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
    },
    {
        id: 13,
        name: "Teclado Mecânico RGB",
        price: 299.9,
        imageUrl: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=400&fit=crop"
    },
    {
        id: 14,
        name: "Mouse Gamer",
        price: 149.9,
        imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
    },
    {
        id: 15,
        name: "Monitor 27\" Full HD",
        price: 899.99,
        imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    },
    {
        id: 16,
        name: "Cadeira Ergonômica",
        price: 1249.0,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
        id: 17,
        name: "Copo Térmico",
        price: 59.9,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
    },
    {
        id: 18,
        name: "Livro de Ficção",
        price: 39.9,
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop"
    },
    {
        id: 19,
        name: "Fone com Fio",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
        id: 20,
        name: "Console Retro",
        price: 349.0,
        imageUrl: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=400&fit=crop"
    },
    {
        id: 21,
        name: "Blusa de Moletom",
        price: 119.99,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
    },
    {
        id: 22,
        name: "Tênis Esportivo",
        price: 219.99,
        imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
    },
    {
        id: 23,
        name: "Camisa Estampada",
        price: 79.0,
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
        id: 24,
        name: "Notebook Ultraleve",
        price: 4899.99,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
    },
    {
        id: 25,
        name: "Headset com Microfone",
        price: 159.99,
        imageUrl: "https://images0.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg"
    },
    {
        id: 26,
        name: "Bermuda Jeans",
        price: 89.9,
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
    },
    {
        id: 27,
        name: "Boné Estiloso",
        price: 39.9,
        imageUrl: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=400&fit=crop"
    },
    {
        id: 28,
        name: "Bolsa Feminina",
        price: 179.9,
        imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop"
    },
    {
        id: 29,
        name: "Carteira Couro",
        price: 69.9,
        imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop"
    },
    {
        id: 30,
        name: "Smartwatch",
        price: 499.99,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
        id: 31,
        name: "Pulseira Inteligente",
        price: 139.0,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
        id: 32,
        name: "Echo Dot",
        price: 349.0,
        imageUrl: "https://a-static.mlcdn.com.br/800x560/echo-show-5-3-geracao-amazon-com-alexa-alto-falante-de-44mm-preto-b09b2tsnnn/kabum/478090/abdde12ab5775729d9b4bedf1dba8219.jpeg"
    },
    {
        id: 33,
        name: "Carregador Portátil",
        price: 99.9,
        imageUrl: "https://images9.kabum.com.br/produtos/fotos/512319/carregador-portatil-power-bank-geonav-20-000mah-2-portas-1-usb-c-1-usb-cinza-espacial-8203-pb20k20wsg_1704903450_g.jpg"
    },
    {
        id: 34,
        name: "Chaveiro Personalizado",
        price: 19.9,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_809153-MLB54000900050_022023-F-chaveiro-emborracha-alto-relevo-one-piece-luffy.webp"
    },
    {
        id: 35,
        name: "Caneca Divertida",
        price: 29.9,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
    },
    {
        id: 36,
        name: "Tapete Decorativo",
        price: 89.9,
        imageUrl: "https://down-br.img.susercontent.com/file/sg-11134201-7rccf-ltchvd84umlw16.webp"
    },
    {
        id: 37,
        name: "Camiseta Estonada",
        price: 59.9,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
    },
    {
        id: 38,
        name: "Perfume Masculino",
        price: 229.0,
        imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop"
    },
    {
        id: 39,
        name: "Perfume Feminino",
        price: 249.0,
        imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop"
    },
    {
        id: 40,
        name: "Câmera Instantânea",
        price: 649.9,
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    },
    {
        id: 41,
        name: "Luminária LED",
        price: 119.9,
        imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400&h=400&fit=crop"
    },
    {
        id: 42,
        name: "Tênis Casual",
        price: 189.9,
        imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
    },
    {
        id: 43,
        name: "Quadro Decorativo",
        price: 149.9,
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop"
    },
    {
        id: 44,
        name: "Tapete de Yoga",
        price: 99.9,
        imageUrl: "https://m.media-amazon.com/images/I/41QQi9ASb4L._AC_SX679_.jpg"
    },
    {
        id: 45,
        name: "Capa para Celular",
        price: 39.9,
        imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
    },
    {
        id: 46,
        name: "Guarda-Chuva Compacto",
        price: 49.9,
        imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop"
    },
    {
        id: 47,
        name: "Livro Técnico",
        price: 79.9,
        imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop"
    },
    {
        id: 48,
        name: "Kit Canetas Coloridas",
        price: 24.9,
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
    },
    {
        id: 49,
        name: "Notebook com Touchscreen",
        price: 6499.0,
        imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
    },
    {
        id: 50,
        name: "Teclado Compacto",
        price: 179.9,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
    },
    {
        id: 51,
        name: "Smartphone Galaxy S23",
        price: 2999.99,
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    },
    {
        id: 52,
        name: "Laptop MacBook Pro",
        price: 8999.99,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
    },
    {
        id: 53,
        name: "Headphones Sony WH-1000XM4",
        price: 1299.99,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
        id: 54,
        name: "Smart Watch Apple Watch",
        price: 2499.99,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
        id: 55,
        name: "Camera Canon EOS R5",
        price: 15999.99,
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
    },
    {
        id: 56,
        name: "Gaming Console PlayStation 5",
        price: 3999.99,
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop"
    }
];

module.exports = products; 