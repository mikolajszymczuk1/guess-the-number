// Get game elements.
const number_box = document.querySelector(".form__input");
const clear_button = document.querySelector(".form__btn--clear");
const check_button = document.querySelector(".form__btn--check");
const output = document.querySelector(".game-box__output");
const try_counter = document.querySelector(".game-box__try-counter");

// Generate computer number and set try counter to 0.
const computer_num = Math.floor(Math.random() * 101);
let counter = 0;

// Clear and check operations.
clear_button.addEventListener("click", function () {
    number_box.value = "";
});

// Game logic.
check_button.addEventListener("click", function () {
    output.classList.add("game-box__output--active");

    if (number_box.value === "") {
        output.innerHTML = "NIE PODANO LICZBY";
    } else if (number_box.value < computer_num) {
        output.innerHTML = "MOJA LICZBA JEST WIĘKSZA";
        try_counter.innerHTML = String(++counter);
    } else if (number_box.value > computer_num) {
        output.innerHTML = "MOJA LICZBA JEST MNIEJSZA";
        try_counter.innerHTML = String(++counter);
    } else {
        output.innerHTML = "ZGADŁEŚ TO MOJA LICZBA !";
    }
});