# 🛠️ Guia Prático de Customização - Exemplos Reais

## 📝 EXEMPLO 1: Mudar Número do WhatsApp

### Situação
Você quer receber pedidos no seu WhatsApp pessoal.

### Passo a Passo

1. Abra o arquivo `cardapio-online.html` em um editor de texto
   - Windows: Notepad++, VS Code, Sublime Text
   - Mac: TextEdit, VS Code
   - Online: replit.com, codepen.io

2. Pressione `Ctrl+F` (ou `Cmd+F` no Mac) para "Encontrar"

3. Procure por: `const WHATSAPP_NUMBER`

4. Você verá:
   ```javascript
   const WHATSAPP_NUMBER = '5549999999999';
   ```

5. Substitua pelo seu número:
   ```javascript
   const WHATSAPP_NUMBER = '5511987654321'; // Exemplo: São Paulo, número 98765-4321
   ```

### Formato Correto
```
55 + DDD + NÚMERO (sem traço, parênteses ou espaços)

Exemplos:
✅ São Paulo (11) 98765-4321  →  5511987654321
✅ Rio (21) 99876-5432        →  5521998765432
✅ Paraná (49) 3033-3333      →  5549303333333
✅ Celular com 9 dígitos      →  55 + DDD + 9 dígitos
```

### Validação
Após salvar, teste abrindo a página:
- Clique em um botão "Adicionar"
- Vá até o final do checkout
- A URL gerada deve conter seu número

---

## 🍽️ EXEMPLO 2: Mudar Produtos - Pizzaria

### Cenário
Você tem uma pizzaria e quer colocar seus produtos.

### Passo a Passo

1. Localize a seção `const PRODUCTS` (procure por `const PRODUCTS`)

2. Substitua ou adicione pizzas:

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Pizza Margherita',
        description: 'Molho de tomate, mozzarella, manjericão e azeite',
        price: 42.00,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Pizza Pepperoni',
        description: 'Molho, mozzarella, pepperoni e orégano',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Pizza Quatro Queijos',
        description: 'Gorgonzola, brie, parmesão e mozzarella',
        price: 52.00,
        image: 'https://images.unsplash.com/photo-1511689915726-cd4628902d4a?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Refrigerante 1L',
        description: 'Coca-Cola, Sprite ou Fanta',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1554866585-acbb2f46b34d?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Cerveja Artesanal',
        description: 'Seleção de cervejas locais (600ml)',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop'
    }
];
```

### URLs de Imagens de Pizzas (Unsplash)
```
Margherita: https://images.unsplash.com/photo-1604068549290-dea0e4a305ca
Pepperoni: https://images.unsplash.com/photo-1628840042765-356cda07f4ee
4 Queijos: https://images.unsplash.com/photo-1511689915726-cd4628902d4a
Havaiana: https://images.unsplash.com/photo-1571125767396-24b5259a4995
Calabresa: https://images.unsplash.com/photo-1585238341710-4913dfafecaf
```

### Resultado
Página mostrará 5 produtos de pizzaria com preços e imagens!

---

## 🌮 EXEMPLO 3: Adicionar Restaurante Mexicano

### Passo a Passo

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Tacos al Pastor (3 unid)',
        description: 'Tacos com carne marinada, cebola e cilantro',
        price: 24.00,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Burrito Completo',
        description: 'Tortilla com carne, feijão, queijo e molho',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1612528443702-f6741f96a6de?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Enchilada Vermelha',
        description: 'Enchiladas com molho vermelho, queijo derretido',
        price: 38.00,
        image: 'https://images.unsplash.com/photo-1585238341710-4913dfafecaf?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Guacamole com Tortillas',
        description: 'Guacamole fresco com tortillas crocantes',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Margarita Clássica',
        description: 'Drink mexicano com tequila, limão e sal',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1550788519-ded4dc34e330?w=400&h=300&fit=crop'
    }
];
```

