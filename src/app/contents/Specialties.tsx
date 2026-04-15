'use client';
import { useSpecialties } from '@/hooks';

const SpecialtiesContent = () => {
    const { specialties, loading } = useSpecialties('ASC');

    return (
        <div className="w-full h-full bg-on-surface-high p-24 flex flex-col items-center gap-8">
            <div className='flex flex-col gap-8'>
                <h1 className="text-5xl font-bold text-primary">Especialidades</h1>
                <p className="text-lg max-w-2xl font-inter">
                    Explorá nuestras especialidades médicas y accedé a una atención integral, con profesionales compormetidos con la calidad, la precisión clínica y el trato cercano al paciente.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {specialties &&
                        specialties.map((specialty) => (
                            <div key={specialty.id} className="group bg-surface-container-low hover:bg-surface-container-highest p-8 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 ring-4 ring-primary/5 group-hover:ring-primary/20 transition-all">
                                    <span className="text-2xl font-extrabold text-primary-fixed uppercase">{specialty.especialidad.slice(0, 2)}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">{specialty.especialidad}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-[80%] bg-primary-container p-24 flex flex-col gap-8 items-center justify-center rounded-full">
                <h2 className="text-3xl font-bold">¿No encontras una especialidad en específico?</h2>
            </div>
        </div>
    )
}

export default SpecialtiesContent