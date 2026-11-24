# Checklist WCAG 2.2 AA — Ocupacional 3D

Verificado em 24/11/2026 sobre `index.html`.

**Como foi verificado**
- Chromium com Playwright: 97 combinações. São 6 larguras (320, 390, 768, 1024, 1280 e 1440 px), 4 tamanhos de texto (100, 115, 130 e 150%), tema claro e escuro, com e sem alto contraste, mais zoom de 200%.
- axe-core 4.10 (WCAG 2.0, 2.1 e 2.2 A/AA + boas práticas) em 8 estados: claro e escuro, com e sem alto contraste, desktop e celular. Resultado: **0 violações** em todos.
- Detector da skill impeccable na página renderizada. Restaram 2 avisos intencionais: Montserrat (fonte da marca) e as listras de camada (assinatura visual).
- Testes de interação automatizados: teclado, controle de fonte, contraste, acordeão, formulário e menu.

**Legenda:** ✅ verificado · 🟡 implementado, falta teste humano · ➖ não se aplica hoje

## Perceptível

| Critério | Status | Como foi atendido / verificado |
|---|---|---|
| 1.1.1 Conteúdo não textual | ✅ | A ilustração do topo tem `role="img"` e descrição do dispositivo e do uso. Ícones decorativos têm `aria-hidden`. Os espaços de foto são decorativos e cada um traz no código o modelo de `alt` descritivo. Não há `<img>` sem `alt`. |
| 1.2.2 Legendas (gravadas) | ➖ / 🟡 | Ainda não há vídeos. O componente já vem pronto com `<track kind="captions" srclang="pt-BR">`. Cada vídeo precisa de um arquivo `.vtt`. |
| 1.2.3 / 1.2.5 Audiodescrição ou alternativa | 🟡 | Há uma transcrição em `<details>` abaixo de cada vídeo. Ela deve descrever também o que aparece na tela, não só a fala. |
| 1.3.1 Informações e relações | ✅ | HTML semântico: um único `<h1>`, títulos sem saltos (h1→h2→h3→h4) e landmarks `header`, `nav`, `main` e `footer`. As listas são `ul`/`ol` de verdade. Formulário com `label`, `fieldset` e `legend`. |
| 1.3.2 Sequência significativa | ✅ | A ordem do DOM é a ordem visual em todas as larguras. |
| 1.3.4 Orientação | ✅ | Nada fica preso a retrato ou paisagem. |
| 1.3.5 Identificar finalidade do campo | ✅ | `autocomplete="name"` e `autocomplete="address-level2"`. |
| 1.4.1 Uso de cor | ✅ | Erros têm ícone, texto e borda mais grossa. Links no meio do texto são sublinhados. Os estados dos botões usam `aria-pressed` e `aria-disabled`, além de forma (borda tracejada e texto riscado no alto contraste). |
| 1.4.3 Contraste mínimo | ✅ | Todos os pares foram calculados. Os menores: texto secundário claro 9,1:1, azul sobre verde 13,7:1, erro 7,3:1. **Branco sobre verde (1,29:1) não é usado em lugar nenhum.** |
| 1.4.4 Redimensionar texto | ✅ | Controle A−/A/A+ (100–150%) mais zoom do navegador. Tudo em rem, com consultas de contêiner. Sem cortes nem sobreposição em 97 combinações. |
| 1.4.5 Imagens de texto | ✅ | Nenhuma imagem de texto. A logo é texto com um SVG decorativo. |
| 1.4.10 Reflow (320 px / zoom 400%) | ✅ | Sem rolagem horizontal em 320 px, mesmo com texto a 150%. Zoom de 200% (640×360) também testado. |
| 1.4.11 Contraste não textual | ✅ | Bordas de campo azul sobre branco 17,7:1. Foco 4 px azul (17,7:1) ou verde sobre azul (13,7:1). Botões verdes sobre branco têm borda azul de 3 px, porque verde sobre branco dá só 1,29:1. |
| 1.4.12 Espaçamento de texto | ✅ | Nada tem altura fixa com `overflow: hidden` em texto. O layout cresce com o conteúdo. |
| 1.4.13 Conteúdo em hover/foco | ➖ | Não há tooltips nem pop-ups em hover. |

## Operável

