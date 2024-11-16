import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className='firstHeader'>
                <div>
                    <a href="https://www.facebook.com/ConsultoriosMedicosDavid" target='_blank' title='Facebook'><FontAwesomeIcon icon={faFacebook} size='2xl'/></a>
                    <a href="https://www.instagram.com/consultoriosmedicosdavid/" target='_blank' title='Instagram'><FontAwesomeIcon icon={faInstagram} size='2xl'/></a>
                </div>
                <div>
                    <a href='https://cmdavid.onrender.com/'>Prestadores</a>
                </div>
            </div>
            <div className='secondHeader'>
                <div>
                    <a href="/" title='Volver al inicio'><img srcSet="/logoCMD.png"/></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/#nosotros">Nosotros</a></li>
                        <li><a href="/#contacto">Contacto</a></li>
                        <li><Link to="/especialidades">Especialidades</Link></li>
                        <li><Link to="/estudios">Estudios</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}