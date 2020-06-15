// Function generate random number from range min and max
function generate_number(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

// Main function compare user number with computer number and return msg
function check_number(num, com_num) {
    let msg = "";

    if (num === "") {
        msg = "NIE PODANO LICZBY";
    } else if (num < com_num) {
        msg = "MOJA LICZBA JEST WIĘKSZA";
    } else if (num > com_num) {
        msg = "MOJA LICZBA JEST MNIEJSZA";
    } else {
        msg = "ZGADŁEŚ TO MOJA LICZBA !";
    }

    return msg;
}

export { generate_number, check_number }
