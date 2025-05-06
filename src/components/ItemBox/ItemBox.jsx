import propTypes from "prop-types";

export const ItemBox = ({ title, class_name, id }) => {
    return (
        <div className={class_name} key={id}>
            <h2>{title}</h2>
            <div className="line"></div>
        </div>
    )
}


ItemBox.propTypes = {
    title: propTypes.string,
    class_name: propTypes.string,
    id: propTypes.number
}