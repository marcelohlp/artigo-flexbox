document.addEventListener("DOMContentLoaded", () => {

    const buttonMenu = document.getElementById("body-header-button-menu");
    const navMenu = document.getElementById("body-header-nav");
    const buttonLogin = document.getElementById("button-login");
    const buttonRegister = document.getElementById("button-register");

    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    function toggleMenu() {
        if (mediaQuery.matches) {
            buttonMenu.classList.toggle("is-active");
            navMenu.classList.toggle("is-active");
            buttonLogin.classList.toggle("anchor");
            buttonLogin.classList.toggle("body-header-button");
            buttonLogin.classList.toggle("button-login");
            buttonRegister.classList.toggle("anchor");
            buttonRegister.classList.toggle("body-header-button");
            buttonRegister.classList.toggle("button-register");

            const isExpanded = buttonMenu.getAttribute("aria-expanded") === "true";
            buttonMenu.setAttribute("aria-expanded", !isExpanded);
        }
    }

    function resetMenu() {
        if (!mediaQuery.matches) {

            buttonMenu.classList.remove("is-active");
            navMenu.classList.remove("is-active");

            buttonLogin.classList.add("body-header-button", "button-login");
            buttonLogin.classList.remove("anchor");

            buttonRegister.classList.add("body-header-button", "button-register");
            buttonRegister.classList.remove("anchor");

            buttonMenu.setAttribute("aria-expanded", "false");
        }
    }

    buttonMenu.addEventListener("click", toggleMenu);
    mediaQuery.addEventListener("change", resetMenu);

    buttonMenu.setAttribute("aria-expanded", "false");
});
