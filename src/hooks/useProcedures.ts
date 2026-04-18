'use client';

import { useState, useEffect, useCallback } from "react";
import { API_URL } from '@/constants';

interface Procedures {
    id: number;
    practicaMedica: string;
}

export const useProcedures = (order: 'ASC' | 'DESC') => {
    const [procedures, setProcedures] = useState<Procedures[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProcedures = useCallback(async () => {
        setProcedures(undefined);
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/medicalProcedures?active=true&order=${order}`);

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Error al cargar las especialidades.');

            setProcedures(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, [order])

    const findProcedures = useCallback(async (param: string) => {
        //TODO: Agregar endpoint para buscar especialidades
        setProcedures(undefined);
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/medicalProcedures/findMedicalProcedure?param=${param}&order=${order}`);

            const data = await res.json();

            if (res.status === 404) return setProcedures([]);
            if (!res.ok) throw new Error(data.message || 'Error al buscar las especialidades.');

            setProcedures(data);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, [order])

    useEffect(() => {
        fetchProcedures()
    }, [fetchProcedures]);

    return {
        procedures,
        loading,
        fetchProcedures,
        findProcedures
    }
}