/* ─── Hero ───────────────────────────────────────────────────────────────── */

.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--space-24);
  position: relative;
  overflow: hidden;
}

/* Carousel stage: sits behind everything */
.hero-carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--color-bg);
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.4s var(--ease-out);
}
.hero-slide.is-active { opacity: 1; }

.hero-slide-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--pos, center);
  filter: brightness(var(--dim, 0.5)) saturate(0.85);
  transform: scale(1.02);
  /* hold the zoom until the slide has faded out, then reset */
  transition: transform 0s linear 1.6s;
}

/* Slow drift on still images only */
.hero-slide.is-active img.hero-slide-media {
  transform: scale(1.1);
  transition: transform 14s linear;
}

/* Shade keeps the headline readable over any image */
.hero-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(10,8,6,0.7) 0%, transparent 22%),
    linear-gradient(0deg, var(--color-bg) 0%, transparent 32%),
    linear-gradient(90deg, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.7) 38%, rgba(10,8,6,0.25) 72%, rgba(10,8,6,0.4) 100%);
}

.hero-noise {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.018;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px;
  pointer-events: none;
}

.hero-body {
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  color: var(--color-gold-dim);
  margin-bottom: var(--space-6);
}

.hero-headline {
  font-size: var(--text-hero);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin-bottom: var(--space-8);
}

.hero-headline em {
  font-style: italic;
  color: var(--color-gold);
}

.hero-sub {
  max-width: 36ch;
  font-size: var(--text-lg);
  font-weight: 300;
  color: var(--color-text-mid);
  line-height: 1.6;
  margin-bottom: var(--space-12);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* ─── Carousel controls ──────────────────────────────────────────────────── */

.hero-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: var(--space-8);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding-right: calc(var(--gutter) + 2.5rem); /* clear the scroll cue */
}
.hero-controls:empty { display: none; }

.hero-pause {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-faint);
  min-width: 3.5em;
  padding-block: var(--space-2);
  text-align: left;
  transition: color var(--dur-fast);
}
.hero-pause:hover { color: var(--color-gold); }

.hero-dots {
  display: flex;
  gap: var(--space-2);
}

.hero-dot {
  position: relative;
  width: 2.5rem;
  height: 22px; /* tap target; the visible line is 1px */
}

.hero-dot::before,
.hero-dot-fill {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
}
.hero-dot::before { background: var(--color-border-mid); }
.hero-dot:hover::before { background: var(--color-text-mid); }

.hero-dot-fill {
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
}

.hero-dot.is-active.is-timed .hero-dot-fill {
  animation: hero-fill var(--dur, 7000ms) linear forwards;
}
.hero-controls.is-paused .hero-dot-fill { animation-play-state: paused; }

@keyframes hero-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.hero-caption {
  flex: 1;
  min-width: 0;
  font-style: italic;
  font-size: var(--text-sm);
  color: var(--color-text-mid);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Scroll cue ─────────────────────────────────────────────────────────── */

.hero-scroll {
  position: absolute;
  z-index: 2;
  bottom: var(--space-8);
  right: var(--gutter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-faint);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: var(--tracking-wide);
  writing-mode: vertical-rl;
}

.hero-scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, var(--color-gold-dim));
}

/* Text runs full width on phones, so shade evenly instead of left-heavy */
@media (max-width: 768px) {
  .hero-shade {
    background:
      linear-gradient(180deg, rgba(10,8,6,0.75) 0%, transparent 25%),
      linear-gradient(0deg, var(--color-bg) 8%, rgba(10,8,6,0.6) 60%, rgba(10,8,6,0.45) 100%);
  }
}