---
format: 1920x1080
duration: 100s
message: "A liberdade não vem do que acontece com você — vem de como você decide se relacionar com o que acontece."
arc: listicle
audience: pessoas interessadas em filosofia prática, estoicismo e desenvolvimento pessoal
mode: autonomous
music: minimal piano/strings underscore, low and reflective
language: pt
---

## Video direction

- **Palette (from `frame.md` / Broadside):** ink-black ground for gravity/statement beats; fire-orange as the single accent (hero words, the one moving element per scene, emphasis marks); cream for body/reading text and hairline rules. Never a second accent color; never gradients or shadows — flat plane only, per the pack.
- **Motion grammar + reveal model:** long-tail `power3` settle on every entrance (no bounce, no overshoot). Every frame reveals **paced to the voiceover** — at t=0 only what the VO is saying that instant is on screen; each further word/line/diagram-layer enters on its own spoken cue, weighted into the back ~50% of the frame. During a hold, the only permitted aliveness is a subtle low-amplitude jitter (`sine-wave-loop`) — no breathing, no drifting camera.
- **Rhythm / held-frame allocation:** Frames 2, 5, 7 and 12 are deliberate held-breather beats (short, single-statement, minimal build) to vary energy against the denser diagram frames (3, 4, 6, 8, 10, 11). Frame 12 holds the longest — the final read.
- **Framing variety (≥3 across the video):** centered hero (Frames 1, 2, 5, 7, 9, 12) · split-screen comparison (Frames 4, 11) · asymmetric 60/40 diagram + label rail (Frames 3, 6, 8, 10).
- **Negative list:** no bokeh / purple-blue "AI" gradient clichés; no real UI/browser chrome; no stock-photo people; no bouncy easing; no slideshow (front-load-then-freeze) and no screensaver (independently floating elements); no lazy breathing or back-half camera pan/push.

## Frame 1 — Abertura: o escravo mais livre

- scene: Tipografia massiva em ink-black — a palavra "escravo" se dissolve e recompõe na palavra "livre"
- voiceover: "Epicteto nasceu escravo. Viveu com o corpo debilitado. Foi exilado. E ainda assim, tornou-se um dos homens mais livres que já existiram."
- duration: 7.915s
- transition_in: cut
- status: animated
- src: compositions/frames/01-abertura.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surpresa e intriga
- blueprint: titlecard-reveal

narrativeRole: Abre um paradoxo (um escravo mais livre que a maioria) que cria a lacuna cognitiva do vídeo inteiro.
keyMessage: Liberdade real não depende das circunstâncias externas.

blueprint: titlecard-reveal (Adapt) — keep: three-beat dark prelude structure (state → detail → turn); change: the final beat is a word-swap payoff ("escravo"→"livre"), not a logo.
focal: a palavra "escravo" trocando para "livre"
roles: escravo/livre = foreground subject (hero word) · rótulos mono (corpo debilitado, exilado) = supporting · fundo ink-black = background
sfx: soft-swell, tone-shift-swoosh

Scene 1 (0.0–2.0s): fundo ink-black full-bleed; a palavra "escravo" entra em cream via per-word staggered reveal, escala média, centralizada — settle longo em power3.
Scene 2 (2.0–4.2s): conforme a VO diz "corpo debilitado" e "exilado", dois pequenos rótulos mono em cream empilham abaixo, discretos — camada assimétrica, "escravo" ainda domina.
Scene 3 (4.2–5.9s): em "e ainda assim", um traço fino fire-orange se autodesenha (SVG self-draw) sob "escravo", sinalizando a virada.
Scene 4 (5.9–7.9s): "escravo" sofre hard-cut/flash word-swap para "livre" em fire-orange, escala ~1.4x, centralizado — kinetic beat-slam com settle suave; mantém-se estático, só jitter sutil.

## Frame 2 — A tese central

- scene: Linha de tipografia dividida em duas metades contrastantes — "o que acontece" (ink-black) vs "como você reage" (fire-orange)
- voiceover: "Como isso é possível? A liberdade não vem do que acontece com você — vem de como você decide se relacionar com o que acontece."
- duration: 7.36s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-tese.html
- type: product_intro
- persuasion: Distillation
- beat: clareza e orientação
- blueprint: titlecard-reveal

