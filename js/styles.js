window.addEventListener('load', function () {
    var btn_nav_menu = document.querySelector(".nav-bar > .heading-sm > .ri-menu-line");
    btn_nav_menu.addEventListener("click", function () {
        var items = document.querySelector("header > div.collapse")
        items.classList.toggle("hidden")
    });
});