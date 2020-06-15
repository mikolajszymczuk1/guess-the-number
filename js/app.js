import { generate_number, check_number } from "./functions";

// Get game elements.
const number_box = document.querySelector(".form__input");
const clear_button = document.querySelector(".form__btn--clear");
const check_button = document.querySelector(".form__btn--check");
const output = document.querySelector(".game-box__output");
const try_counter = document.querySelector(".game-box__try-counter");

// Generate computer number and set try counter to 0.
const computer_num = generate_number(1, 100);
let counter = 0;

// Clear and check operations.
clear_button.addEventListener("click", function () {
    number_box.value = "";
});

// Game logic.
check_button.addEventListener("click", function () {
    output.classList.add("game-box__output--active");
    output.innerHTML = check_number(number_box.value, computer_num);
    try_counter.innerHTML = String(++counter);
});
