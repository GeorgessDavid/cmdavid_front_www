'use client';

import { useState, useEffect, useCallback } from "react";
import { API_URL } from '@/constants';

interface Specialty {
    id: number;
    especialidad: string;
}

export const useSpecialties = (order: 'ASC' | 'DESC') => {
    const [specialties, setSpecialties] = useState<Specialty[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchSpecialties = useCallback(async () => {
        setSpecialties(undefined);
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/specialties?active=true&order=${order}`);

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Error al cargar las especialidades.');

            setSpecialties(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, [order])

    const findSpecialties = useCallback(async (param: string) => {
        setSpecialties(undefined);
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/specialties/findSpecialty?param=${param}&order=${order}`);

            const data = await res.json();

            if (res.status === 404) return setSpecialties([]);
            if (!res.ok) throw new Error(data.message || 'Error al buscar las especialidades.');

            setSpecialties(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, [order])

    useEffect(() => {
        fetchSpecialties()
    }, [fetchSpecialties]);

    return {
        specialties,
        loading,
        fetchSpecialties,
        findSpecialties
    }
}