| Critério | Status | Como foi atendido / verificado |
|---|---|---|
| 2.1.1 Teclado | ✅ | Tudo funciona por teclado: menu, acordeão (Enter/Espaço, ↑ ↓ Home End), formulário e controles de fonte e contraste. O menu fecha com Esc e devolve o foco ao botão. |
| 2.1.2 Sem armadilha de teclado | ✅ | Não há modais nem armadilhas de foco. |
| 2.2.2 Pausar, parar, ocultar | ✅ | A única animação (a peça se montando) dura cerca de 2 s, roda uma vez e não volta. Com movimento reduzido, a peça aparece pronta. |
| 2.3.1 Três flashes | ✅ | Nada pisca. |
| 2.4.1 Ignorar blocos | ✅ | "Pular para o conteúdo" é o primeiro elemento focável. Testado: Enter leva o foco para `#conteudo`. |
| 2.4.2 Título da página | ✅ | `<title>` descritivo. |
| 2.4.3 Ordem do foco | ✅ | Pular → barra de acessibilidade → logo → menu → conteúdo → botão do WhatsApp. Ao seguir uma âncora, o foco vai para a seção. |
| 2.4.4 Finalidade do link | ✅ | Botões repetidos ("Solicitar orçamento") têm complemento oculto ("…dos Kits O3D"). Links que abrem nova aba avisam "(abre em nova aba)". |
| 2.4.6 Cabeçalhos e rótulos | ✅ | Títulos descrevem cada seção. Campos têm rótulo visível. |
| 2.4.7 Foco visível | ✅ | Contorno de 4 px com 3 px de afastamento em todos os elementos, azul no claro e verde no escuro e nas faixas azuis. Testado em 16 paradas de Tab. |
| 2.4.11 Foco não encoberto (mín.) | ✅ | `scroll-padding-top` acompanha a altura real da barra fixa. `scroll-padding-bottom: 6rem` evita o botão flutuante. O botão flutuante some sobre o topo, o contato e o rodapé, e nunca some enquanto tem foco. |
| 2.5.3 Rótulo no nome | 🟡 | Os botões A−/A/A+ usam os `aria-label` pedidos ("Diminuir tamanho do texto" etc.). Como "A−" não é palavra, quem usa comando de voz deve dizer o nome. Os demais controles contêm o texto visível no nome acessível. |
| 2.5.7 Movimentos de arrastar | ➖ | Nada depende de arrastar. |
| 2.5.8 Tamanho do alvo (mín.) | ✅ | Todos os alvos têm pelo menos 44×44 px, inclusive os rádios (a linha inteira é clicável). Teste automatizado: 0 alvos abaixo de 44 px. |

## Compreensível

| Critério | Status | Como foi atendido / verificado |
|---|---|---|
| 3.1.1 Idioma da página | ✅ | `lang="pt-BR"`. |
| 3.2.1 / 3.2.2 Em foco / Em entrada | ✅ | Nada muda de contexto sozinho. O WhatsApp só abre ao clicar em "Continuar no WhatsApp". |
| 3.2.3 Navegação consistente | ✅ | Cada item do menu leva à sua própria seção (9 âncoras, todas verificadas). |
| 3.2.6 Ajuda consistente | ✅ | Os mesmos canais (WhatsApp, e-mail, Instagram) aparecem no contato e no rodapé, na mesma ordem. |
| 3.3.1 Identificação do erro | ✅ | Mensagem em texto, `aria-invalid` e um resumo no topo que recebe o foco, com links para cada campo. |
| 3.3.2 Rótulos ou instruções | ✅ | Rótulos visíveis, "(obrigatório)" e "(opcional)" escritos por extenso, e uma dica na mensagem. |
| 3.3.3 Sugestão de correção | ✅ | Cada erro diz o que fazer ("Escolha um assunto na lista."). |
| 3.3.7 Entrada redundante | ✅ | Nada é pedido duas vezes. |
| 3.3.8 Autenticação acessível | ➖ | Não há login. |

## Robusto

| Critério | Status | Como foi atendido / verificado |
|---|---|---|
| 4.1.2 Nome, função, valor | ✅ | `aria-expanded` no menu e no acordeão, `aria-pressed` no contraste e no "A", `aria-disabled` nos limites da fonte, `aria-controls` e `aria-labelledby`. axe: 0 violações. |
| 4.1.3 Mensagens de status | ✅ | Mudança de fonte anunciada por `aria-live` ("Tamanho do texto: 130%." / "O texto já está no tamanho máximo."). O retorno do formulário usa `role="status"`. |

## Requisitos extras do briefing

| Requisito | Status |
|---|---|
| Controle de fonte fixo no topo, 4 níveis, `aria-label`, `aria-live`, limites, `localStorage` com try/catch, aplicado antes da primeira pintura | ✅ Testado: os níveis persistem depois de recarregar e não há "pulo" (script inline no `<head>`). |
| Alto contraste salvo + `prefers-color-scheme` + `prefers-reduced-motion` | ✅ São quatro temas: claro, escuro, alto contraste claro e alto contraste escuro. Com movimento reduzido, nada se desloca; só as mudanças de cor continuam. |
| Modo de cores forçadas (Windows) | ✅ Os rádios voltam ao visual nativo. Contornos e bordas usam cores do sistema. |
| Texto revisado, frases curtas | ✅ Revisado. Itens a confirmar com as clientes estão em `docs/MATERIAIS.md`. |

## Testes que ainda precisam de uma pessoa

1. **Leitores de tela reais:** NVDA + Firefox/Chrome no Windows e VoiceOver no iPhone e no Mac. A estrutura foi validada por código e pelo axe, mas não houve sessão com leitor de tela de verdade.
2. **Celular de verdade** (iPhone e Android): toque, teclado virtual, área do entalhe e se o WhatsApp abre direto pelo app. Emuladores não reproduzem esses comportamentos.
3. **Vídeos:** conferir as legendas e a transcrição de cada vídeo quando forem publicados.
4. **Teste com usuárias:** de preferência com pessoas com baixa visão e com dificuldades motoras do público real.