narrativeRole: Nomeia a tese que os 10 princípios seguintes vão provar, um por um.
keyMessage: A resposta interna, não o evento externo, determina a liberdade.

blueprint: titlecard-reveal (Adapt) — keep: statement-card breather; change: a keyword-glow payoff lands on o verbo "decide" em vez de um selo/tagline.
focal: o verbo "decide"
roles: pergunta de abertura = foreground subject · cláusula da tese = foreground subject (payoff) · "decide" (glow) = supporting emphasis
sfx: (nenhum — respiro silencioso)

Scene 1 (0.0–1.8s): fundo ink-black, centralizado; "Como isso é possível?" entra via per-word staggered reveal em cream, escala média — settle longo.
Scene 2 (1.8–4.8s): conforme a VO diz "a liberdade não vem do que acontece com você", a cláusula entra abaixo em cream, esmaecida ~40%.
Scene 3 (4.8–7.4s): conforme a VO diz "vem de como você decide se relacionar", a cláusula final flash-swap entra centralizada; "decide" isolado em fire-orange via keyword glow; mantém-se estático.

## Frame 3 — Princípio 1: o que controlamos

- scene: Diagrama dividido em duas colunas rotuladas — "sob seu controle" / "fora do seu controle" — itens entram um a um
- voiceover: "Existem coisas sob seu controle — pensamentos, julgamentos, escolhas. E coisas que não estão — reputação, dinheiro, opinião dos outros. O sofrimento nasce de tratar como seu algo que não é."
- duration: 10.965s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/03-controle.html
- type: feature_showcase
- persuasion: Frame-then-fill
- beat: comprensão
- blueprint: grid-card-assemble

narrativeRole: Estabelece a dicotomia do controle — o fundamento de todos os outros princípios.
keyMessage: Só o interior é realmente seu; lutar pelo externo é a raiz da ansiedade.

blueprint: grid-card-assemble (Adapt) — keep: rótulos + tiles se autoconstruindo; change: divide em duas colunas opostas em vez de uma grade única; o divisor central desenha por último como o payoff.
focal: o divisor central que separa as duas colunas
roles: tiles da esquerda (controlamos) = foreground subject · tiles da direita (não controlamos) = foreground subject · divisor central = supporting/payoff · fundo ink-black = background
sfx: soft-tick ×6, hairline-draw

Scene 1 (0.0–2.1s): fundo ink-black, assimétrico 60/40; rótulo mono "sob seu controle" (fire-orange) entra à esquerda via per-word reveal.
Scene 2 (2.1–4.8s): conforme a VO nomeia cada item, três tiles cream (pensamentos / julgamentos / escolhas) fazem cluster→outward expansion sob o rótulo esquerdo, um por palavra.
Scene 3 (4.8–6.9s): rótulo mono "fora do seu controle" (cream) entra à direita.
Scene 4 (6.9–9.6s): três tiles (reputação / dinheiro / opinião dos outros) fazem cluster→outward expansion sob o rótulo direito.
Scene 5 (9.6–11.0s): um traço fino fire-orange se autodesenha na divisória central; mantém-se estático, só jitter sutil.

## Frame 4 — Princípio 2: o poder do julgamento

- scene: Split-screen — mesma manchete "demitido" — duas reações tipográficas opostas se formando de cada lado
- voiceover: "Duas pessoas perdem o emprego no mesmo dia. Uma desespera. A outra vê oportunidade. Não são os fatos que perturbam — é o julgamento sobre eles."
- duration: 8.747s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/04-julgamento.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: reconhecimento
- blueprint: comparison-split

narrativeRole: Mostra, com um caso concreto, que a perturbação vem da interpretação e não do evento.
keyMessage: Entre o evento e a reação existe um espaço — e nesse espaço mora a liberdade.

blueprint: comparison-split (Reproduce) — os dois cards com tilt oposto SÃO as duas reações ao mesmo evento.
focal: a linha/palavra "julgamento" na costura central
roles: card esquerdo (desespera) = foreground subject · card direito (oportunidade) = foreground subject · linha de payoff central = supporting/emphasis
sfx: card-tilt-whoosh ×2, soft-impact

