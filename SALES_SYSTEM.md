# Sistema de vendas — AI Launch Kit

Este documento explica o que foi automatizado neste repositório, o que **ainda depende de você** (contas, credenciais, divulgação) e como colocar tudo no ar.

**Aviso honesto:** nenhuma parte disso garante US$200/dia. Isso é resultado de tráfego + oferta + preço, não de código. O que está aqui é a infraestrutura completa para você vender — o volume de vendas depende de divulgação constante (seção 4).

## 1. O que foi construído

- **Produto real**: `product/templates/` — 3 templates de landing page (HTML/CSS/JS puro, responsivos):
  - `saas-landing/` — página para produto SaaS/IA
  - `ai-tool-landing/` — página para ferramenta de IA
  - `waitlist-page/` — página de lista de espera
  - Empacotados em `product/ai-launch-kit.zip`, pronto para upload.
- **Página de vendas**: `index.html` (raiz) — vende o kit por US$47, com botão de checkout Gumroad.
- **SEO técnico**: `robots.txt`, `sitemap.xml`, meta tags/Open Graph no `index.html`.

Nada aqui é fictício: os templates funcionam de verdade e podem ser abertos direto no navegador.

## 2. O que falta você configurar (5–10 minutos)

O único motivo do botão de compra ainda não funcionar é que **checkout de pagamento exige uma conta verificada sua** — isso eu não posso criar por você.

1. Crie uma conta gratuita em https://gumroad.com (aceita pagamento em dólar, envia recibo e faz entrega automática do arquivo — sem precisar programar backend).
2. Crie um novo produto:
   - Nome: `AI Launch Kit`
   - Preço: `$47` (ou o valor que preferir)
   - Upload do arquivo: `product/ai-launch-kit.zip`
3. Publique o produto e copie o link curto (formato `https://SEUNOME.gumroad.com/l/xxxxx`).
4. Abra `index.html` na raiz do repositório, procure o comentário `GUMROAD SETUP` (seção "buy") e troque o `href="https://gumroad.com/l/REPLACE_WITH_YOUR_PRODUCT_LINK"` pelo seu link real.
5. Commit e push dessa alteração.

A partir daí, o botão "Buy now" já cobra em dólar e entrega o arquivo automaticamente — sem intervenção manual sua a cada venda.

## 3. Publicar no GitHub Pages (grátis)

1. No GitHub, vá em **Settings → Pages** deste repositório.
2. Em "Source", selecione a branch `main` (ou a branch final após o merge do PR) e pasta `/ (root)`.
3. Salve. Em alguns minutos o site estará em `https://alceu3.github.io/Alceu3/`.
4. (Opcional) Se você tiver domínio próprio, configure-o em "Custom domain" nessa mesma tela e atualize as URLs em `robots.txt` e `sitemap.xml`.

## 4. Como de fato gerar vendas (a parte que não dá pra automatizar 100%)

Ter a página no ar não gera tráfego sozinho. Para ter chance real de bater metas como US$200/dia (≈ 4 vendas/dia a $47), você precisa de divulgação constante. Sugestão de rotina diária (30–60 min):

- **Comunidades**: poste em r/SaaS, r/artificial, Indie Hackers, Product Hunt — mostrando o kit sendo usado, não só o link de venda.
- **X/Twitter e LinkedIn**: publique 1 landing page criada com o kit por dia (build in public), com link no final.
- **Marketplaces de template**: liste os templates também em lugares como Gumroad Discover, Framer Marketplace, ou similares, para tráfego orgânico extra.
- **SEO**: como a página já tem meta tags e sitemap, submeta a URL no Google Search Console para começar a indexar.

Se quiser, na próxima etapa eu posso criar:
- Textos prontos (copy) para os posts acima, já escritos, para você só copiar e colar.
- Um GitHub Action que publica automaticamente em redes sociais via API, caso você me forneça as credenciais (tokens) dessas contas.

## 5. Contato do produto

E-mail configurado no site e nos templates: alceucordeiro29@gmail.com
