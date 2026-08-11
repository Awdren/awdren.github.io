(function ($) {
    "use strict"; // Start of use strict

    // Closes responsive menu when a nav link is clicked
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 90,
    });

    // Dark mode toggle
    var root = document.documentElement;
    var toggleBtn = document.getElementById("themeToggle");

    function updateToggleIcon() {
        if (!toggleBtn) return;
        var icon = toggleBtn.querySelector("i");
        var isDark = root.getAttribute("data-theme") === "dark";
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
    updateToggleIcon();

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            updateToggleIcon();
        });
    }

    // Footer year
    var footerYear = document.getElementById("footerYear");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
})(jQuery); // End of use strict
