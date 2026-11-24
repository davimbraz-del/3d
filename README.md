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

## Publicar (GitHub Pages)

O branch `main` está pronto para o GitHub Pages:

1. No GitHub, abra **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Escolha o branch **`main`** e a pasta **`/ (root)`**, e clique em **Save**.
4. Em 1 a 2 minutos o site fica em https://davimbraz-del.github.io/3d/

O arquivo `.nojekyll` faz o Pages servir os arquivos como estão. A pasta `dev/` (teste de estresse) vai junto, mas não é indexada por buscadores; pode apagar se preferir.

Se mudar para um domínio próprio (ex.: ocupacional3d.com.br), troque `https://davimbraz-del.github.io/3d/` pelo novo endereço nas tags `canonical`, `og:url` e `og:image` do `index.html`.

## Editar conteúdo

- **Textos:** direto no `index.html`. Cada seção começa com um comentário `<!-- N. NOME -->`.
- **Fotos:** procure os comentários `<!-- FOTO: ... -->`. Eles mostram a tag `<img>` pronta, com `loading="lazy"` e o lugar do texto alternativo.
- **Vídeos:** o comentário `<!-- VÍDEO: ... -->` tem o modelo com legenda (`<track>`) e transcrição.
- **Depoimentos:** o comentário da seção 7 tem o modelo. Use somente depoimentos reais e autorizados.
- **Cores:** só pelos tokens no topo do `styles.css`. **Nunca use texto branco sobre o verde.**
