import { Carousel } from '../../components/Section/Carousel';
import { Nosotros } from '../../components/Section/Nosotros';
import { Contacto } from '../../components/Section/Contacto';
import './Home.css'

export const Home = () => {
    const items = [
        'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_a.jpg',
        // 'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_b.jpg',
        // 'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_c.jpg',
    ]
    return (
        <>  
            <Carousel items={items} />
            <Nosotros />
            <Contacto />
        </>
    )
}