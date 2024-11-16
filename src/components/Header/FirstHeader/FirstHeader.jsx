import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const FirstHeader = () => {
    return (
        <div className='firstHeader'>
            <div>
                <a href="https://www.facebook.com/ConsultoriosMedicosDavid" target='_blank' title='Facebook'><FontAwesomeIcon icon={faFacebook} size='2xl' /></a>
                <a href="https://www.instagram.com/consultoriosmedicosdavid/" target='_blank' title='Instagram'><FontAwesomeIcon icon={faInstagram} size='2xl' /></a>
            </div>
            <div>
                <a href='https://cmdavid.onrender.com/'>Prestadores</a>
            </div>
        </div>
    )
}