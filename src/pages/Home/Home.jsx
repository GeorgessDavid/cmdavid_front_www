import { Carousel } from '../../components/Section/Carousel';
import { Nosotros } from '../../components/Section/Nosotros';
import { Contacto } from '../../components/Section/Contacto';
import './Home.css'

export const Home = () => {
    const items = [
        'https://media.consultoriosmedicosdavid.com.ar/img_1.jpg',
        'https://media.consultoriosmedicosdavid.com.ar/img_2.jpg',
        'https://media.consultoriosmedicosdavid.com.ar/img_3c.jpg',
        'https://media.consultoriosmedicosdavid.com.ar/img_4.jpg',
        'https://media.consultoriosmedicosdavid.com.ar/img_6.jpg',
    ]
    return (
        <>  
            <Carousel items={items} />
            <Nosotros />
            <Contacto />
        </>
    )
}