### Alterar Nome da Loja

Procure por:
```html
<div class="header-logo">Sabor & Cia</div>
```

Mude para:
```html
<div class="header-logo">🌮 Sabor Mexicano</div>
```

---

## 🍣 EXEMPLO 4: Restaurante Sushi com Cores Temáticas

### 1. Alterar Nome
```html
<div class="header-logo">🍣 Sushi Prime</div>
```

### 2. Mudar Cores (Vermelho/Rosa - Tema Japonês)

Procure por `:root {` e altere:

```css
:root {
    --primary: #c41e3a;           /* Vermelho Japonês */
    --primary-dark: #a01a2f;      /* Vermelho mais escuro */
    --secondary: #ffc0cb;         /* Rosa claro */
    --accent: #4b0082;            /* Roxo */
    --accent-light: #6a0dad;      /* Roxo claro */
    --bg: #f9f7f4;                /* Bege claro */
    --bg-dark: #ece6e1;           /* Bege escuro */
    --text: #1a1a1a;              /* Texto escuro */
    --text-light: #555;           /* Texto cinza */
    --border: #ddd;               /* Bordas */
}
```

### 3. Produtos de Sushi

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Sushi Salmão (6 peças)',
        description: 'Salmão fresco com arroz e alga nori',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Philadelphia Roll (8 peças)',
        description: 'Salmão, cream cheese e abacate',
        price: 42.00,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Hot Roll (6 peças)',
        description: 'Salmão grelhado, abacate e cream cheese',
        price: 38.00,
        image: 'https://images.unsplash.com/photo-1600695782490-efaadd9fb3c2?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Temaki de Atum',
        description: 'Cone de alga com atum fresco e vegetais',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Gengibre Sushi',
        description: 'Gengibre fresco em conserva (pote)',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        name: 'Refrigerante Japonês',
        description: 'Ramune ou Calpico 300ml',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1585082674821-e25000b3f346?w=400&h=300&fit=crop'
    }
];
```

### Resultado
Página de sushi com cores temáticas vermelho/roxo!

---

## ☕ EXEMPLO 5: Café/Padaria - Tema Marrom

### 1. Cores
```css
:root {
    --primary: #8b4513;           /* Marrom café */
    --primary-dark: #5c2e0a;      /* Marrom escuro */
    --secondary: #d2b48c;         /* Marrom claro */
    --accent: #3d2817;            /* Marrom profundo */
    --accent-light: #5c4033;      /* Marrom médio */
    --bg: #fef7f0;                /* Bege quente */
    --bg-dark: #f5ede3;           /* Bege escuro */
}
```

### 2. Produtos

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Café Expresso',
        description: 'Expresso puro, encorpado e aromático',
        price: 5.50,
        image: 'https://images.unsplash.com/photo-1559056169-641ef2588f62?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Cappuccino Especial',
        description: 'Café expresso com espuma de leite e cacau',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Croissant de Chocolate',
        description: 'Croissant amanteigado com chocolate belga',
        price: 9.00,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Bolo de Cenoura',
        description: 'Bolo caseiro com cobertura de chocolate',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Sanduíche de Presunto',
        description: 'Pão francês com presunto, queijo e alface',
        price: 14.00,
        image: 'https://images.unsplash.com/photo-1510285585217-e64c5ed56888?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        name: 'Suco Natural',
        description: 'Laranja, maçã, melancia ou melão',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1585518419759-5d4f14cfd807?w=400&h=300&fit=crop'
    }
];
```

### 3. Nome da Loja
```html
<div class="header-logo">☕ Café Premium</div>
```

### 4. Mensagem Hero
```html
<section class="hero">
    <h1>Bem-vindo! ☕</h1>
    <p>Café fresco e aconchego em cada xícara</p>
</section>
```

---

## 🍔 EXEMPLO 6: Lanchonete - Tema Colorido Vibrante

