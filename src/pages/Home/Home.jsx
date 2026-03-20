import { Carousel } from '../../components/Section/Carousel';
import { Nosotros } from '../../components/Section/Nosotros';
import { Contacto } from '../../components/Section/Contacto';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import './Home.css'

export const Home = () => {
    const items = [
        'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_a.jpg',
        // 'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_b.jpg',
        // 'https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_c.jpg',
    ]
    const [isModalOpen, setIsModalOpen] = useState(!sessionStorage.getItem('homeModalClosed'));

    const handleCloseModal = () => {
        setIsModalOpen(false);
        sessionStorage.setItem('homeModalClosed', 'true');
        // Disparar evento para notificar el cambio
        window.dispatchEvent(new Event('homeModalClosed'));
    }

    const handleOpenLocation = () => {
        window.open('https://maps.app.goo.gl/XoXaBLuf2e7UkjHu5', '_blank');
    }

    const Footer = () => {
        return (
            <div>
                <Button variant='outlined' color="secondary" onClick={handleOpenLocation} style={{ margin: '0.5rem', float: 'right' }}>
                    Ver Ubicación
                </Button>
                <Button variant="outlined" color="primary" onClick={handleCloseModal} style={{ margin: '0.5rem', float: 'right' }}>
                    Entendido
                </Button>

            </div>
        )
    }
    return (
        <>
            <Modal title="Aviso Importante" open={isModalOpen} onClose={handleCloseModal} footer={<Footer />}>
                <p>🏥 Estimados pacientes, les informamos que a partir del <strong> Lunes 5 de Enero de 2026 </strong>, Consultorios Médicos David se traslada a una nueva ubicación para seguir brindándoles la misma calidad de atención, en un espacio renovado.
                <br/>
                <br/>
                <br/>
                📍 Nuestra nueva dirección es: <strong>Padre Silberman 1346, Santos Lugares</strong>.
                <br/>
                <br/>
                <br/>
                👉 La atención continuará con normalidad desde esa fecha en la nueva sede.
                <br/>
                <br/>
                <br/>
                Gracias por acompañarnos y confiar en nosotros.
                <br/>
                <br/>
                <br/>
                <br/>
                <strong>Consultorios Médicos David</strong>
                </p>
            </Modal>
            <Carousel items={items} />
            <Nosotros />
            <Contacto />
        </>
    )
}