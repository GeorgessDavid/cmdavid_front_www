'use client';
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Home() {
    const openSpecialties = () => {
        window.open('/specialties', '_blank');
    }

    return (
        <main>
            <section className="relative min-h-screen items-center pt-20 overflow-hidden bg-surface-container-low" id="home">
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
                <div
                    className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary/5 backdrop-blur-3xl rounded-tl-[120px] -z-10 border-t border-l border-primary/10">
                </div>
            </section>
            <section id="specialties" className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-on-surface mb-4">Especialidades Destacadas</h2>
                        <div className="w-24 h-1.5 bg-primary"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                        {/* Tarjeta de Pediatría */}
                        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[450px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                            <div className="absolute top-0 right-0 p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined !text-4xl">child_care</span>
                                </div>
                            </div>
                            <Image
                                src="/unnamed.png"
                                alt="Pediatría"
                                width={1920}
                                height={1080}
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                loading="eager"
                            />
                            <h3 className="text-4xl font-bold text-on-surface mb-4 relative z-10">Pediatría</h3>
                            <p className="text-on-surface-variant max-w-md relative z-10 leading-relaxed text-lg">
                                Cuidado integral para los más pequeños, desde recién nacidos hasta adolescentes, con atención personalizada y seguimiento continuo.
                            </p>
                        </div>
                        {/* Tarjeta de Cardiología */}
                        <div className="md:col-span-4 group bg-primary dark:bg-[#034d37] rounded-2xl p-10 h-[450px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <span className="material-symbols-outlined !text-4xl">cardiology</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">Cardiología</h3>
                                <p className="text-white/80 text-base leading-relaxed mb-6">
                                    Diagnóstico y tratamiento avanzado de patologías cardíacas con tecnología de última generación y un equipo de especialistas altamente calificados.
                                </p>
                            </div>
                        </div>
                        {/* Tarjeta de traumatología */}
                        <div className="md:col-span-4 group bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[400px] flex flex-col items-center justify-center text-center hover:bg-surface-container-high hover:shadow-xl transition-all">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <span className="material-symbols-outlined !text-7xl text-primary relative z-10">orthopedics</span>
                            </div>
                            <h3 className="text-3xl font-bold text-on-surface mb-3">Traumatología</h3>
                            <p className="text-on-surface-variant text-base">
                                Diagnóstico y tratamiento avanzado de patologías traumatológicas con tecnología de última generación y un equipo de especialistas altamente calificados.
                            </p>
                        </div>
                        {/* Tarjeta de Gastroenterología */}
                        {/* <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[400px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <span className="material-symbols-outlined text-7xl text-primary realtive z-10">gastroenterology</span>
                            </div>
                            <Image
                                src="/images.jfif"
                                alt="Gastroenterología"
                                width={1920}
                                height={1080}
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                loading="eager"
                            />
                            <h3 className="text-3xl font-bold text-on-surface mb-3">Gastroenterología</h3>
                            <p className="text-on-surface-variant text-base">
                                Diagnóstico y tratamiento avanzado de patologías gastroenterológicas con tecnología de última generación y un equipo de especialistas altamente calificados.
                            </p>
                        </div> */}
                        <div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[400px] flex flex-col justify-between">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full">
                                <SpecialtyCard icon="gastroenterology" title="Gastroenterología" />
                                <SpecialtyCard icon="female" title="Ginecología" />
                                <SpecialtyCard icon="neurology" title="Neurología" />
                                <SpecialtyCard icon="psychology" title="Psicología" />
                                <SpecialtyCard icon="urology" title="Urología" />
                                <SpecialtyCard icon="endocrinology" title="Endocrinología" />
                            </div>
                            <span className="text-primary text-xl font-bold cursor-pointer flex gap-2 hover:gap-6 transition-all duration-300 justify-end" onClick={openSpecialties}>Ver todas <ArrowOutwardIcon sx={{ fontSize: 24 }} /></span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutUs" className="py-32 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-surface-container-high">
                                <Image
                                    src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/1346_a.jpg"
                                    alt="CMD"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-(--custom-accent-primary) p-8 rounded-2xl shadow-2xl hidden md:block ">
                                <p className="text-5xl font-black text-surface-tint mb-1 tracking-tighter">9+</p>
                                <p className="text-white/80 font-medium text-sm">Años de trayectoria</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <span className="text-primary  font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Nosotros</span>
                            <h2 className="text-5xl font-extrabold text-on-surface mb-9 leading-tight tracking-tight">Ética profesional al servicio <br /> de tu salud</h2>
                            <p>
                                <span className="text-primary font-semibold">Consultorios Médicos David</span> fue fundado en el año 2016, dando continuidad a una extensa trayectoria médica iniciada en la localidad de Sáenz Peña. La elección de Santos Lugares marcó el comienzo de una nueva etapa, con la visión de crear un espacio que combinara experiencia, compromiso y vocación de servicio.
                            </p>
                            {/* 
                            TODO - Cards con las visiones y los valores
                            <p>
                                Desde el inicio, <span className="text-primary font-semibold">nuestros valores</span> han sido guiados con tres principios fundamentales:
                            </p>
                            <div className="ms-8 flex flex-col gap-2">
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">handshake</span>
                                    <span className="text-on-surface">Relación médico-paciente basada en la confianza.</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">sentiment_satisfied_alt</span>
                                    <span className="text-on-surface">Calidez y buen trato en cada consulta.</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <span className="text-on-surface">Compromiso ético y humano con cada persona.</span>
                                </div>
                            </div> */}
                            <p>
                                A lo largo de los años, hemos ampliado nuestras instalaciones, sumado especialidades médicas y optimizado nuestros servicios con sistemas informatizados para turnos, estadísticas y gestión de historias clínicas, buscando siempre una atención más eficiente y personalizada.
                            </p>
                            <p>
                                Nos diferenciamos por el trato cercano de nuestro equipo médico y administrativo, que trabaja día a día con responsabilidad y dedicación, priorizando la calidad humana y profesional en cada consulta.
                            </p>
                            {/* 
                            <p>
                            <span className="text-primary font-semibold">Nuestra visión</span> es seguir creciendo y fortaleciendo el compromiso con la atención médica a través de:
                            </p>
                            <div className="ms-8 flex flex-col gap-2">
                            <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">medical_services</span>
                                    Incorporar más especialidades médicas.
                                </div>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">domain</span>
                                    Ampliar la infraestructura.
                                </div>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary">monitor_heart</span>
                                    Invertir en tecnología que mejore la atención médica.
                                </div>
                            </div> */}
                            <p> Creemos en una medicina centrada en las personas con vocación y compromiso. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 bg-surface-low">
                <div className="max-w-7xl mx-auto px-8 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-on-surface">Nuestros Valores</h3>
                    <div className="h-1.5 w-20 bg-primary"></div>
                    <div className="w-full flex justify-center gap-12">
                        <div className="flex flex-col gap-2 items-center bg-surface-container rounded-full p-8 w-3xl border-0 border-primary hover:border-l-4 hover:border-primary transition-all duration-100">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <span className="material-symbols-outlined !text-4xl text-primary relative z-10">handshake</span>
                            </div>
                            <span className="text-on-surface font-semibold">Relación médico-paciente basada en la confianza.</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center bg-surface-container rounded-full p-8 w-3xl border-0 border-primary hover:border-l-4 hover:border-primary transition-all duration-100">


                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <span className="material-symbols-outlined !text-4xl text-primary relative z-10">sentiment_satisfied_alt</span>
                            </div>
                            <span className="text-on-surface font-semibold">Calidez y buen trato en cada consulta.</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center bg-surface-container rounded-full p-8 w-3xl border-0 border-primary hover:border-l-4 hover:border-primary transition-all duration-100">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                <span className="material-symbols-outlined !text-4xl text-primary relative z-10">verified</span>
                            </div>
                            <span className="text-on-surface font-semibold">Compromiso ético y humano con cada persona.</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


const SpecialtyCard = ({ icon, title }: { icon: string, title: string }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                <span className="material-symbols-outlined !text-4xl text-primary relative z-10">{icon}</span>
            </div>
            <span className="text-on-surface font-semibold">{title}</span>
        </div>
    )
}