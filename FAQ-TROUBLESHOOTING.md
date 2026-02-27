# ❓ FAQ - Perguntas Frequentes

## 🤔 Dúvidas Gerais

### P: Como faço para colocar a página online?
**R:** Existem várias opções gratuitas:

**Opção 1: Netlify (Recomendado - Super fácil)**
1. Acesse netlify.com
2. Faça login com GitHub
3. Arraste o arquivo `cardapio-online.html`
4. Pronto! Link automático gerado

**Opção 2: GitHub Pages**
1. Crie conta no github.com
2. Crie repositório chamado `cardapio`
3. Upload do arquivo
4. Acesse: `seuusername.github.io/cardapio/cardapio-online.html`

**Opção 3: Vercel**
1. Acesse vercel.com
2. Arraste arquivo ou conecte GitHub
3. Deploy automático

**Opção 4: Seu próprio servidor**
- FTP (Filezilla) para upload
- No servidor: `/public_html/cardapio-online.html`

---

### P: Preciso de servidor para funcionar?
**R:** Não! O arquivo funciona 100% localmente:
- Sem backend
- Sem banco de dados
- Sem autenticação
- Tudo rodando no navegador do cliente

---

### P: Os dados dos pedidos são salvos?
**R:** Parcialmente:
- **Carrinho:** Salvo no localStorage (apenas daquele navegador, naquele computador)
- **Pedidos finalizados:** Vão apenas para WhatsApp (você recebe no app)
- **Sem servidor:** Nada é armazenado permanentemente no servidor

**Se quiser persistência:**
- Integrar com Firebase/Supabase
- Enviar dados para email via backend
- Usar API própria para salvar pedidos

---

### P: Funciona em qual celular/navegador?
**R:** Funciona em praticamente todos:

| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome | 90+ | ✅ Perfeito |
| Firefox | 88+ | ✅ Perfeito |
| Safari | 14+ | ✅ Perfeito |
| Edge | 90+ | ✅ Perfeito |
| WhatsApp Browser | - | ✅ Funciona |

**Mobile:** Funciona em iOS e Android (via Chrome, Firefox, Safari)

---

### P: Posso usar com diferentes domínios/subdomínios?
**R:** Sim! O arquivo é independente e funciona em qualquer URL.

---

## 🚀 Performance e Otimização

### P: Como deixar mais rápido?
**R:** O site já é otimizado, mas você pode:

1. **Otimizar imagens:**
   - Usar jpg/webp em vez de png
   - Comprimir em tinypng.com
   - Usar CDN (Cloudinary, Imgix)

2. **Minificar CSS/JS** (apenas se hospedar):
   - Usar ferramentas como minify.com
   - Reduz tamanho em ~30%

3. **Cache:**
   - Se hospedar em servidor, ativar gzip
   - Recomendação: Netlify/Vercel fazem automático

---

### P: O arquivo fica muito grande com muitos produtos?
**R:** O arquivo é muito leve:
- 40KB base
- +1KB por produto (com descrição)
- 100 produtos = ~140KB (ainda rápido)

---

## 🛒 Carrinho e Checkout

### P: Por quanto tempo o carrinho fica salvo?
**R:** Até o usuário:
- Limpar cache do navegador
- Desinstalar cookies
- Trocar de navegador
- Usar navegação privada

Recomendação: Avisar cliente para finalizar logo após adicionar!

---

### P: Posso integrar com sistemas de pagamento?
**R:** Não está implementado, mas é possível adicionar:

**Opções de integração:**
1. **Mercado Pago API** - Gerar link pagável
2. **Stripe** - Checkout integrado
3. **PayPal** - Redireção
4. **PIX Dinâmico** - Gerar QR code

Isso requer backend (Node.js, PHP, Python, etc)

---

### P: Como os pedidos chegam até mim?
**R:** Via WhatsApp:
1. Cliente clica "Finalizar Pedido"
2. WhatsApp abre com mensagem pré-formatada
3. Cliente envia
4. Você recebe na conversa

**Automação:** Usar bots como:
- ManyChat
- ChatBot Evolution
- Z-API (integração com sistemas de gestão)

---

## 📱 Mobile e Responsividade

