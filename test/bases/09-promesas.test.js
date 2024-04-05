import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("Pruebas en 09-Promesas", () => {
    test("GetHeroeByIdAsync debe retornar un heroe", (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroes) => {
            expect(heroes).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC",
            });
            done();
        });
    });
    test("getHeroeByIdAsync debe retornar un error", (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toMatch(`No se pudo encontrar el héroe con id: ${id}`)
            done();
        });
    });

});
