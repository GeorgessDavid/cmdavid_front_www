'use client';

import { useEffect, useState } from "react";
import { API_URL } from "@/constants";

const useMetrics = () => {
    const [metrics, setMetrics] = useState({
        totalPatients: '0',
        totalConsultas: '0',
        totalProfesionales: '0',
        totalEspecialidades: '0'
    });

    useEffect(() => {
        const fetchMetrics = async () => {
            const response = await fetch(`${API_URL}/public/metrics`);
            if (response.status === 200) {
                const data = await response.json();
                setMetrics(data);
            }
        };
        fetchMetrics();
    }, []);

    return metrics;
}

export default useMetrics;