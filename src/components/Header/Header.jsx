import { FirstHeader } from './FirstHeader/FirstHeader'
import { SecondHeader } from './SecondHeader/SecondHeader'
import { HamburguerMenu } from './HamburguerMenu/HamburguerMenu'
import { Alert } from '@mui/material';
import { useMediaQuery } from '../../hooks/useMediaQueries'
import { useState, useEffect } from 'react';
import './Header.css'

export const Header = () => {
    const mobile = useMediaQuery('(min-width: 850px)');
    const [alertVisible, setAlertVisible] = useState(sessionStorage.getItem('homeModalClosed') ? true : false);
    
    useEffect(() => {
        const handleStorageChange = () => {
            setAlertVisible(sessionStorage.getItem('homeModalClosed') ? true : false);
        };
        
        window.addEventListener('homeModalClosed', handleStorageChange);
        
        return () => {
            window.removeEventListener('homeModalClosed', handleStorageChange);
        };
    }, []);
    
    return (
        <header>
            {!mobile ?

                <HamburguerMenu />
                :
                <>
                    <FirstHeader />
                    <SecondHeader />
                </>
            }
            {alertVisible &&
                <Alert severity="warning" style={{ position: 'fixed', top: '14vh', left: '15vw', zIndex: 1000, maxWidth: '70%', margin: '0 auto' }} >
                    🏥 <strong>Importante:</strong> A partir del <strong>Lunes 5 de Enero de 2026</strong>, Consultorios Médicos David se traslada a <strong>Padre Silberman 1346, Santos Lugares</strong>. ¡Los esperamos en nuestra nueva <a href="https://maps.app.goo.gl/XoXaBLuf2e7UkjHu5" target="_blank" rel="noopener noreferrer">ubicación</a>!
                </Alert>
            }
        </header>
    )
}