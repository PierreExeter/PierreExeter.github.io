// Scrollytelling timeline (_pages/timeline.md): each entry exposes --tl-progress (0..1,
// 1 = at the vertical middle of the viewport) that _sass/_timeline.scss maps to scale/opacity.
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");
  if (!timeline || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const entries = Array.from(timeline.querySelectorAll(".timeline-entry"));
  let ticking = false;

  function update() {
    ticking = false;
    const viewportCenter = window.innerHeight / 2;
    // Distance from center at which an entry reaches its smallest, dimmest state.
    const falloff = window.innerHeight * 0.4;
    entries.forEach((entry) => {
      const rect = entry.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      const progress = Math.max(0, 1 - distance / falloff);
      entry.style.setProperty("--tl-progress", progress.toFixed(3));
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  update();
});
