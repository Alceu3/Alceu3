---
format: 1920x1080
duration: 210s
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
- duration: 14s
- transition_in: cut
- status: outline
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

Scene 1 (0.0–3.5s): fundo ink-black full-bleed; a palavra "escravo" entra em cream via per-word staggered reveal, escala média, centralizada — settle longo em power3.
Scene 2 (3.5–7.5s): conforme a VO diz "corpo debilitado" e "exilado", dois pequenos rótulos mono em cream empilham abaixo, discretos — camada assimétrica, "escravo" ainda domina.
Scene 3 (7.5–10.5s): em "e ainda assim", um traço fino fire-orange se autodesenha (SVG self-draw) sob "escravo", sinalizando a virada.
Scene 4 (10.5–14.0s): "escravo" sofre hard-cut/flash word-swap para "livre" em fire-orange, escala ~1.4x, centralizado — kinetic beat-slam com settle suave; mantém-se estático, só jitter sutil.

## Frame 2 — A tese central

- scene: Linha de tipografia dividida em duas metades contrastantes — "o que acontece" (ink-black) vs "como você reage" (fire-orange)
- voiceover: "Como isso é possível? A liberdade não vem do que acontece com você — vem de como você decide se relacionar com o que acontece."
- duration: 10s
- transition_in: crossfade
- status: outline
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

Scene 1 (0.0–2.5s): fundo ink-black, centralizado; "Como isso é possível?" entra via per-word staggered reveal em cream, escala média — settle longo.
Scene 2 (2.5–6.5s): conforme a VO diz "a liberdade não vem do que acontece com você", a cláusula entra abaixo em cream, esmaecida ~40%.
Scene 3 (6.5–10.0s): conforme a VO diz "vem de como você decide se relacionar", a cláusula final flash-swap entra centralizada; "decide" isolado em fire-orange via keyword glow; mantém-se estático.

## Frame 3 — Princípio 1: o que controlamos

- scene: Diagrama dividido em duas colunas rotuladas — "sob seu controle" / "fora do seu controle" — itens entram um a um
- voiceover: "Existem coisas sob seu controle — pensamentos, julgamentos, escolhas. E coisas que não estão — reputação, dinheiro, opinião dos outros. O sofrimento nasce de tratar como seu algo que não é."
- duration: 16s
- transition_in: push-slide UP
- status: outline
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

Scene 1 (0.0–3.0s): fundo ink-black, assimétrico 60/40; rótulo mono "sob seu controle" (fire-orange) entra à esquerda via per-word reveal.
Scene 2 (3.0–7.0s): conforme a VO nomeia cada item, três tiles cream (pensamentos / julgamentos / escolhas) fazem cluster→outward expansion sob o rótulo esquerdo, um por palavra.
Scene 3 (7.0–10.0s): rótulo mono "fora do seu controle" (cream) entra à direita.
Scene 4 (10.0–14.0s): três tiles (reputação / dinheiro / opinião dos outros) fazem cluster→outward expansion sob o rótulo direito.
Scene 5 (14.0–16.0s): um traço fino fire-orange se autodesenha na divisória central; mantém-se estático, só jitter sutil.

## Frame 4 — Princípio 2: o poder do julgamento

- scene: Split-screen — mesma manchete "demitido" — duas reações tipográficas opostas se formando de cada lado
- voiceover: "Duas pessoas perdem o emprego no mesmo dia. Uma desespera. A outra vê oportunidade. Não são os fatos que perturbam — é o julgamento sobre eles."
- duration: 15s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/04-julgamento.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: reconhecimento
- blueprint: comparison-split

narrativeRole: Mostra, com um caso concreto, que a perturbação vem da interpretação e não do evento.
keyMessage: Entre o evento e a reação existe um espaço — e nesse espaço mora a liberdade.

## Frame 5 — Princípio 3: preparar-se para a vida

- scene: Uma linha do tempo simples — um ponto presente e uma sombra tênue de "possíveis tempestades" à frente, sem drama visual
- voiceover: "Premeditatio malorum: antecipar mentalmente as adversidades. Não por medo — para nunca dar como garantido o que não é garantido."
- duration: 13s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/05-premeditatio.html
- type: feature_showcase
- persuasion: Coined term / mnemonic
- beat: foco e antecipação
- blueprint: kinetic-type-beats

narrativeRole: Introduz a prática estoica de antecipação mental como ferramenta de estabilidade.
keyMessage: Quem já visitou o pior cenário enfrenta a realidade com mais estabilidade.

## Frame 6 — Princípio 4: você não é seus pensamentos

