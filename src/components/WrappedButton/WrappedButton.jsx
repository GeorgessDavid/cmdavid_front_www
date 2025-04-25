import PropTypes from 'prop-types';
import './WrappedButton.css';
export default function WrappedButton({ icon, title, text, onClick }) {
    return (
        <div className="download-wrapper" onClick={onClick} title={title}>
            <div className="download-wrapper-button">
                <div className="download-button">
                    {icon}
                </div>
                <span>{text}</span>
            </div>
        </div>
    )
}


WrappedButton.propTypes = {
    icon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}