const newMessage = () => {
    return 2 + 2;
};
const message = "xd";

export const Pollo = () => {
    return (
        <>
            <h1>Pollo.log</h1>
            <h2> {newMessage()} </h2>
            <h3> {message} </h3>
        </>
    );
};
