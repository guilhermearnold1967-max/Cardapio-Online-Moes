# ⚡ Guia Rápido - 5 Minutos

## 🎯 Resumo: O Que Você Tem

Um arquivo HTML único que funciona como **cardápio online completo**:
- ✅ Responsive (mobile-first)
- ✅ Carrinho de compras
- ✅ Checkout em 2 etapas
- ✅ Integração WhatsApp
- ✅ CEP auto-completa
- ✅ Sem servidor necessário

---

## 🚀 Começar em 5 Passos

### Passo 1: Abrir o Arquivo (30 seg)
```
Clique duplo em: cardapio-online.html
Abre no navegador automaticamente
```

### Passo 2: Trocar Número WhatsApp (1 min)
```
1. Abrir arquivo em editor (Bloco de Notas, VS Code, etc)
2. Procurar: "const WHATSAPP_NUMBER"
3. Trocar: '5549999999999' pelo seu número
   Formato: 55 + DDD + NÚMERO (sem espaços)
4. Salvar (Ctrl+S)
5. Recarregar página (F5)
```

### Passo 3: Alterar Produtos (2 min)
```
1. Procurar: "const PRODUCTS = ["
2. Alterar nome, descrição, preço
3. Manter imagens (ou trocar URL)
4. Salvar e recarregar
```

### Passo 4: Testar no Celular (1 min)
```
1. Salvar arquivo em nuvem (Google Drive, Dropbox)
2. Abrir link no celular
3. Adicionar produto → Carrinho → Finalizar → WhatsApp
4. Verificar mensagem
```

### Passo 5: Publicar Online (Opcional - 1 min)
```
Opção A - Netlify (MAIS FÁCIL):
1. Ir em netlify.com
2. Arrastar arquivo cardapio-online.html
3. Pronto! Link gerado automático
   Exemplo: serene-muffin-4a92c3.netlify.app

Opção B - GitHub Pages:
1. Criar conta github.com
2. Novo repositório
3. Upload do arquivo
4. Ativar GitHub Pages nas settings

Opção C - Seu servidor:
1. FTP para seu hosting
2. Arquivo em: /public_html/
3. Acessar: seusite.com/cardapio-online.html
```

---

## 📝 Checklist Rápido

- [ ] Arquivo aberto no navegador?
- [ ] Número WhatsApp alterado?
- [ ] Produtos adicionados?
- [ ] Testado fluxo completo?
- [ ] Imagens carregando?
- [ ] Mensagem WhatsApp correta?

---

## 🔧 Alterações Principais (Copy-Paste)

### Alterar Número WhatsApp
**Localizar:**
```javascript
const WHATSAPP_NUMBER = '5549999999999';
```

**Trocar por:** (Exemplo São Paulo)
```javascript
const WHATSAPP_NUMBER = '5511987654321';
```

---

### Alterar Primeiro Produto

**Localizar:**
```javascript
{
    id: 1,
    name: 'X-Bacon',
    description: 'Hambúrguer com bacon crocante e queijo derretido',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
},
```

**Trocar por:** (Exemplo Sushi)
```javascript
{
    id: 1,
    name: 'Sushi Salmão',
    description: 'Salmão fresco com arroz e alga nori',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
},
```

---

### Alterar Nome da Loja

**Localizar:**
```html
<div class="header-logo">Sabor & Cia</div>
```

**Trocar por:**
```html
<div class="header-logo">🍣 Meu Restaurante</div>
```

---

### Alterar Cores (Exemplo: Vermelho)

**Localizar:**
```css
:root {
    --primary: #ff6b35;
```

**Trocar por:**
```css
:root {
    --primary: #d32f2f;  /* Vermelho */
```

---

## 📱 Testar Fluxo Completo

1. **Abrir página** → Deve mostrar cardápio
2. **Clicar "Adicionar"** → Abre modal com quantidade
3. **Aumentar qtd + obs** → Ex: "Sem cebola"
4. **"Adicionar ao Carrinho"** → Item aparece no carrinho
5. **Clicar 🛒 (ícone)** → Drawer abre com itens
6. **"Finalizar Pedido"** → Abre checkout
7. **Selecionar pagamento** → Ex: "Dinheiro"
8. **Preencher endereço** → CEP deve auto-completar
9. **"Enviar..."** → Abre WhatsApp com mensagem