- scene: Um impulso (palavra piscando em fire-orange) surge e, em vez de crescer, se dissolve — uma pausa visual entre estímulo e resposta
- voiceover: "Você não escolhe o impulso inicial de medo ou raiva. Mas escolhe alimentá-lo — ou apenas observá-lo passar. Nessa pausa, o caráter se forma."
- duration: 15s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/06-pausa.html
- type: feature_showcase
- persuasion: Causal chain
- beat: mastery / autocontrole
- blueprint: kinetic-type-beats

narrativeRole: Distingue impulso automático de resposta escolhida — o espaço onde o caráter se forma.
keyMessage: A pausa entre estímulo e resposta é o único lugar onde você realmente age.

## Frame 7 — Princípio 5: ações, não palavras

- scene: Bloco de texto filosófico se apaga enquanto um traço/gesto simples (um "V" de ação) se desenha por cima
- voiceover: "Não explique sua filosofia. Incorpore-a. Julgue-se pelas suas ações — não pelas suas palavras."
- duration: 10s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/07-acoes.html
- type: feature_showcase
- persuasion: Before/after
- beat: convicção
- blueprint: kinetic-type-beats

narrativeRole: Confronta o conhecimento teórico com a prática real como único teste válido.
keyMessage: Conhecer os princípios não vale nada sem viver por eles.

## Frame 8 — Princípio 6: entendendo os outros

- scene: Uma figura tipográfica "ofende" outra; a segunda não reage — o impulso de raiva se desenha e é dispensado
- voiceover: "Quem te ofende age a partir da própria confusão sobre o que é bom e ruim. Recuse dar a essa pessoa o poder sobre seu estado interior."
- duration: 13s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/08-outros.html
- type: feature_showcase
- persuasion: Subtractive framing
- beat: serenidade
- blueprint: kinetic-type-beats

narrativeRole: Reformula a raiva diante da ofensa como recusa de ceder controle interno.
keyMessage: Ninguém tira sua paz sem sua permissão.

## Frame 9 — Princípio 7: seu papel na vida

- scene: Um palco minimalista — uma máscara de teatro grega desenhada em traços simples, um holofote centrado
- voiceover: "A vida é uma peça de teatro. Você não escolhe todos os papéis — mas deve interpretar bem o papel recebido."
- duration: 11s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/09-papel.html
- type: feature_showcase
- persuasion: Analogy / metaphor
- beat: aceitação e propósito
- blueprint: kinetic-type-beats

narrativeRole: Usa a metáfora teatral para reformular a queixa sobre circunstâncias como pergunta sobre conduta.
keyMessage: A pergunta certa não é "por que isso aconteceu", é "o que farei agora".

## Frame 10 — Princípio 8: esforço sem apego

- scene: Um arco e flecha desenhado em linhas simples — a flecha parte, uma leve curva de "vento" a desvia do centro exato
- voiceover: "Como um arqueiro: você controla a mira e a técnica — não o vento que desvia a flecha. Desapegue-se do resultado. Comprometa-se com o esforço."
- duration: 15s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/10-arqueiro.html
- type: feature_showcase
- persuasion: Analogy / metaphor
- beat: foco calmo
- blueprint: kinetic-type-beats

narrativeRole: Separa o que está sob controle (preparo) do que não está (resultado) através da metáfora do arqueiro.
keyMessage: Cobrar de si um resultado que não está sob seu controle é a receita da ansiedade.

## Frame 11 — Princípios 9 e 10: riqueza e liberdade interior

- scene: Uma balança tipográfica — de um lado "ter muito", do outro "desejar pouco" — o segundo lado se ilumina em fire-orange e permanece
- voiceover: "Riqueza não é ter muito — é desejar pouco. E ninguém é livre se não é senhor de si mesmo. A liberdade estoica depende de onde você coloca seu valor."
- duration: 16s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/11-riqueza-liberdade.html
- type: benefit_highlight
- persuasion: Common-belief vs reality
- beat: convicção e clareza
- blueprint: comparison-split

narrativeRole: Funde os dois últimos princípios — riqueza interior e autodomínio — na conclusão prática do corpo do vídeo.
keyMessage: Paz que depende do externo é frágil; paz que depende do caráter é inabalável.

## Frame 12 — Conclusão: sua mente é seu reino

- scene: Tela final em ink-black — a frase "Sua mente é seu reino. Governe-a com sabedoria." se monta palavra por palavra e permanece
- voiceover: "Nenhum desses princípios impede que coisas difíceis aconteçam. Mas você pode atravessá-las sem se quebrar — porque sua paz nunca dependeu inteiramente do mundo externo. Sua mente é seu reino. Governe-a com sabedoria."
- duration: 18s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-conclusao.html
- type: branding
- persuasion: Generalization
- beat: resolução e inspiração
- blueprint: titlecard-reveal

narrativeRole: Fecha o arco distilando os 10 princípios numa única linha memorável, generalizando a lição.
keyMessage: A liberdade sempre esteve, em parte, sob seu próprio comando.