Scene 1 (0.0–1.7s): split-screen se forma, título "mesma notícia" centralizado sobre a costura, ambas as metades neutras em cream — entrada split-tilt cards.
Scene 2 (1.7–4.1s): metade esquerda tilta para dentro; "desespera" per-word reveal em ink-black, linha descendente irregular sob a palavra.
Scene 3 (4.1–6.4s): metade direita tilta para dentro (espelhado); "oportunidade" reveal em fire-orange, linha ascendente sob a palavra.
Scene 4 (6.4–7.6s): "não são os fatos que perturbam" flash-swap atravessa a costura, ambas as metades esmaecem ~40%.
Scene 5 (7.6–8.7s): "é o julgamento" pousa centralizado em fire-orange sobre o split esmaecido, keyword glow; mantém-se estático.

## Frame 5 — Princípio 3: preparar-se para a vida

- scene: Uma linha do tempo simples — um ponto presente e uma sombra tênue de "possíveis tempestades" à frente, sem drama visual
- voiceover: "Premeditatio malorum: antecipar mentalmente as adversidades. Não por medo — para nunca dar como garantido o que não é garantido."
- duration: 7.744s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/05-premeditatio.html
- type: feature_showcase
- persuasion: Coined term / mnemonic
- beat: foco e antecipação
- blueprint: kinetic-type-beats

narrativeRole: Introduz a prática estoica de antecipação mental como ferramenta de estabilidade.
keyMessage: Quem já visitou o pior cenário enfrenta a realidade com mais estabilidade.

blueprint: kinetic-type-beats (Adapt) — keep: frases curtas pousando isoladas num canvas nu; change: um termo cunhado tratado como rótulo mono, a linha que se autodesenha é a metáfora de conexão.
focal: o termo cunhado "premeditatio malorum" / a linha do tempo que se autodesenha
roles: termo cunhado = foreground subject (abertura) · linha do tempo + nó = supporting metaphor · cláusula final = foreground subject (payoff)
sfx: (nenhum — respiro silencioso, apenas ambiente baixo)

Scene 1 (0.0–1.8s): fundo ink-black, centralizado; termo cunhado "premeditatio malorum" per-word reveal em fire-orange, estilo rótulo mono — settle longo, depois reduz para tamanho de suporte.
Scene 2 (1.8–4.2s): um traço horizontal fino se autodesenha da esquerda para a direita (SVG self-draw) conforme a VO diz "antecipar mentalmente as adversidades"; um pequeno nó aparece no meio da linha.
Scene 3 (4.2–5.4s): "não por medo" flash-swap entra abaixo, cream, pequeno.
Scene 4 (5.4–7.7s): cláusula final "nunca dar como garantido" assenta centralizada em cream sobre a linha completa; mantém-se estática, só jitter sutil.

## Frame 6 — Princípio 4: você não é seus pensamentos

- scene: Um impulso (palavra piscando em fire-orange) surge e, em vez de crescer, se dissolve — uma pausa visual entre estímulo e resposta
- voiceover: "Você não escolhe o impulso inicial de medo ou raiva. Mas escolhe alimentá-lo — ou apenas observá-lo passar. Nessa pausa, o caráter se forma."
- duration: 8.213s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/06-pausa.html
- type: feature_showcase
- persuasion: Causal chain
- beat: mastery / autocontrole
- blueprint: kinetic-type-beats

narrativeRole: Distingue impulso automático de resposta escolhida — o espaço onde o caráter se forma.
keyMessage: A pausa entre estímulo e resposta é o único lugar onde você realmente age.

blueprint: kinetic-type-beats (Adapt) — keep: uma palavra como o beat; change: a própria palavra se bifurca em dois destinos animados (alimentado vs. observado) em vez de um relay plano.
focal: a palavra "impulso" e seus dois destinos possíveis
roles: impulso (contido) = foreground subject · impulso (alimentado, variante que desaparece) = supporting counter-example · cláusula final = foreground subject (payoff)
sfx: soft-pulse, fade-whoosh

