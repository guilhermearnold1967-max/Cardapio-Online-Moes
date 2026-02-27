# 🍔 Sistema de Cardápio Online - Documentação Completa

## 📋 Visão Geral

Sistema responsivo (mobile-first) de cardápio online com carrinho de compras, checkout de 2 etapas e integração WhatsApp.

**Tecnologias:** HTML5 + CSS3 + JavaScript Vanilla  
**Arquivo:** Um único HTML autossuficiente  
**Responsividade:** Mobile-first, totalmente funcional em desktop  
**Armazenamento:** localStorage (persiste carrinho)  

---

## 🚀 Como Usar

### 1. Abrir em navegador
Simplesmente abra o arquivo `cardapio-online.html` no navegador. Não precisa de servidor, funciona localmente!

### 2. Fluxo do usuário
1. Visualizar produtos com imagem, descrição e preço
2. Clique em "Adicionar" para abrir modal
3. Ajuste quantidade e adicione observações (ex: "sem cebola")
4. Clique em "Adicionar ao Carrinho"
5. Acesse o carrinho (ícone 🛒) para ajustar quantidade/remover itens
6. Clique em "Finalizar Pedido"
7. Selecione forma de pagamento (Dinheiro, PIX, Débito, Crédito)
8. Preencha endereço completo (CEP auto-completa cidade/estado)
9. Clique em "Enviar Pedido para WhatsApp"
10. Abre WhatsApp com mensagem formatada automaticamente

---

## ⚙️ CUSTOMIZAÇÃO

### 1️⃣ Alterar Número do WhatsApp

**Localização:** Linha ~665

```javascript
const WHATSAPP_NUMBER = '5549999999999'; // Formato: 55 + DDD + NÚMERO
```

**Exemplo:**
- Para São Paulo: `'5511987654321'` (55 + 11 + 987654321)
- Para Paraná: `'5549999999999'` (55 + 49 + 999999999)
- Para Minas Gerais: `'5531987654321'` (55 + 31 + 987654321)

⚠️ **Importante:** Sempre use formato internacional (55 + DDD + número, sem caracteres especiais)

---

### 2️⃣ Alterar Produtos do Cardápio

**Localização:** Linhas ~668-707

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: 'X-Bacon',
        description: 'Hambúrguer com bacon crocante e queijo derretido',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'X-Salada',
        description: 'Hambúrguer fresco com alface, tomate e cebola',
        price: 16.50,
        image: 'https://images.unsplash.com/photo-1550547990-a18ffd8d3c50?w=400&h=300&fit=crop'
    },
    // ... mais produtos
];
```

#### Como Adicionar um Novo Produto:

```javascript
{
    id: 7,  // ID único (incrementar)
    name: 'Nome do Produto',
    description: 'Descrição curta e atrativa',
    price: 19.90,  // Preço em reais
    image: 'URL_DA_IMAGEM'  // URL da imagem
}
```

#### URLs de Imagens Recomendadas:

**Opção 1: Unsplash (Gratuito)**
- https://unsplash.com
- Copiar o link direto da imagem

**Opção 2: Placeholder temporário**
```
https://via.placeholder.com/400x300?text=Nome+do+Produto
```

**Opção 3: Hospedagem própria**
- Upload em seu servidor
- Exemplo: `https://seusite.com/images/xbacon.jpg`

---

### 3️⃣ Alterar Nome e Branding da Loja

**Nome da loja (Header):** Linha ~49
```html
<div class="header-logo">Sabor & Cia</div>
```

**Emoji da loja:** Linha ~50
```html
<div class="header-logo">👉 MUDAR EMOJI 🍕</div>
```

**Título da página:** Linha ~7
```html
<title>Sabor & Cia - Cardápio Online</title>
```

**Mensagem Hero:** Linhas ~1100-1101
```html
<h1>Bem-vindo! 👋</h1>
<p>Escolha os melhores pratos e aproveite!</p>
```

