import propTypes from 'prop-types';
import { TextIcon } from './TextIcon'
export const ColumnBox = ({ title, child}) => {
    return (
        <div className="column-box">
            <h3>{title}</h3>
            {child.map((item, index) => (
                <TextIcon key={index} icon={item.icon} text={item.text} />
            ))}
        </div>
    );
}

ColumnBox.propTypes = {
    title: propTypes.string.isRequired,
    child: propTypes.array.isRequired
}