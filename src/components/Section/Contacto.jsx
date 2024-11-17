
import { ColumnBox } from "../ColumnBox/ColumnBox";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Contacto = () => {
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <div className="section-container">
                <div className="column-box">
                    <h3>Ubicación</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.218285016829!2d-58.54937308477054!3d-34.59864138046075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb78eea744601%3A0x42c802cad54d54ce!2sPadre%20Silberman%201740%2C%20B1676BRP%20Santos%20Lugares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1663784530531!5m2!1ses!2sar" width="400" height="300" loading="lazy"></iframe>
                </div>
                <div className="column-box">
                    <h3>Horarios de Atención</h3>
                    <div className='text-icon'>
                        <AccessTimeFilledIcon />
                        <span>Lunes a Viernes de 8:00 a 19:00 hs</span>
                    </div>
                    <div className='text-icon'>
                        <AccessTimeIcon />
                        <span>Sábados de 8:00 a 13:00 hs</span>
                    </div>
                    <br />
                    <h3>Dirección</h3>
                    <div className="text-icon">
                        <LocationOnIcon />
                        <span>Padre Silberman 1740, Santos Lugares</span>
                    </div>
                </div>
                <ColumnBox title={"Medios de Contacto"} child={[
                    {
                        icon: <PhoneIcon />,
                        text: '4757-2389'
                    }, {
                        icon: <WhatsAppIcon />,
                        text: '+54 9 11 3595-8787'
                    }, {
                        icon: <EmailIcon />,
                        text: 'consultoriosmedicosdavid@gmail.com'
                    }

                ]} />
                <ColumnBox title={"Redes Sociales"} child={[{
                    icon: <InstagramIcon />,
                    text: 'consultoriosmedicosdavid'
                }, {
                    icon: <FacebookIcon />,
                    text: 'Consultorios Médicos David'
                }, {
                    icon: <LinkedInIcon />,
                    text: 'Consultorios Médicos David'
                }]} />
            </div>
        </section>
    );
}