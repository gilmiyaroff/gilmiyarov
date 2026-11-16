(() => {
  "use strict";
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("#mobile-nav");
  const closeNav = () => {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (nav) nav.setAttribute("aria-hidden", "true");
  };
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      nav.setAttribute("aria-hidden", String(!open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeNav(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 960) closeNav(); });
  }
  const elements = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });
    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("is-visible"));
  }
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();