import { Link } from 'react-router-dom'
import { useMediaScroll } from '../../../hooks/useMediaScroll';
export const SecondHeader = () =>{
    const { scrolled } = useMediaScroll(68);
    return (
        <div className={!scrolled ? 'secondHeader' : 'scrolled-secondHeader'}>
                <div>
                    <a href="/#" title='Volver al inicio'><img srcSet="/logoCMD.png"/></a>
                </div>
                <nav className='secondHeader_nav'>
                    <ul>
                        <li><a href="/#nosotros">Nosotros</a></li>
                        <li><a href="/#contacto">Contacto</a></li>
                        <li><Link to="/especialidades">Especialidades</Link></li>
                        <li><Link to="/estudios">Estudios</Link></li>
                    </ul>
                </nav>
            </div>
    )
}