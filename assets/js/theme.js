(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  if (!toggle) return;

  function applyTheme(theme) {
    root.dataset.theme = theme === "light" ? "light" : "dark";
    var label = root.dataset.theme === "light" ? "Switch to dark mode" : "Switch to light mode";
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }

  applyTheme(root.dataset.theme);

  toggle.addEventListener("click", function () {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    try {
      localStorage.setItem("site-theme", root.dataset.theme);
    } catch (error) {
      return;
    }
  });

  window.addEventListener("storage", function (event) {
    if (event.key === "site-theme" || event.key === null) {
      applyTheme(event.newValue);
    }
  });
})();
