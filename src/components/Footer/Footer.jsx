import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <a href="https://wa.me/5491135958787" target="_blank" rel="noreferrer" title='WhatsApp'><WhatsAppIcon /></a>
                <span>Puedes hacer click en el ícono de WhatsApp o simplemente enviar un mensaje al +54 9 11 3595-8787</span>
            </div>
            <div>
                <PhoneIcon />
                <span>4757-2389</span>
            </div>
        </footer>
    )
}