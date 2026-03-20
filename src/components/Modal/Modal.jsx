import { Dialog, Tooltip, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import propTypes from "prop-types";


export const Modal = ({ open, onClose, children, title, footer }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {title && <h2 style={{ margin: '16px', color: 'var(--green-color)' }}>{title}</h2>}
                <Tooltip title="Cerrar" arrow>
                    <CloseIcon style={{ cursor: 'pointer', margin: '16px' }} onClick={onClose} />
                </Tooltip>
            </div>
            <Divider variant="middle" />
            <div style={{ padding: '16px' }}>
                {children}
            </div>
            <Divider variant="middle" />
            <div>
                {footer}
            </div>
        </Dialog>
    )
}

Modal.propTypes = {
    open: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
    children: propTypes.node,
    title: propTypes.string,
    footer: propTypes.node,
}