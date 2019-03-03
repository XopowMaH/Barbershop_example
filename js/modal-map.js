var map_link = document.querySelector(".contacts-button-map");
var map_open = document.querySelector(".modal-map");
var map_close = map_open.querySelector(".modal-close");

// Открытие карты и оверлея

map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_open.classList.add("modal-show");
    overlay.classList.add("modal-show");
});

// Закрытие карты и оверлея по "крестику"

map_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_open.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

// Закрытие карты по оверлею

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("modal-show");
    map_open.classList.remove("modal-show");
});

// Закрытие карты по Esc

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map-open.classList.contains("modal-show")) {
            map-open.classList.remove("modal-show");
            overlay.classList.remove("modal-overlay-show");
        }
    }
});
