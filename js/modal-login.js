var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

var form = popup.querySelector(".login-form");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

// Проверка локал-сторэдж

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

// Открытие модального окна и оверлея по клику на "Вход", проверка локал-сторэдж на наличие логина и пароля, если есть - вставлет логин, переводит фокус на пароль, если нет - фокус на логин

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
        login.value = storage;
        pass.focus();
    } else {
        login.focus();
    }
});

// Закрытие модального окна и оверлея по "крестику"

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-overlay-show");
});

// Закрытие модального окна по оверлею

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

// Закрытие модального окна и оверлея по "Esc"

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-overlay-show");
        }
    }
});

// Необходимость ввода логина и пароля

form.addEventListener("submit", function (evt) {
    if (!login.value || !pass.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});