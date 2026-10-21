(function () {
  "use strict";

  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const yearNodes = document.querySelectorAll("[data-current-year]");

  function themeLabel(theme) {
    return theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  }

  function updateThemeButton() {
    if (!themeButton) return;
    const theme = root.dataset.theme || "light";
    themeButton.setAttribute("aria-label", themeLabel(theme));
    themeButton.setAttribute("title", themeLabel(theme));
    themeButton.querySelector("[data-theme-icon]").textContent =
      theme === "dark" ? "☀" : "☾";
  }

  if (themeButton) {
    updateThemeButton();
    themeButton.addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("fortior-legal-theme", next);
      } catch (_) {
        // The theme remains active for this visit when storage is unavailable.
      }
      updateThemeButton();
    });
  }

  function closeMenu() {
    if (!nav || !menuButton) return;
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });
  }

  yearNodes.forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  const tocLinks = Array.from(document.querySelectorAll(".toc a[href^='#']"));
  if ("IntersectionObserver" in window && tocLinks.length) {
    const sections = tocLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      function (entries) {
        const visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (!visible.length) return;
        const activeId = "#" + visible[0].target.id;
        tocLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === activeId);
        });
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