### P: Funciona bem em celular?
**R:** Sim! Totalmente otimizado para mobile:
- Toque otimizado
- Drawer slide-in lateral
- Grid responsivo
- Fonts grandes e legíveis

---

### P: Posso transformar em app?
**R:** Sim! Existem ferramentas:

**Opção 1: PWA (Progressive Web App)**
```html
<!-- Adicionar manifest.json -->
<link rel="manifest" href="manifest.json">
```
Usuário clica "Adicionar à tela inicial"

**Opção 2: Cordova/Capacitor**
- Wrapper que transforma HTML em app nativo
- Distribui na App Store/Google Play

**Opção 3: React Native/Flutter**
- Reescrever em framework nativo
- Mais robusto, mais caro

---

## 💬 WhatsApp

### P: Qual é o limite de tamanho da mensagem?
**R:** WhatsApp aceita até 4096 caracteres por mensagem.
Com ~50 produtos, você estaria em ~2000 caracteres. Seguro!

---

### P: Posso receber em grupo do WhatsApp?
**R:** Sim! Use o número do grupo:
```javascript
const WHATSAPP_NUMBER = '120363xxxxxxxxxxxxxx@g.us'; // Formato de grupo
```

Mas é mais complexo. Recomendo número pessoal ou comercial.

---

### P: Posso personalizar a mensagem?
**R:** Sim! Procure por `generateAndSendWhatsAppMessage()` (linha ~1040):

Customize o template:
```javascript
let message = `📦 NOVO PEDIDO\n\n`;
message += `Seus customizações aqui\n`;
```

---

### P: Funciona com WhatsApp Business?
**R:** Sim! Com número comercial funciona normalmente.

Para automação avançada (respostas automáticas, CRM), use:
- Zapier
- Integromat
- WhatsApp Cloud API (Meta)

---

## 🎨 Design e Customização

### P: Como mudar as fontes?
**R:** Procure por `--font-display` e `--font-body`:

```css
:root {
    --font-display: 'Sora', sans-serif;
    --font-body: -apple-system, sans-serif;
}
```

Você pode usar:
- Fonts do sistema (rápido)
- Google Fonts (adicionar `<link>`)
- Fontes customizadas (upload próprio)

---

### P: Posso usar com dark mode?
**R:** Sim! Altere as cores CSS:

```css
:root {
    --bg: #1a1a1a;          /* Fundo escuro */
    --white: #2a2a2a;       /* Cards escuros */
    --text: #e0e0e0;        /* Texto claro */
    --text-light: #aaa;     /* Texto cinza claro */
}
```

---

### P: Como adicionar categorias de produtos?
**R:** Adicione uma propriedade `category` e filtre:

```javascript
const PRODUCTS = [
    { id: 1, name: '...', category: 'Burgers', ... },
    { id: 2, name: '...', category: 'Bebidas', ... },
];

// Adicionar abas/filtros para categorias
```

---

## 🔒 Segurança e Dados

### P: É seguro guardar dados de clientes assim?
**R:** Relativo:
- ✅ Tudo é local (não sai do navegador até enviar)
- ✅ Sem backend = sem vazamento de DB
- ✅ CEP é buscado em API pública (segura)
- ⚠️ Dados não são criptografados localmente
- ⚠️ Celular compartilhado pode ter problemas

**Recomendação:** Para dados sensíveis (CPF, cartão), use plataforma de pagamento segura.

---

### P: Preciso de LGPD/GDPR?
**R:** Tecnicamente sim, mas:
- Seu site não coleta dados (WhatsApp coleta)
- Dados não ficam no servidor
- Sem cookies de rastreamento

**Recomendação:** Adicionar política de privacidade:
```html
<p style="font-size: 0.75rem; color: #aaa; margin-top: 1rem;">
    Seus dados são enviados diretamente para WhatsApp. 
    Política de privacidade: [LINK]
</p>
```

---

## 🐛 Troubleshooting Avançado

### P: Página fica branca ao abrir
**R:** Verificar:
1. Abrir Console (F12) - ver erros
2. Validar HTML (sem tags abertas)
3. Verificar sintaxe JavaScript
4. Recarregar com Ctrl+Shift+R