Scene 1 (0.0–2.2s): fundo ink-black; a palavra "impulso" entra em fire-orange com um pulso breve de escala (spring-pop entrance, suave) — como se surgisse.
Scene 2 (2.2–4.4s): conforme a VO diz "mas escolhe alimentá-lo", uma duplicata tênue de "impulso" cresce maior, como brasa, no canto superior direito — assimétrico 60/40.
Scene 3 (4.4–6.0s): conforme a VO diz "observá-lo passar", a duplicata em crescimento esmaece e deriva para fora do quadro — a "impulso" ORIGINAL permanece estática, pequena, contida.
Scene 4 (6.0–8.2s): "nessa pausa, o caráter se forma" per-word reveal em cream, centralizada sob o "impulso" agora quieto; mantém-se — só jitter sutil.

## Frame 7 — Princípio 5: ações, não palavras

- scene: Bloco de texto filosófico se apaga enquanto um traço/gesto simples (um "V" de ação) se desenha por cima
- voiceover: "Não explique sua filosofia. Incorpore-a. Julgue-se pelas suas ações — não pelas suas palavras."
- duration: 5.483s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/07-acoes.html
- type: feature_showcase
- persuasion: Before/after
- beat: convicção
- blueprint: kinetic-type-beats

narrativeRole: Confronta o conhecimento teórico com a prática real como único teste válido.
keyMessage: Conhecer os princípios não vale nada sem viver por eles.

blueprint: kinetic-type-beats (Reproduce, relay de 2 beats) — um relay de 2 beats pousando num payoff marcado por scribble.
focal: "ações" vs "palavras"
roles: incorpore/ações = foreground subject (payoff) · palavras = supporting (contraste riscado) · marca de scribble = supporting emphasis
sfx: marker-scribble

Scene 1 (0.0–2.2s): fundo cream (beat de contraste), centralizado; "não explique. incorpore." per-word reveal em ink-black, "incorpore" isolado em fire-orange — settle longo.
Scene 2 (2.2–5.5s): flash word-swap para "ações, não palavras" centralizado; "ações" em escala ~1.3x fire-orange, "palavras" pequena em cream ao lado, atravessada por um traço de scribble desenhado à mão (`css-marker-patterns`) no fim; mantém-se estática.

## Frame 8 — Princípio 6: entendendo os outros

- scene: Uma figura tipográfica "ofende" outra; a segunda não reage — o impulso de raiva se desenha e é dispensado
- voiceover: "Quem te ofende age a partir da própria confusão sobre o que é bom e ruim. Recuse dar a essa pessoa o poder sobre seu estado interior."
- duration: 7.68s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/08-outros.html
- type: feature_showcase
- persuasion: Subtractive framing
- beat: serenidade
- blueprint: kinetic-type-beats

narrativeRole: Reformula a raiva diante da ofensa como recusa de ceder controle interno.
keyMessage: Ninguém tira sua paz sem sua permissão.

blueprint: kinetic-type-beats (Adapt) — keep: uma abertura em jab; change: o jab visivelmente falha em cruzar para o lado calmo, dramatizando a fronteira que a frase descreve.
focal: a fronteira entre o cluster "ofende/confusão" e o lado calmo "estado interior"
roles: cluster ofende/confusão = foreground subject (esquerda, contido) · texto recuse/estado interior = foreground subject (direita, calmo) · fundo ink-black = background
sfx: soft-glitch-tick, calm-glow

Scene 1 (0.0–1.8s): fundo ink-black, assimétrico 60/40; uma marca irregular fire-orange ("ofende") entra bruscamente da borda esquerda em direção ao centro.
Scene 2 (1.8–4.1s): conforme a VO diz "confusão", a marca irregular se dissolve num pequeno cluster de texto embaralhado/glitch (3D char flip-decode, discreto) rotulado "confusão" — permanece contido no terço esquerdo, nunca alcança o centro.
Scene 3 (4.1–5.9s): "recuse dar a essa pessoa o poder" per-word reveal em cream, nos dois terços direitos — um bloco tipográfico calmo e estático, deliberadamente imóvel contra o caos da esquerda.
Scene 4 (5.9–7.7s): "seu estado interior" assenta centro-direita em fire-orange, um glow suave floresce por trás; mantém-se estática, só jitter sutil.

