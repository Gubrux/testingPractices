import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("pruebas en 06-deses.js", () => {
    test("debe hacer algo", () => {
        const nombre = "jojo";
        const rango = "stardust";
        const clave = "yarr";
        const edad = 12;
        const user = usContext({ nombre, rango, clave, edad });

        expect(user).toStrictEqual({
            nombrex: nombre,
            range: rango,
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        });
    });
});
