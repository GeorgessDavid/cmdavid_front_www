'use client';
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="relative min-h-screen items-center pt-20 overflow-hidden bg-surface-container-low">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_a.jpg"
                        alt="CMD"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover opacity-10"
                        loading="eager"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1.5 px-4 mb-6 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
                            Servicios Médicos de Excelencia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-on-surface">
                            Cuidando tu salud con <span className="text-primary">dedicación</span> y <span
                                className="text-primary">profesionalismo</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                            En Consultorios Médicos David, ofrecemos atención médica integral con un equipo de especialistas altamente calificados y tecnología de vanguardia.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 cursor-pointer">Nuestras Especialidades</button>
                            <button className="border-2 border-primary text-primary px-10 py-rounded-md font-bold text-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer">Conocé a nuestro equipo médico</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}