## Frame 9 — Princípio 7: seu papel na vida

- scene: Um palco minimalista — uma máscara de teatro grega desenhada em traços simples, um holofote centrado
- voiceover: "A vida é uma peça de teatro. Você não escolhe todos os papéis — mas deve interpretar bem o papel recebido."
- duration: 6.443s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/09-papel.html
- type: feature_showcase
- persuasion: Analogy / metaphor
- beat: aceitação e propósito
- blueprint: kinetic-type-beats

narrativeRole: Usa a metáfora teatral para reformular a queixa sobre circunstâncias como pergunta sobre conduta.
keyMessage: A pergunta certa não é "por que isso aconteceu", é "o que farei agora".

blueprint: kinetic-type-beats (Adapt, objeto-metáfora único) — keep: uma linha de fechamento pousando numa palavra enfatizada; change: um único ícone autodesenhado (máscara) ancora a metáfora em vez de um logo.
focal: o ícone de máscara teatral / a palavra "bem"
roles: máscara teatral = supporting metaphor anchor · linha de abertura = foreground subject · linha de fechamento = foreground subject (payoff)
sfx: pencil-draw, soft-chime

Scene 1 (0.0–1.8s): fundo ink-black, centralizado; um ícone de máscara de teatro em linhas simples se autodesenha (SVG self-draw), pequeno, centro-superior.
Scene 2 (1.8–4.1s): "a vida é uma peça de teatro" per-word reveal sob a máscara, em cream — settle longo; a máscara tem um único piscar interno sutil (live SVG internals, mínimo).
Scene 3 (4.1–6.4s): flash word-swap para "interprete bem o papel recebido" centralizado; "bem" isolado em fire-orange via keyword glow; mantém-se estática — a máscara permanece, quieta.

## Frame 10 — Princípio 8: esforço sem apego

- scene: Um arco e flecha desenhado em linhas simples — a flecha parte, uma leve curva de "vento" a desvia do centro exato
- voiceover: "Como um arqueiro: você controla a mira e a técnica — não o vento que desvia a flecha. Desapegue-se do resultado. Comprometa-se com o esforço."
- duration: 7.872s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/10-arqueiro.html
- type: feature_showcase
- persuasion: Analogy / metaphor
- beat: foco calmo
- blueprint: kinetic-type-beats

narrativeRole: Separa o que está sob controle (preparo) do que não está (resultado) através da metáfora do arqueiro.
keyMessage: Cobrar de si um resultado que não está sob seu controle é a receita da ansiedade.

blueprint: kinetic-type-beats (Adapt, objeto-metáfora + SVG draw) — keep: um objeto-metáfora desenhado e depois pagando numa palavra-chave; change: o payoff é o desvio de trajetória da flecha (SVG path), não só uma troca de texto.
focal: a trajetória desviada da flecha vs. o arco estável
roles: arco (estável) = foreground subject (o que é controlável) · flecha + linha do vento (desviada) = foreground subject (o que não é controlável) · cláusula de fechamento = supporting payoff text
sfx: bowstring-release, soft-whoosh-curve

Scene 1 (0.0–1.6s): fundo ink-black, assimétrico 60/40; um ícone de arco e flecha em linhas simples se autodesenha, terço esquerdo, tensionado (pose de tensão).
Scene 2 (1.6–3.7s): "você controla a mira e a técnica" per-word reveal ao lado do arco, em cream — o arco permanece estável, estático (esta parte é controlável).
Scene 3 (3.7–5.2s): a flecha é solta (o caminho SVG anima ao longo de uma trajetória levemente curva — seam "zoom-through") conforme a VO diz "vento que desvia"; uma linha de vento tênue (self-draw) curva sua trajetória fora da linha-guia reta original, aterrissando fora do centro.
Scene 4 (5.2–7.9s): "desapegue-se do resultado. comprometa-se com o esforço" flash word-swap entra, "esforço" isolado em fire-orange via keyword glow, centralizado; mantém-se estática.

## Frame 11 — Princípios 9 e 10: riqueza e liberdade interior

