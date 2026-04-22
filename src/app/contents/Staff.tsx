'use client';
import Image from "next/image";

export default function Staff() {
    return (
        <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-12">
                <span className="text-primary font-manrope tracking-widest text-xs uppercase font-bold">Profesionales de la salud</span>
                <h1 className="text-5xl font-bold text-on-surface">Nuestro equipo médico</h1>
                <p className="text-on-surface-variant w-2xl text-center text-lg leading-relaxed">Nuestro equipo está conformado por profesionales con experiencia, vocación y compromiso. A continuación, te presentamos algunos de los especialistas que forman parte de Consultorios Médicos David.</p>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
                <ProfessionalCard
                    name="Dra. Ana Carril"
                    specialty="Cardiología"
                    image="/carril.jpeg"
                    university="Facultad de Medicina"
                />
            </div>
            <section className="mt-32 p-12 bg-primary-container rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="font-headline text-4xl font-extrabold text-white mb-4">¿Te interesa trabajar con nosotros?</h2>
                        <p className="text-white/70 text-lg">Siempre nos encontramos en búsqueda de especialistas dedicados a expandir nuestra arquitectura de salud. </p>
                    </div>
                    <button className="bg-white text-primary-container px-6 py-2.5 rounded-md font-semibold text-sm hover:scale-95 active:scale-90 transition-all duration-200 cursor-pointer">Enviar CV</button>
                </div>
            </section>
        </div >
    )
}


type ProfessionalCardProps = {
    name: string;
    specialty: string;
    image: string;
    university: string;
}

const ProfessionalCard = ({ name, specialty, image, university }: ProfessionalCardProps) => {
    return (
        <div className="group bg-surface-container-high p-8 rounded-xl transition-all duration-500 hover:shadow-xl">
            <div className="relative mb-8 aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={500} height={500} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-primary text-sm font-medium flex items-center gap-2">
                        <span className="material-symbols-outlined !text-sm">verified</span>
                        Board Certified Specialist
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                    <h3 className="font-headline text-2xl font-bold text-on-surface">{name}</h3>
                    <p className="text-primary font-medium">{specialty}</p>
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm bg-on-surface-container-low px-3 py-1.5 rounded-full w-fit border border-on-surface-variant">
                        <span className="material-symbols-outlined !text-sm">school</span>
                        {university}
                    </div>
                </div>
            </div>
        </div>
    )
}

