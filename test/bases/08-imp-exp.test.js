import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas en 08 imp-exp", () => {
    // test("getHeroeById debe de retornar un heroe por ID", () => {
    //     const id = 1;
    //     const hero = getHeroeById(id);
    //     console.log(hero);
    //     expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    // });
    // test("getHeroeById debe de retornar undefined si no existe el id", () => {
    //     const id = 100;
    //     const hero = getHeroeById(id);
    //     console.log(hero);
    //     expect(hero).toBeFalsy();
    // });
    test("debe retornar un array con heroes de DC, array.length===3, toEqual al array filtrado", () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: "Batman", owner: "DC" },
            { id: 3, name: "Superman", owner: "DC" },
            { id: 4, name: "Flash", owner: "DC" },
        ]);
    });
    test("getHeroesByOwner debe regresar heroes de marvel, max length ===2", () => {
        const owner2 = "Marvel";
        const heroes2 = getHeroesByOwner(owner2);
        expect(heroes2.length).toStrictEqual(2);
        expect(heroes2).toStrictEqual([
            { id: 2, name: "Spiderman", owner: "Marvel" },
            { id: 5, name: "Wolverine", owner: "Marvel" },
        ]);
        expect(heroes2).toEqual(
            heroes.filter((heroe) => heroe.owner === owner2)
        );
    });
});