---

### 4️⃣ Alterar Cores e Tema

**Localização:** Linhas ~18-35 (CSS Variables)

```css
:root {
    --primary: #ff6b35;           /* Cor principal (botões, destaques) */
    --primary-dark: #d9511f;      /* Tom escuro do primary */
    --secondary: #f7931e;         /* Cor secundária (badge) */
    --accent: #004e89;            /* Cor de contraste (CTAs) */
    --accent-light: #1b7ba6;      /* Tom claro do accent */
    --bg: #fafafa;                /* Fundo principal */
    --bg-dark: #f0f0f0;           /* Fundo secundário */
    --text: #2c2c2c;              /* Texto principal */
    --text-light: #666;           /* Texto secundário */
    --border: #e0e0e0;            /* Bordas */
}
```

**Exemplo: Tema Vermelho/Verde (Pizzaria)**
```css
--primary: #d32f2f;           /* Vermelho vibrante */
--primary-dark: #b71c1c;      /* Vermelho escuro */
--secondary: #2ecc71;         /* Verde */
--accent: #1b5e20;            /* Verde escuro */
```

---

### 5️⃣ Personalizar Textos e Mensagens

| Onde | Quê | Linhas |
|------|-----|--------|
| "Sabor & Cia" | Nome loja | 49 |
| "Bem-vindo! 👋" | Título hero | 1101 |
| "Escolha os melhores..." | Subtítulo hero | 1102 |
| "Cardápio" | Título seção produtos | 1109 |
| "Seu Carrinho" | Título drawer | 1122 |
| "Finalizar Pedido" | Título checkout | 1130 |

---

## 📱 Funcionalidades Detalhadas

### ✅ Modal Adicionar Produto
- Quantidade ajustável (+ / -)
- Campo de observações personalizadas
- Validação automática
- Persiste dados no localStorage

### ✅ Carrinho (Drawer)
- Lista todos itens com quantidade
- Mostra observações de cada item
- Botões +/- para ajustar quantidade
- Botão para remover item
- Total geral calculado automaticamente
- Persiste ao fechar/reabrir browser

### ✅ Checkout - Etapa 1 (Pagamento)
- 4 formas de pagamento (Dinheiro, PIX, Débito, Crédito)
- Se "Dinheiro" → aparece campo "Troco para"
- Campo observação geral do pedido
- Validação obrigatória

### ✅ Checkout - Etapa 2 (Endereço)
- **Campos Obrigatórios:**
  - Nome Completo
  - Telefone/WhatsApp
  - CEP (com auto-preenchimento)
  - Rua
  - Número
  - Bairro
  - Cidade (auto-preenchida por CEP)
  - Estado/UF (auto-preenchido por CEP)

- **Campos Opcionais:**
  - Complemento (Apto, Casa, etc)
  - Referência (próximo a um ponto)

### ✅ Auto-Preenchimento por CEP
- Integração com API ViaCEP (gratuita e sem chave)
- Ao sair do campo CEP, busca automaticamente:
  - Rua/Logradouro
  - Bairro
  - Cidade
  - Estado/UF
- Validação: mostra erro se CEP inválido

### ✅ Envio WhatsApp
- Ao finalizar, abre WhatsApp Web/App
- Mensagem formatada e completa com:
  - Lista de itens com observações
  - Observação geral do pedido
  - Total calculado
  - Forma de pagamento
  - Troco (se dinheiro)
  - Dados completos do cliente
  - Endereço completo com CEP

---

## 💬 Exemplo de Mensagem WhatsApp Gerada

