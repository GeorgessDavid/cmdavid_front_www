import { useState, useEffect } from 'react';

export const useMedicalProcedures = () => {
    const [medicalProcedures, setMedicalProcedures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setLoading(10);
        const requestMedicalProcedures = async () => {
            setProgress(20);
            try {
                const response = await fetch('https://api.consultoriosmedicosdavid.com.ar/medicalProcedures')
                setProgress(70);
                const data = await response.json();
                setProgress(100);
                setMedicalProcedures(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        requestMedicalProcedures()
    }, [])
    return { medicalProcedures, loading, error, progress };
}