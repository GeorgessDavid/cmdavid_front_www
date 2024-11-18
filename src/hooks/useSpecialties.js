import { useState, useEffect } from 'react';

export const useSpecialties = () => {
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setLoading(10);
        const requestSpecialties = async () => {
            setProgress(20);
            try {
                const response = await fetch('https://api-cmdavid.vercel.app/specialties')
                setProgress(70);
                const data = await response.json();
                setProgress(100);
                setSpecialties(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        requestSpecialties()
    }, [])
    return { specialties, loading, error, progress };
}