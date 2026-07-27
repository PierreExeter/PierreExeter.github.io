// Interactive timeline (_pages/timeline.md): highlights the entry nearest the viewport center
// and lets the legend chips filter entries by category.
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");
  if (!timeline) {
    return;
  }

  const entries = Array.from(timeline.querySelectorAll(".timeline-entry"));

  // Entries currently intersecting the middle band of the viewport.
  const inBand = new Set();

  const observer = new IntersectionObserver(
    (records) => {
      records.forEach((record) => {
        if (record.isIntersecting) {
          inBand.add(record.target);
        } else {
          inBand.delete(record.target);
        }
      });
      // Activate the topmost entry in the band (entries is in document order).
      const active = entries.find((entry) => inBand.has(entry)) || null;
      entries.forEach((entry) => entry.classList.toggle("active", entry === active));
    },
    { rootMargin: "-40% 0px -40% 0px" }
  );

  entries.forEach((entry) => observer.observe(entry));

  timeline.querySelectorAll(".timeline-filter").forEach((button) => {
    button.addEventListener("click", () => {
      const wasPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!wasPressed));
      entries.forEach((entry) => {
        if (entry.dataset.category === button.dataset.category) {
          entry.classList.toggle("timeline-hidden", wasPressed);
        }
      });
    });
  });
});