---

### P: Imagens não carregam
**R:** Verificar:
1. URL válida (começa com http/https)
2. Sem caracteres especiais
3. Domínio liberado CORS
4. Usar placeholder temporário

---

### P: CEP não completa endereço
**R:** Verificar:
1. CEP com 8 dígitos
2. CEP válido (testar em viacep.com.br)
3. Conexão internet (API requer)
4. Abrir console para erro específico

---

### P: WhatsApp não abre
**R:** Verificar:
1. Número no formato correto (55 + DDD + 9 dígitos)
2. WhatsApp instalado ou acesso a web.whatsapp.com
3. Mensagem não contém caracteres inválidos
4. URL não está truncada

---

## 💡 Dicas e Truques

### Dica 1: Teste a Mensagem WhatsApp
```
1. Abra seu WhatsApp
2. Vá em Contatos > Nova Conversa
3. Cole: https://wa.me/5549999999999?text=Teste
4. Verá como fica a mensagem
```

---

### Dica 2: Backup Automático
Fazer backup frequente:
- Copiar arquivo para nuvem (Google Drive, Dropbox)
- Ter versão local também
- Versionamento (cardapio-v1.html, cardapio-v2.html)

---

### Dica 3: Testar em Celular
```
1. Acessar por WiFi no mesmo PC
2. Encontrar IP local (ipconfig no Windows)
3. No celular: http://192.168.x.x:8000/cardapio-online.html
4. (Precisa servir com Live Server no VS Code)
```

---

### Dica 4: Monitorar Pedidos
Integrar com:
- Google Sheets (Zap-a-Script)
- Airtable
- Slack (via Zapier)
- Email automático

---

### Dica 5: Aumentar Conversão
- Foto alta qualidade dos produtos
- Descrição curta mas atrativa
- Preço em destaque
- CTA clara ("Adicionar ao Carrinho")
- Teste A/B (cores, textos)

---

## 📊 Métricas e Analytics

### P: Como saber quantos pedidos recebi?
**R:** Opções:

1. **Manual:** Contar conversas no WhatsApp
2. **Google Analytics:** Adicionar código (track checkout)
3. **Pixel do Facebook:** Track conversão
4. **Webhook:** Receber notificação de finalização

---

## 🎯 Próximos Passos

### Se quer expandir:
1. **Adicionar métodos pagamento** - Stripe, Mercado Pago
2. **Dashboard lojista** - Ver pedidos em painel
3. **Sistema de entrega** - Calcular frete automático
4. **Integrações** - ERP, Delivery, NFS-e
5. **Múltiplos cardápios** - Diferentes lojas

---

## 📞 Recursos Externos Úteis

| Recurso | URL | Uso |
|---------|-----|-----|
| ViaCEP | viacep.com.br | Auto-complete CEP |
| Unsplash | unsplash.com | Imagens livres |
| Netlify | netlify.com | Hospedagem gratuita |
| GitHub | github.com | Controle de versão |
| Zapier | zapier.com | Automação |
| TinyPNG | tinypng.com | Comprimir imagens |
| Color Picker | colordot.it | Escolher cores |

---

## ✅ Checklist Final

Antes de colocar em produção:

- [ ] Número WhatsApp correto
- [ ] Mínimo 5 produtos adicionados
- [ ] Todas imagens carregando
- [ ] Cores personalizadas
- [ ] Testado em celular
- [ ] Testado fluxo completo (produto → WhatsApp)
- [ ] Mensagem WhatsApp clara e completa
- [ ] CEP funciona (testar com CEP real)
- [ ] Arquivo salvo em local seguro (backup)
- [ ] Link compartilhado/divulgado

---

## 🎉 Sucesso!

Você agora tem um cardápio online profissional!

**Próximas ideias:**
- Compartilhar link em Google Meu Negócio
- QR code para redes sociais
- Anúncios no Facebook/Instagram apontando para link
- Link na assinatura de email
- WhatsApp status com link

---

**Precisa de ajuda?**
- Revisar essa documentação
- Procurar erro no console (F12)
- Conferir exemplos práticos
- Testar com calma, passo a passo

**Boa sorte com seu cardápio! 🚀**
