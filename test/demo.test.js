describe("Demo test", () => {
    test("Esta prueba no deberia de fallar", () => {
        const message1 = "Hola Mundo";

        const message2 = message1.trim(); // this will remove the white spaces from the string

        expect(message1).toBe(message2);
    });
});