- scene: Uma balança tipográfica — de um lado "ter muito", do outro "desejar pouco" — o segundo lado se ilumina em fire-orange e permanece
- voiceover: "Riqueza não é ter muito — é desejar pouco. E ninguém é livre se não é senhor de si mesmo. A liberdade estoica depende de onde você coloca seu valor."
- duration: 8.683s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/11-riqueza-liberdade.html
- type: benefit_highlight
- persuasion: Common-belief vs reality
- beat: convicção e clareza
- blueprint: comparison-split

narrativeRole: Funde os dois últimos princípios — riqueza interior e autodomínio — na conclusão prática do corpo do vídeo.
keyMessage: Paz que depende do externo é frágil; paz que depende do caráter é inabalável.

blueprint: comparison-split (Adapt) — keep: duas opções opostas pesadas uma contra a outra; change: um ícone de balança substitui os dois cards de largura total, tiles caem sobre seus pratos.
focal: a balança / a palavra "valor"
roles: ícone de balança = foreground subject (metáfora) · tiles "ter muito" / "desejar pouco" = supporting (as duas opções pesadas) · cláusulas de fechamento = foreground subject (payoff text)
sfx: soft-drop ×2, gentle-chime

Scene 1 (0.0–1.6s): fundo ink-black, um ícone de balança de dois pratos em linha se autodesenha, centralizado.
Scene 2 (1.6–3.3s): tile "ter muito" cai no prato esquerdo em cream, o prato inclina levemente.
Scene 3 (3.3–4.9s): tile "desejar pouco" cai no prato direito em fire-orange; o lado direito assenta e ganha um glow suave, tornando-se a leitura dominante.
Scene 4 (4.9–7.1s): "ninguém é livre se não é senhor de si mesmo" per-word reveal sob a balança, em cream, faixa de largura total.
Scene 5 (7.1–8.7s): "coloca seu valor" flash-swap fecha; "valor" isolado em fire-orange; mantém-se estática, só jitter sutil.

## Frame 12 — Conclusão: sua mente é seu reino

- scene: Tela final em ink-black — a frase "Sua mente é seu reino. Governe-a com sabedoria." se monta palavra por palavra e permanece
- voiceover: "Nenhum desses princípios impede que coisas difíceis aconteçam. Mas você pode atravessá-las sem se quebrar — porque sua paz nunca dependeu inteiramente do mundo externo. Sua mente é seu reino. Governe-a com sabedoria."
- duration: 12.48s
- transition_in: crossfade
- status: animated
- src: compositions/frames/12-conclusao.html
- type: branding
- persuasion: Generalization
- beat: resolução e inspiração
- blueprint: titlecard-reveal

narrativeRole: Fecha o arco distilando os 10 princípios numa única linha memorável, generalizando a lição.
keyMessage: A liberdade sempre esteve, em parte, sob seu próprio comando.

blueprint: titlecard-reveal (Reproduce, cadeia de end-card monocromática) — a cadeia canônica de end-cards monocromáticas (afirmação → afirmação → linha final), mantida até o último frame.
focal: a linha de fechamento "Sua mente é seu reino. Governe-a com sabedoria."
roles: linha de fechamento = foreground subject (hero final) · afirmações anteriores = foreground subject (sequenciais, cada uma substituída) · fundo ink-black = background
sfx: (nenhum — deixa a linha pousar em silêncio; swell de música apenas se houver BGM)

Scene 1 (0.0–2.8s): fundo ink-black, centralizado; "nenhum desses princípios impede que coisas difíceis aconteçam" per-word reveal, cream, escala média — settle longo.
Scene 2 (2.8–6.2s): flash word-swap para "você pode atravessá-las sem se quebrar", "sem se quebrar" isolado em fire-orange via keyword glow.
Scene 3 (6.2–9.0s): reduz para tamanho de suporte, sobe levemente; "sua paz nunca dependeu do mundo externo" entra abaixo, cream, per-word reveal.
Scene 4 (9.0–12.5s): hard-cut/flash word-swap para o card final — "Sua mente é seu reino." então, palavra por palavra, "Governe-a com sabedoria." se monta abaixo (per-word staggered reveal) em fire-orange sobre ink-black, centralizada, escala quase full-bleed; mantém-se como a leitura final real — só jitter sutil, sem mais movimento (este é o verdadeiro exit do vídeo).
