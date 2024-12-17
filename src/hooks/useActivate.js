import { useEffect } from "react";

/**
 * Función temporal para que se vaya cargando el sitio en onrender. 
 * Se debe eliminar una vez que se tenga el dominio definitivo.
 */
export const useActivate = () => {
    const activate = async () => {
        console.log('\nFetching data from app...')
        const response = await fetch('https://cmdavid.onrender.com/status')
        const data = await response.json();

        if (response.status === 200) console.log('App activated successfully!')
        return data;
    }

    useEffect(() => {
        activate();
    }, [])

    return { activate }
}