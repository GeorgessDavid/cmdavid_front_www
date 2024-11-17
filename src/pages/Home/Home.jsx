import { Carousel } from '../../components/Section/Carousel';
import { Nosotros } from '../../components/Section/Nosotros';
import { Contacto } from '../../components/Section/Contacto';
import './Home.css'

export const Home = () => {
    const items = [
        '/consultorios_exterior.jpg',
        '/salaDeEsperaBlanca.jpg',
        '/jardin_consultorio.jpg',
        '/sala_de_espera_con_gente_1.jpg',
        '/sala_de_espera_con_gente_2.jpg',
    ]
    return (
        <>
            <Carousel items={items} />
            <Nosotros />
            <Contacto />
        </>
    )
}