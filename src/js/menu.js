// Header behavior: the mobile menu toggle and the disclosure panels (the two
// mega menus on desktop, the same items as accordions on mobile). Everything is
// guarded, so this file is harmless if a piece is absent.
(function () {
  // --- Mobile menu ---------------------------------------------------------
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.getElementById("mobile-nav");

  if (toggle && panel) {
    function setMenuOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      panel.hidden = !open;
    }

    toggle.addEventListener("click", function () {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    // A desktop-width viewport shows the inline nav, so drop any open state.
    var desktop = window.matchMedia("(min-width: 60rem)");
    desktop.addEventListener("change", function (event) {
      if (event.matches) setMenuOpen(false);
    });
  }

  // --- Disclosure panels (desktop mega menu + mobile accordion) ------------
  var dropdownToggles = Array.prototype.slice.call(
    document.querySelectorAll("[data-dropdown-toggle]")
  );

  if (!dropdownToggles.length) return;

  function panelFor(button) {
    var id = button.getAttribute("aria-controls");
    return id ? document.getElementById(id) : null;
  }

  // Open reveals the panel then adds is-open on the next frame so the fade-in
  // runs. Under prefers-reduced-motion the global reduce rule zeroes the
  // transition, so it simply appears. Close hides it at once (fade-in only).
  function setDropdownOpen(button, open) {
    var dropdown = panelFor(button);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    if (!dropdown) return;
    if (open) {
      dropdown.hidden = false;
      requestAnimationFrame(function () {
        dropdown.classList.add("is-open");
      });
    } else {
      dropdown.classList.remove("is-open");
      dropdown.hidden = true;
    }
  }

  function closeAll(except) {
    dropdownToggles.forEach(function (button) {
      if (button !== except) setDropdownOpen(button, false);
    });
  }

  dropdownToggles.forEach(function (button) {
    button.addEventListener("click", function () {
      var willOpen = button.getAttribute("aria-expanded") !== "true";
      closeAll(button);
      setDropdownOpen(button, willOpen);
    });
  });

  // Escape closes the open panel and returns focus to its button.
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var open = dropdownToggles.filter(function (button) {
      return button.getAttribute("aria-expanded") === "true";
    });
    if (!open.length) return;
    open.forEach(function (button) {
      setDropdownOpen(button, false);
    });
    open[0].focus();
  });

  // A click outside any panel closes them all.
  document.addEventListener("click", function (event) {
    var inside = dropdownToggles.some(function (button) {
      var dropdown = panelFor(button);
      return button.contains(event.target) || (dropdown && dropdown.contains(event.target));
    });
    if (!inside) closeAll(null);
  });

  // --- Desktop hover-intent + focusout (the mega menu only) ----------------
  // Hover opens on a short delay and closes on a slightly longer one, so a
  // diagonal move onto the panel does not dismiss it. Gated to a pointer that
  // truly hovers at desktop width, so touch and the mobile accordion stay
  // click-only. Focusout closes when keyboard focus leaves the trigger+panel,
  // which keeps Tab flowing through and out without trapping focus.
  var desktopHover = window.matchMedia("(min-width: 60rem) and (hover: hover)");
  var openTimer;
  var closeTimer;

  Array.prototype.slice
    .call(document.querySelectorAll(".site-nav [data-dropdown-toggle]"))
    .forEach(function (button) {
      var group = button.closest(".has-dropdown");
      if (!group) return;

      group.addEventListener("mouseenter", function () {
        if (!desktopHover.matches) return;
        clearTimeout(closeTimer);
        openTimer = setTimeout(function () {
          closeAll(button);
          setDropdownOpen(button, true);
        }, 140);
      });

      group.addEventListener("mouseleave", function () {
        if (!desktopHover.matches) return;
        clearTimeout(openTimer);
        closeTimer = setTimeout(function () {
          setDropdownOpen(button, false);
        }, 200);
      });

      group.addEventListener("focusout", function (event) {
        if (!group.contains(event.relatedTarget)) {
          setDropdownOpen(button, false);
        }
      });
    });

  // Clear any open desktop panel when crossing the mobile/desktop boundary.
  desktopHover.addEventListener("change", function () {
    closeAll(null);
  });
})();
