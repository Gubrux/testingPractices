import { getSaludo } from "../src/base-pruebas/02-template-string";

describe("Pruebas en 02 template strung", () => {
    test("este es un texto", () => {
        const name = 'Fernando';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});