**✅ Se chegou aqui: Está funcionando!**

---

## ❌ Se Algo Não Funcionar

### Página fica branca
```
Solução: F12 (abrir console) e verificar erros
Causa comum: Vírgula ou parêntese faltando
```

### Imagens não carregam
```
Solução: Usar URL válida que comece com http
Exemplo certo: https://images.unsplash.com/...
```

### CEP não completa
```
Solução: Verificar internet e CEP com 8 dígitos
Testar em: viacep.com.br/ws/01310100/json/
```

### WhatsApp não abre
```
Solução: Número no formato 55DDNÚMERO (sem caracteres)
Exemplo correto: 5511987654321 (55+11+987654321)
```

---

## 💾 Onde Salvar

**Local:**
```
C:\Users\Seu Nome\Desktop\cardapio-online.html
```

**Nuvem:**
```
Google Drive → cardapio-online.html
Dropbox → cardapio-online.html
OneDrive → cardapio-online.html
```

**Servidor (Hosting):**
```
seusite.com/cardapio-online.html
```

---

## 🎨 Paletas de Cor Prontas

### Pizzaria (Vermelho/Verde)
```css
--primary: #d32f2f;
--secondary: #2ecc71;
--accent: #1b5e20;
```

### Sushi (Vermelho/Roxo)
```css
--primary: #c41e3a;
--secondary: #ffc0cb;
--accent: #4b0082;
```

### Café (Marrom/Bege)
```css
--primary: #8b4513;
--secondary: #d2b48c;
--accent: #5c2e0a;
```

### Lanchonete (Amarelo/Vermelho)
```css
--primary: #f9a825;
--secondary: #ff6b6b;
--accent: #004e89;
```

---

## 📊 Estrutura do Arquivo

```
cardapio-online.html
├── HTML (Estrutura)
│   └── Header, Produtos, Modals, Formulários
├── CSS (Estilos)
│   └── Cores, Layout, Responsividade, Animações
└── JavaScript (Lógica)
    ├── Carrinho (localStorage)
    ├── Checkout
    ├── API ViaCEP
    └── WhatsApp Integration
```

---

## 🌐 URLs Importantes

| Recurso | URL |
|---------|-----|
| Imagens (Unsplash) | unsplash.com |
| CEP (ViaCEP) | viacep.com.br |
| Hospedagem (Netlify) | netlify.com |
| Hospedagem (Vercel) | vercel.com |
| Hospedagem (GitHub Pages) | pages.github.com |

---

## 🎯 Próximos Passos

**Curto prazo:**
1. Customizar com seus produtos
2. Compartilhar link com clientes
3. Adicionar QR code

**Médio prazo:**
1. Publicar online (Netlify/GitHub)
2. Anúncios em redes sociais
3. Integrar com Google Meu Negócio

**Longo prazo:**
1. Sistema de pagamento integrado
2. Dashboard de pedidos
3. Notificações automáticas

---

## 💡 Dicas Rápidas

1. **Produtos de alta qualidade** = Mais conversão
2. **Descrição clara** = Menos dúvidas
3. **Imagens grandes** = Mobile melhor
4. **Preços destacados** = Mais visível
5. **Botão chamar atenção** = Mais cliques

---

## 🚀 Pronto Para Usar!

Seu cardápio online está **100% funcional** e pronto para receber pedidos.

**Basta:**
1. ✅ Abrir arquivo
2. ✅ Trocar número WhatsApp
3. ✅ Adicionar produtos
4. ✅ Compartilhar link
5. ✅ Começar a vender!

---

## 📚 Documentação Completa

Para mais detalhes, consulte:
- **DOCUMENTACAO.md** - Guia completo e técnico
- **EXEMPLOS-PRATICOS.md** - Exemplos reais por tipo de negócio
- **FAQ-TROUBLESHOOTING.md** - Perguntas e soluções

---

## 🎉 Parabéns!

Você agora tem um **cardápio online profissional, responsivo e totalmente funcional!**

Sucesso nos seus pedidos! 🚀