### Cores
```css
:root {
    --primary: #f9a825;           /* Amarelo quente */
    --primary-dark: #e88b00;      /* Laranja */
    --secondary: #ff6b6b;         /* Vermelho */
    --accent: #004e89;            /* Azul profundo */
    --accent-light: #00a8e8;      /* Azul céu */
    --bg: #fff9f0;                /* Bege claro */
    --bg-dark: #ffe8b6;           /* Bege quente */
}
```

### Produtos
```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'Big Burgão',
        description: 'Dois hambúrgueres, queijo, bacon e alface',
        price: 32.00,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Hot Dog Supremo',
        description: 'Salsicha, batata palha, molho especial',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1559821481-f8d5a45e9c48?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Fritas Gigantes',
        description: 'Batata frita com cheddar e bacon',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'Milkshake de Morango',
        description: 'Leite, sorvete e morango fresco',
        price: 14.00,
        image: 'https://images.unsplash.com/photo-1590195281326-f5f9f0c78a4f?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Água Gelada',
        description: 'Copo com gelo e água filtrada',
        price: 2.00,
        image: 'https://images.unsplash.com/photo-1611080626919-d2c3c8c3a4b5?w=400&h=300&fit=crop'
    }
];
```

---

## 🍜 EXEMPLO 7: Combinando Customizações - Restaurante Tailandês

### 1. Arquivo Completo (Trecho)

```html
<!-- Alterar logo -->
<div class="header-logo">🍜 Tai's Cuisine</div>

<!-- Alterar hero -->
<section class="hero">
    <h1>Bem-vindo! 🌶️</h1>
    <p>Sabores autênticos da Tailândia</p>
</section>

<!-- CSS para cores -->
<style>
:root {
    --primary: #c2185b;           /* Rosa/Vermelho tailandês */
    --secondary: #ffb300;         /* Dourado */
    --accent: #00695c;            /* Verde esmeralda */
}
</style>

<!-- Produtos -->
const PRODUCTS = [
    {
        id: 1,
        name: 'Pad Thai',
        description: 'Macarrão de arroz salteado com ovo e amendoim',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1637617802212-2fa0f8f8dcc9?w=400&h=300&fit=crop'
    },
    // ... mais produtos
];
```

### 2. Testar Localmente

1. Abra no navegador
2. Clique em "Adicionar"
3. Veja as cores, nome e produtos funcionando

### 3. Se Algo Quebrar

- Verificar se não há erros de digitação
- Revisar parênteses e chaves
- Recarregar a página (Ctrl+Shift+R)
- Abrir console (F12) para ver erros

---

## ✅ Checklist de Customização Completa

- [ ] Número WhatsApp trocado
- [ ] Produtos da loja adicionados (mínimo 3)
- [ ] Nome da loja atualizado
- [ ] Cores personalizadas (opcional)
- [ ] Mensagem hero atualizada
- [ ] Todas as imagens carregando
- [ ] Testado no celular
- [ ] Teste de finalização com WhatsApp

---

## 🐛 Problemas Comuns

### Problema: Página fica branca após salvar
**Solução:** Verificar se há erros de sintaxe (aspas, vírgulas, chaves)

### Problema: Botões não funcionam
**Solução:** Recarregar página com `Ctrl+Shift+R` (limpar cache)

### Problema: Imagens aparecem como placeholder
**Solução:** Validar URL da imagem - deve começar com `http`

### Problema: WhatsApp não abre
**Solução:** 
- Verificar número (55 + DDD + 9 dígitos)
- Ter WhatsApp instalado ou web.whatsapp.com aberto
- Copiar número exato

---

## 📱 Testar em Celular

1. Salve o arquivo em um lugar que seu celular acesse
2. Abra em navegador mobile
3. Teste fluxo completo
4. Valide responsividade

---

**Dica:** Faça backup do arquivo original antes de fazer muitas alterações!
