export const getUser = () => ({
    uid: "ABC123",
    username: "El_Papi1502",
});

export const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
