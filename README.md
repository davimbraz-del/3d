# Ocupacional 3D: site

Site de página única, estático (HTML, CSS e JavaScript puros, sem build). Os pedidos são feitos pelo WhatsApp ou pelo formulário, que abre o WhatsApp com a mensagem pronta.

## Estrutura

```
index.html              página (todas as seções; cada item do menu leva à sua âncora)
assets/css/styles.css   estilos (tokens no topo; tudo em rem; consultas de contêiner)
assets/js/main.js       controle de fonte, contraste, menu, acordeão, formulário, botão flutuante
assets/fonts/           Montserrat e Atkinson Hyperlegible (hospedadas aqui, licença OFL)
assets/img/             favicon e imagem de compartilhamento (Open Graph)
docs/ACESSIBILIDADE.md  checklist WCAG 2.2 AA, com o que foi verificado
docs/MATERIAIS.md       o que as clientes precisam enviar
dev/stress.html         ferramenta de teste com dados extremos (NÃO publicar)
PRODUCT.md / DESIGN.md  contexto do produto e sistema visual (para quem for evoluir o site)
```

## Ver localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000. Para o teste de estresse, abra http://localhost:8000/dev/stress.html?data=worst.

## Publicar

Qualquer hospedagem estática serve (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Publique tudo, **exceto** a pasta `dev/` e os arquivos `PRODUCT.md`, `DESIGN.md` e `.impeccable/`. Depois de definir o domínio, troque `assets/img/og-image.png` por uma URL absoluta nas metatags `og:image`.

## Editar conteúdo

- **Textos:** direto no `index.html`. Cada seção começa com um comentário `<!-- N. NOME -->`.
- **Fotos:** procure os comentários `<!-- FOTO: ... -->`. Eles mostram a tag `<img>` pronta, com `loading="lazy"` e o lugar do texto alternativo.
- **Vídeos:** o comentário `<!-- VÍDEO: ... -->` tem o modelo com legenda (`<track>`) e transcrição.
- **Depoimentos:** o comentário da seção 7 tem o modelo. Use somente depoimentos reais e autorizados.
- **Cores:** só pelos tokens no topo do `styles.css`. **Nunca use texto branco sobre o verde.**