```
📦 NOVO PEDIDO

🛒 ITENS:
• 2x X-Bacon - R$ 37,80
  📝 Obs: sem cebola
• 1x Fritas Premium - R$ 8,50
• 1x Refrigerante 2L - R$ 9,90
  📝 Obs: gelado

💬 Observação do Pedido:
Entregar rápido, não tocar campainha

💰 Total: R$ 56,20
💳 Pagamento: Dinheiro
💵 Troco para: R$ 50,00

👤 Cliente: João Silva
📞 Telefone: (11) 98765-4321

📍 ENDEREÇO:
Avenida Paulista, 1000
Bela Vista
São Paulo - SP
CEP: 01311-100
Complemento: Apto 501, Bloco A
Referência: Próximo ao metrô Consolação
```

---

## 🎨 Estrutura de Cores

### Paleta Padrão (Quente e Acolhedora)
- **Primary (#ff6b35):** Laranja vibrante - CTAs, botões principais
- **Secondary (#f7931e):** Laranja claro - badges, destaques
- **Accent (#004e89):** Azul profundo - botões importantes
- **Backgrounds:** Brancos e cinzas claros

### Sugestões de Paletas Alternativas:

**Pizzaria (Vermelho/Verde):**
```css
--primary: #d32f2f;
--secondary: #2ecc71;
--accent: #1b5e20;
```

**Café/Bakery (Marrom/Bege):**
```css
--primary: #8b4513;
--secondary: #daa520;
--accent: #4a2511;
```

**Sushi/Asiático (Roxo/Rosa):**
```css
--primary: #c41e3a;
--secondary: #ffc0cb;
--accent: #4b0082;
```

---

## 📐 Responsividade

### Breakpoints
- **Mobile:** até 640px (tela cheia)
- **Tablet:** 641px - 1024px (grid 2 colunas)
- **Desktop:** acima de 1024px (grid 3+ colunas)

### Comportamentos Responsivos:
- **Header:** Sempre sticky no topo
- **Produtos:** Grid fluido (mínimo 280px)
- **Carrinho:** Drawer slide-in (mobile) / Modal (desktop)
- **Checkout:** Modal centralizado com scroll interno

---

## 🔒 Segurança e Boas Práticas

### ✅ Implementado
- Validação de campos obrigatórios
- Sanitização de inputs (previne XSS)
- localStorage para carrinho (dados não saem do navegador)
- Não armazena dados sensíveis
- Números formatados corretamente

### ⚠️ Importante
- **Dados não são salvos em servidor** - tudo é local
- **Carrinho limpa após envio** para WhatsApp
- **CEP é buscado em API pública** (sem autenticação)
- **WhatsApp link é padrão** (wa.me - sem SDK externo)

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Imagens não carregam | Verificar URL da imagem / usar placeholder |
| CEP não auto-completa | Validar CEP (8 dígitos) / verificar internet |
| WhatsApp não abre | Verificar número (55 + DDD + número) / ter WhatsApp instalado |
| Carrinho vazio ao recarregar | Limpar localStorage do navegador |
| Styling quebrado | Certificar que arquivo não foi truncado |

---

## 📊 Estatísticas

- **Tamanho do arquivo:** ~40KB (HTML único)
- **Imagens:** Referenciadas externamente (não aumenta arquivo)
- **Dependências externas:** Apenas API ViaCEP (gratuita)
- **Compatibilidade:** Chrome, Firefox, Safari, Edge (últimas 2 versões)

---

## 🚀 Próximas Melhorias Opcionais

1. **Banco de Dados:** Salvar pedidos em servidor
2. **Autenticação:** Login de clientes
3. **Dashboard:** Relatório de pedidos para lojista
4. **Cupons:** Código desconto
5. **Notificações:** SMS/Email de confirmação
6. **Integração Pagamento:** Stripe, Mercado Pago
7. **PWA:** Instalável como app mobile
8. **Multi-idioma:** PT-BR, EN, ES

---

## 📞 Suporte

Para dúvidas ou customizações:
1. Revisar documentação acima
2. Verificar comentários no código JS
3. Consultar exemplo de produtos já configurados
4. Testar em navegador moderno (Chrome/Firefox)

---

**Versão:** 1.0  
**Última atualização:** 2026  
**Licença:** Livre para uso comercial  
