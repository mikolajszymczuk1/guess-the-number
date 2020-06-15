import { check_number as cn } from "../js/functions";

describe("Check number function", () => {
    test("Should show message based on user's number and computers' number", () => {
        expect(cn("", 10)).toEqual("NIE PODANO LICZBY");
        expect(cn(1, 10)).toEqual("MOJA LICZBA JEST WIĘKSZA");
        expect(cn(12, 10)).toEqual("MOJA LICZBA JEST MNIEJSZA");
        expect(cn(10, 10)).toEqual("ZGADŁEŚ TO MOJA LICZBA !");
    });
});
