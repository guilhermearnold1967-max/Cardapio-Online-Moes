# 📝 Como Atualizar o Cardápio no GitHub - Mões

## 🎯 Você Tem 2 Opções

### **OPÇÃO 1: Fazer Upload do Arquivo Novo (MAIS FÁCIL)**

#### Passo 1: Baixe o arquivo novo
- Arquivo: `cardapio-online-moes.html`
- Este arquivo já tem todos os 49 produtos do Mões!

#### Passo 2: Renomeie para `cardapio-online.html`
- Clique com botão direito no arquivo
- Selecione "Renomear"
- Mude para: `cardapio-online.html`

#### Passo 3: Vá para seu repositório no GitHub
```
https://github.com/guilhermearnold1967/cardapio-online
```

#### Passo 4: Delete o arquivo antigo
1. Clique no arquivo `cardapio-online.html`
2. Clique no ícone de lixeira (delete)
3. Clique em "Commit changes"

#### Passo 5: Faça upload do novo arquivo
1. Clique em "Add file" → "Upload files"
2. Arraste o novo `cardapio-online.html`
3. Clique em "Commit changes"

#### Passo 6: Aguarde 2-5 minutos
GitHub vai processar. Depois teste:
```
https://guilhermearnold1967-max.github.io/Cardapio-Online-Moes/
```

---

### **OPÇÃO 2: Editar Manualmente (Mais Controle)**

#### Passo 1: Abra seu arquivo no GitHub
1. Vá para: `https://github.com/guilhermearnold1967/cardapio-online`
2. Clique no arquivo `cardapio-online.html`
3. Clique no ícone de lápis (editar)

#### Passo 2: Encontre a linha 1001
Use `Ctrl+G` para ir para linha 1001

#### Passo 3: Selecione todos os produtos
Procure pelo bloco `const PRODUCTS = [` até `];`

Selecione TODO o conteúdo entre as chaves

#### Passo 4: Copie o novo código
Pegue TODO o código de `produtos-moes.js`

#### Passo 5: Substitua
Delete o antigo e cole o novo

#### Passo 6: Commit
- Clique em "Commit changes"
- Adicione mensagem: "Atualizar cardápio com produtos do Mões"

#### Passo 7: Aguarde e teste
```
https://guilhermearnold1967-max.github.io/Cardapio-Online-Moes/
```

---

## ⚠️ NÃO ESQUEÇA!

### Ainda precisa alterar:
1. **Número do WhatsApp** (linha 998)
   ```javascript
   const WHATSAPP_NUMBER = 'SEU_NÚMERO_AQUI';
   ```

2. **Nome da Loja** (linha 799 - se quiser)
   ```html
   <div class="header-logo">🍔 Mões</div>
   ```

---

## ✅ Pronto!

Após os passos acima, seu cardápio estará:
- ✅ Atualizado com todos os produtos
- ✅ Online e acessível
- ✅ Pronto para receber pedidos via WhatsApp

---

## 🆘 Dúvidas?

**Qual opção você prefere?**
- Opção 1 = Mais rápida e fácil (upload novo arquivo)
- Opção 2 = Mais controle (editar no GitHub mesmo)

Me avisa qual escolhe! 🚀
