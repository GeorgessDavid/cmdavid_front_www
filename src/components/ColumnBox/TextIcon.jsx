import propTypes from "prop-types";

export const TextIcon = ({ icon, text }) => {
    return (
        <div className="text-icon">
            {icon}
            <span>{text}</span>
        </div>
    );
}

TextIcon.propTypes = {
    icon: propTypes.element.isRequired,
    text: propTypes.string.isRequired
}