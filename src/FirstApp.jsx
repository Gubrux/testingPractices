import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{name}</p>
            <img
                src="https://i.ytimg.com/vi/qRr-eosHn8g/hqdefault.jpg"
                alt="soy un pollo marge image"
            />
        </>
    );
};

FirstApp.defaultProps = {
    name: "No name",
    subTitle: "No subtitle",
    title: "No tittle",
};

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};
