# Frame packet: 11-riqueza-liberdade

## Project inputs

- Project: /home/user/Alceu3/videos/liberdade-interior-epicteto
- Design tokens: /home/user/Alceu3/videos/liberdade-interior-epicteto/frame.md
- RULES_DIR: /root/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 11 — Princípios 9 e 10: riqueza e liberdade interior

- scene: Uma balança tipográfica — de um lado "ter muito", do outro "desejar pouco" — o segundo lado se ilumina em fire-orange e permanece
- voiceover: "Riqueza não é ter muito — é desejar pouco. E ninguém é livre se não é senhor de si mesmo. A liberdade estoica depende de onde você coloca seu valor."
- duration: 8.683s
- transition_in: push-slide UP
- status: outline
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

## Selected blueprint: comparison-split

# comparison-split — Comparison Split-Cards

**intent**: Two paired items of equal weight shown side-by-side with mirrored 3D "book-open" tilts — the eye reads them as a balanced comparison, then a pill badge lands at each card's inner edge to punctuate. The motion IS the symmetry: two cards arriving from opposite wings into a held spread.

**roles served**

- Key_Feature (from `comparison-split-cards`): when two complementary features / capabilities of equal weight should be presented **simultaneously, not sequentially** — an A/B, a "X + Y together," paired concepts the viewer must weigh side-by-side. Not for >2 items (use `grid-card-assemble`) or sequential steps.

**duration**: 4–6s

**shot structure** (a `[bg]` canvas carrying two faint ambient glow blooms — `[accent A]` near 30%, `[accent B]` near 70% — so each side owns a color identity across a 50% symmetry axis; equal-width cards under one shared perspective parent)

- **Scene 1 (0.0–~0.8s) — title sets the concept.** A centered `[title line]` with an `[accent keyword]` slides DOWN into place from just above (a short smooth settle). The downward arrival is deliberate: it forms a non-conflicting T-shape against the cards, which arrive from the sides next.
- **Scene 2 (~0.4–1.9s) — the split-tilt entry (signature move).** Two equal-width feature cards arrive from opposite wings — `[left card]` from the left, `[right card]` from the right ~0.2s behind — each carrying a **mirrored 3D `rotateY` tilt** (left faces right, right faces left, opening like a book) and scaling ~0.85→1 as it lands. The entry overlaps the title's tail so the whole thing reads as ONE arrival, not two beats. Each card holds `[image / label / subtitle]`; box-shadows fall **outward** from the tilt (left shadow right, right shadow left).
- **Scene 3 (~1.9–end) — badges punctuate, then hold.** A pill `[badge]` lands at each card's **inner edge** (left then right, ~0.3s apart), overlapping its card ~15% so it reads as attached, not orbiting. This is the lone overshoot in the shot — it earns the punctuation. Settles and holds.

**motion vocabulary**: title slide-down from above; mirrored opposite-wing card entry; static book-open `rotateY` tilt (`+tilt` left, `−tilt` right); tilt-matched outward box-shadow; inner-edge badge spring-pop; gentle phase-opposed idle float (left vs right, never synchronized) registered as subtle jitter; dual side-glow ambient.

**rule mapping**

- two cards entering from opposite wings with mirrored `rotateY` tilts + tilt-matched shadow → `split-tilt-cards` (the signature; keep the two-layer split so the entry `x`/`scale` and the idle never collide on one alias)
- title slide-down settle → `gsap-effects` (translate + opacity on a long-tail `power3`)
- inner-edge pill badge pop (the one overshoot) → `spring-pop-entrance` (overshoot register — earns the punctuation)
- phase-opposed idle float on the pair → `sine-wave-loop` (low-amplitude register — subtle jitter, NOT lazy breathing; left `sin(t)`, right `sin(t+π)` so they never conveyor-belt)
- the two faint side glows behind the cards → `ambient-glow-bloom` (un-triggered soft bloom, one per accent)

**camera modifier**: camera-static by default — the symmetry is the subject and a move would break the balance.
