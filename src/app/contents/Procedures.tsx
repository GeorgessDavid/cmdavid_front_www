'use client';

import { useState } from 'react';
import { useProcedures } from '@/hooks';
import { Select } from '@/components';
import { LoadingComponent } from '@/components/Loading';

const ProceduresContent = () => {
    const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')
    const { procedures, loading, findProcedures, fetchProcedures } = useProcedures(order);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length > 0) {
            findProcedures(value);
        } else {
            fetchProcedures();
        }
    }


    return (

        <div className="w-full h-full bg-on-surface-high p-24 flex flex-col items-center gap-8">

            <div className=' flex w-full flex-col gap-8'>
                <h1 className="text-5xl font-bold text-primary">Estudios</h1>
                <p className="text-lg max-w-2xl font-inter">
                    Explorá nuestros estudios médicos y accedé a una atención integral, con profesionales compormetidos con la calidad, la precisión clínica y el trato cercano al paciente.
                </p>
                <div className="w-full flex items-center justify-between gap-8">
                    <div className="flex flex-col w-full gap-4 flex-3">
                        <span className="text-primary !font-label font-bold text-xs uppercase tracking-widest">Buscar estudio</span>
                        <input onChange={handleSearch} className="py-4 rounded-full px-8 w-full bg-surface-container-highest border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-high transition-all duration-300" placeholder="Ej: Ecografía Abdominal" />
                    </div>
                    <div className="flex flex-col w-full flex-1 gap-4">
                        <span className="text-primary !font-label font-bold text-xs uppercase tracking-widest">Ordenar por</span>
                        <div className="relative w-full">
                            <Select options={[{ value: 'ASC', label: 'Ascendente - A-Z' }, { value: 'DESC', label: 'Descendente - Z-A' }]} value={order} onChange={(value) => setOrder(value as 'ASC' | 'DESC')} />
                        </div>
                    </div>
                </div>
                {loading && <LoadingComponent />}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {procedures &&
                        procedures.map((procedure) => (
                            <div key={procedure.id} className="group bg-surface-container-low hover:bg-surface-container-highest p-8 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 ring-4 ring-primary/5 group-hover:ring-primary/20 transition-all">
                                    <span className="text-2xl font-extrabold text-primary-fixed uppercase">{procedure.practicaMedica.slice(0, 2)}</span>
                                </div>
                                <h3 className="text-md md:text-lg lg:text-2xl font-bold text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">{procedure.practicaMedica}</h3>
                            </div>
                        ))
                    }
                </div>
                {procedures && procedures.length === 0 && (
                    <div className="flex items-center justify-center w-full h-full">
                        <span className="text-lg font-bold text-on-surface">No se encontraron estudios</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProceduresContent;
