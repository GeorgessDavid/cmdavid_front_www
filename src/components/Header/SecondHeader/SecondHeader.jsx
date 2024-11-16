import { Link } from 'react-router-dom'
export const SecondHeader = () =>{
    return (
        <div className='secondHeader'>
                <div>
                    <a href="/" title='Volver al inicio'><img srcSet="/logoCMD.png"/></a>
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