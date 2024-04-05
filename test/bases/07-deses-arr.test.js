import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
    test("debe retornar un str y un int", () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe("");
        expect(numbers).toBe(123);

        // expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");

        expect(letters).toEqual(expect.any(String));
    });
});
