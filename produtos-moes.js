// CÓDIGO DOS PRODUTOS DO MÕES - EXTRAÍDO DO ANOTAÍ
// Cole este código no arquivo cardapio-online.html, substituindo const PRODUCTS

const PRODUCTS = [
    // ============ NOVIDADES ============
    {
        id: 1,
        name: 'Big Rito',
        description: 'Pão UC, Mozzarela, Milho, Ervilha, Tomate, Cebola, bacon, Maionese, Orégano, Alface, Picles',
        price: 57.00,
        image: 'https://via.placeholder.com/400x300?text=Big+Rito'
    },
    {
        id: 2,
        name: 'Big Fish',
        description: 'Pão UC, Peixe com Maionese, Cheddar, Milho Especial, Tomate, Cebola, Alface, Milho, Ervilha e Calabresa',
        price: 57.00,
        image: 'https://via.placeholder.com/400x300?text=Big+Fish'
    },
    {
        id: 3,
        name: 'X Costela',
        description: 'Hambúrguer com Carne de Costela, Queijo, Tomate, Cebola, Alface',
        price: 53.00,
        image: 'https://via.placeholder.com/400x300?text=X+Costela'
    },
    {
        id: 4,
        name: 'X Doritos Supremo',
        description: 'Pão, Hambúrguer, Doritos crocante, alface, tomate, cheddar e maionese',
        price: 50.00,
        image: 'https://via.placeholder.com/400x300?text=X+Doritos+Supremo'
    },

    // ============ LANCHE / PORÇÃO ============
    {
        id: 5,
        name: 'X Frango',
        description: 'Pão Mc, Frango Marinado, Milho, Ervilha, Tomate, Queijo, Alface, Cheddar, Calabresa, Acompanhamento guardarerupa, margarine e ketchup',
        price: 23.00,
        image: 'https://via.placeholder.com/400x300?text=X+Frango'
    },
    {
        id: 6,
        name: 'X Big Moes',
        description: 'Pão UC, com Hambúrguer, Queijo, Calabresas, Ovos, Tomate, Alface, Milho, Ervilha e Batata Frita de dentro. Acompanhamento guardarerupa',
        price: 57.00,
        image: 'https://via.placeholder.com/400x300?text=X+Big+Moes'
    },
    {
        id: 7,
        name: 'X Salada Com Frango',
        description: 'Hambúrguer com Mozzarella, Milho, Ervilha, Tomate, Cuco, Queijo, Alface, Acompanhamento guardarerupa, maionese e ketchup',
        price: 27.00,
        image: 'https://via.placeholder.com/400x300?text=X+Salada+Com+Frango'
    },
    {
        id: 8,
        name: 'X Gacho',
        description: 'Hambúrguer com Mozzarella, Ervilha, Milho, Tomate, Alface, Codel, Acompanhamento guardarerupa de dentro. Maionese e ketchup',
        price: 24.00,
        image: 'https://via.placeholder.com/400x300?text=X+Gacho'
    },
    {
        id: 9,
        name: 'X Simonguef',
        description: 'Pão Mc, Frango, Milho, Ervilha, Tomate, Queijo, Alface, Calabresa e carne de milho simonguefado',
        price: 50.00,
        image: 'https://via.placeholder.com/400x300?text=X+Simonguef'
    },
    {
        id: 10,
        name: 'X Casacao',
        description: 'Pão, Hambúrguer, Queijo, Tomate, Alface, Milho e Ervilha, Acompanhamento guardarer, maionese e ketchup',
        price: 53.00,
        image: 'https://via.placeholder.com/400x300?text=X+Casacao'
    },
    {
        id: 11,
        name: 'X Bacon',
        description: 'Hamburguês com Mozzarella, Milho, Milho, Ervilha e Tomate, Acompanhamento guardarerupa, maionese e ketchup',
        price: 26.00,
        image: 'https://via.placeholder.com/400x300?text=X+Bacon'
    },
    {
        id: 12,
        name: 'X Salada',
        description: 'Pão Mc, Hambúrguer com Mozzarella, Milho, Tomate, Coco, Queijo, Alface, Acompanhamento guardarerupa, maionese e ketchup',
        price: 23.00,
        image: 'https://via.placeholder.com/400x300?text=X+Salada'
    },
    {
        id: 13,
        name: 'X Calabresa',
        description: 'Pão, Hambúrguer, Mozzarella, Calabresa, Milho, Cheddar, Coco, Queijo, Alface, Acompanhamento guardarerupa, maionese e ketchup',
        price: 24.00,
        image: 'https://via.placeholder.com/400x300?text=X+Calabresa'
    },
    {
        id: 14,
        name: 'X Entrevero',
        description: 'Pão, Hambúrguer, Mozzarella, Carne de Frango, Calabresas, Coco, Ervilha e Alface, Acompanhamento guardarerupa, maionese e ketchup',
        price: 30.00,
        image: 'https://via.placeholder.com/400x300?text=X+Entrevero'
    },
    {
        id: 15,
        name: 'Dog Entrevero',
        description: 'Crabe de Milho com Lárboca de Carne, Carreta de Frango, Bacon, Queijo, Cheddar, Batata Farina, Milho, Ervilha e Calabresa',
        price: 22.00,
        image: 'https://via.placeholder.com/400x300?text=Dog+Entrevero'
    },
    {
        id: 16,
        name: 'Dog Moes',
        description: 'Crabe de Milho com Mozzarella Especial, Milho Especial, Calabris, Bacon, Cheddar, Queijo Frango, Milho e Ervilha, Acompanhamento guardarerupa',
        price: 20.00,
        image: 'https://via.placeholder.com/400x300?text=Dog+Moes'
    },
    {
        id: 17,
        name: 'Malonese Extra',
        description: 'Crabe de Milho com Calabresa, Milho',
        price: 5.00,
        image: 'https://via.placeholder.com/400x300?text=Malonese+Extra'
    },

    // ============ PORÇÕES ============
    {
        id: 18,
        name: 'Porcao De Polenta',
        description: 'Porcao de Polenta com Acompanhamento guardarerupa, maionese e ketchup',
        price: 17.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+De+Polenta'
    },
    {
        id: 19,
        name: 'Porcao Fritas Com File',
        description: 'Batata Frita com Fila de Carne e Queijo, Acompanhamento guardarerupa, maionese e ketchup',
        price: 45.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+Fritas+Com+File'
    },
    {
        id: 20,
        name: 'Batata + Calabrasa + Queijo Grandes',
        description: 'Porcao grande de batata Frita com Calabrasa e Queijo, Acompanhamento guardarerupa, maionese e ketchup',
        price: 45.00,
        image: 'https://via.placeholder.com/400x300?text=Batata+Calabresa+Queijo+Grande'
    },
    {
        id: 21,
        name: 'Batata + Calabresa + Queijo Media',
        description: 'Porcao media de batata Frita com Calabrasa e Queijo, Acompanhamento guardarerupa, maionese e ketchup',
        price: 35.00,
        image: 'https://via.placeholder.com/400x300?text=Batata+Calabresa+Queijo+Media'
    },
    {
        id: 22,
        name: 'Polenta + Calabrasa + Queijo',
        description: 'Porcao media de Polenta com Calabrasa e Queijo, Acompanhamento guardarerupa, maionese e ketchup',
        price: 35.00,
        image: 'https://via.placeholder.com/400x300?text=Polenta+Calabrasa+Queijo'
    },
    {
        id: 23,
        name: 'Porcao De Tilapia Media',
        description: 'Porcao media de Tilapia com Polenta e Milho, Acompanhamento guardarerupa, maionese e ketchup',
        price: 49.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+De+Tilapia+Media'
    },
    {
        id: 24,
        name: 'Porcao De Pritas Grande',
        description: 'Porcao Grande de batata Frita, Acompanhamento guardarerupa, maionese e ketchup',
        price: 27.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+De+Pritas+Grande'
    },
    {
        id: 25,
        name: 'Porcao Pritas Com File',
        description: 'Porcao Pritas Com Fila de Carne e Queijo, Acompanhamento guardarerupa, maionese e ketchup',
        price: 45.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+Pritas+Com+File'
    },
    {
        id: 26,
        name: 'Porcao De Pritas Media',
        description: 'Porcao media de batata Frita, Acompanhamento guardarerupa, maionese e ketchup',
        price: 19.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+De+Pritas+Media'
    },
    {
        id: 27,
        name: 'Porcao De Tilapia Grande',
        description: 'Porcao Grande de Tilapia com Fila de Peixes, Coco de Calabresa, Polenta e Mozzarella Acompanhamento guardarerupa',
        price: 67.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+De+Tilapia+Grande'
    },
    {
        id: 28,
        name: 'Porcao Gacinha Media',
        description: 'Porcao media com Carne, Frango, Calabrasa, Batata Frita, Coco de Calabresa, Polenta e Mozzarella Acompanhamento guardarerupa',
        price: 47.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+Gacinha+Media'
    },
    {
        id: 29,
        name: 'Porcao Gacinha Grande',
        description: 'Porcao Grande com Carne, Frango, Calabrasa, Batata Frita, Coco de Calabresa, Polenta e Mozzarella Acompanhamento guardarerupa',
        price: 67.00,
        image: 'https://via.placeholder.com/400x300?text=Porcao+Gacinha+Grande'
    },

    // ============ PASTÉIS ============
    {
        id: 30,
        name: 'Pastel Frango',
        description: 'Pastel crocante Frango, Acompanhamento guardarerupa, maionese e ketchup',
        price: 20.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+Frango'
    },
    {
        id: 31,
        name: 'Pastel Entrevero',
        description: 'Pastel Entrevero, Acompanhamento guardarerupa, maionese e ketchup',
        price: 22.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+Entrevero'
    },
    {
        id: 32,
        name: 'Pastel Simonguef',
        description: 'Pastel crocante Simonguef, Acompanhamento guardarerupa, maionese e ketchup',
        price: 22.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+Simonguef'
    },
    {
        id: 33,
        name: 'Pastel Queijo + Calabresa',
        description: 'Pastel crocante Queijo + Calabresa, Acompanhamento guardarerupa, maionese e ketchup',
        price: 20.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+Queijo+Calabresa'
    },
    {
        id: 34,
        name: 'Pastel Entrevero',
        description: 'Pastel crocante Entrevero, Acompanhamento guardarerupa, maionese e ketchup',
        price: 22.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+Entrevero2'
    },
    {
        id: 35,
        name: 'Pastel da Chocolate',
        description: 'Pastel crocante da Chocolate',
        price: 8.00,
        image: 'https://via.placeholder.com/400x300?text=Pastel+da+Chocolate'
    },

    // ============ REFRIGERANTES ============
    {
        id: 36,
        name: 'Coca Cola Lata',
        description: 'Refrigerante Coca Cola Lata',
        price: 6.00,
        image: 'https://via.placeholder.com/400x300?text=Coca+Cola+Lata'
    },
    {
        id: 37,
        name: 'Coca Cola 200ml - Caixa',
        description: 'Refrigerante Coca Cola 200ml',
        price: 8.00,
        image: 'https://via.placeholder.com/400x300?text=Coca+Cola+200ml'
    },
    {
        id: 38,
        name: 'Coca Cola 2L',
        description: 'Refrigerante Coca Cola 2 litros',
        price: 10.00,
        image: 'https://via.placeholder.com/400x300?text=Coca+Cola+2L'
    },
    {
        id: 39,
        name: 'Coca Cola 2L - Caixa',
        description: 'Refrigerante Coca Cola 2 litros',
        price: 10.00,
        image: 'https://via.placeholder.com/400x300?text=Coca+Cola+2L+Caixa'
    },
    {
        id: 40,
        name: 'Coca Cola 2.5L',
        description: 'Refrigerante Coca Cola 2.5 litros',
        price: 18.00,
        image: 'https://via.placeholder.com/400x300?text=Coca+Cola+2.5L'
    },
    {
        id: 41,
        name: 'Sprite 2L',
        description: 'Refrigerante Sprite 2 litros',
        price: 15.00,
        image: 'https://via.placeholder.com/400x300?text=Sprite+2L'
    },
    {
        id: 42,
        name: 'Fanta Laranja 2L',
        description: 'Refrigerante Fanta Laranja 2 litros',
        price: 15.00,
        image: 'https://via.placeholder.com/400x300?text=Fanta+Laranja+2L'
    },

    // ============ CERVEJAS ============
    {
        id: 43,
        name: 'Iced Ice Bl',
        description: 'Cerveja Iced Ice Bl',
        price: 8.00,
        image: 'https://via.placeholder.com/400x300?text=Iced+Ice+Bl'
    },
    {
        id: 44,
        name: 'Corona Long',
        description: 'Cerveja Corona Long Neck',
        price: 9.00,
        image: 'https://via.placeholder.com/400x300?text=Corona+Long'
    },
    {
        id: 45,
        name: 'Budweiser Long Neck',
        description: 'Cerveja Budweiser Long Neck',
        price: 8.00,
        image: 'https://via.placeholder.com/400x300?text=Budweiser+Long+Neck'
    },
    {
        id: 46,
        name: 'Heineken Long Zero',
        description: 'Cerveja Heineken Long Zero Alco',
        price: 10.00,
        image: 'https://via.placeholder.com/400x300?text=Heineken+Long+Zero'
    },
    {
        id: 47,
        name: 'Heineken Long',
        description: 'Cerveja Heineken Long Neck',
        price: 9.00,
        image: 'https://via.placeholder.com/400x300?text=Heineken+Long'
    },

    // ============ BEBIDAS ENERGÉTICAS ============
    {
        id: 48,
        name: 'Monster',
        description: 'Energético Monster',
        price: 16.00,
        image: 'https://via.placeholder.com/400x300?text=Monster'
    },
    {
        id: 49,
        name: 'Energético Baby',
        description: 'Energético Baby',
        price: 17.00,
        image: 'https://via.placeholder.com/400x300?text=Energetico+Baby'
    }
];
