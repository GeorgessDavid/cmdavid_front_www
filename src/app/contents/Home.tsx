'use client';
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useMetrics, useReviews, useCountUp } from '@/hooks';
import Link from "next/link";
import { Reveal, StaggerReveal, StaggerItem } from '@/components';

export default function Home() {
    const { totalPatients, totalConsultas, totalProfesionales, totalEspecialidades } = useMetrics();
    const { reviews, loading } = useReviews();
    const openSpecialties = () => {
        window.open('/specialties', '_blank');
    }
    const openTurnos = () => {
        window.open('https://api.whatsapp.com/send/?phone=5491135958787&text=Hola, quisiera solicitar un turno.&type=phone_number&app_absent=0', '_blank');
    }

    const goToSpecialties = () => {
        window.location.href = '/#specialties'
    }

    return (
        <main>
            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="relative min-h-screen items-center pt-20 overflow-hidden bg-surface-container-low" id="home">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/cmd_main.webp"
                        alt="CMD"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover opacity-10"
                        loading="eager"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <Reveal variant="fadeUp" delay={0.1}>
                            <span className="inline-block py-1.5 px-4 mb-6 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
                                Servicios Médicos de Excelencia
                            </span>
                        </Reveal>
                        <Reveal variant="fadeUp" delay={0.22}>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-on-surface">
                                Cuidando tu salud con <span className="text-primary">dedicación</span> y <span
                                    className="text-primary">profesionalismo</span>
                            </h1>
                        </Reveal>
                        <Reveal variant="fadeUp" delay={0.34}>
                            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                                En Consultorios Médicos David, ofrecemos atención médica integral con un equipo de especialistas altamente calificados y tecnología de vanguardia.
                            </p>
                        </Reveal>
                        <Reveal variant="fadeUp" delay={0.46}>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={goToSpecialties} className="bg-primary w-full md:w-auto text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 cursor-pointer">Nuestras Especialidades</button>
                                <button className="border-2 border-primary w-full md:w-auto text-primary px-10 py-rounded-md font-bold text-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer">Conocé a nuestro equipo médico</button>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div
                    className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary/5 backdrop-blur-3xl rounded-tl-[120px] -z-10 border-t border-l border-primary/10">
                </div>
            </section>

            {/* ── Especialidades ───────────────────────────────────────────────── */}
            <section id="specialties" className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <Reveal variant="fadeUp" className="mb-20">
                        <h2 className="text-4xl font-bold text-on-surface mb-4">Especialidades Destacadas</h2>
                        <div className="w-24 h-1.5 bg-primary"></div>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                        {/* Tarjeta de Pediatría */}
                        <Reveal variant="slideLeft" delay={0.05} className="md:col-span-8">
                            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[450px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined !text-4xl">child_care</span>
                                    </div>
                                </div>
                                <Image
                                    src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/pediatrics.webp"
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
                        </Reveal>

                        {/* Tarjeta de Cardiología */}
                        <Reveal variant="slideRight" delay={0.15} className="md:col-span-4">
                            <div className="group bg-primary dark:bg-[#034d37] rounded-2xl p-10 h-[450px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
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
                        </Reveal>

                        {/* Tarjeta de Traumatología */}
                        <Reveal variant="fadeUp" delay={0.1} className="md:col-span-4">
                            <div className="group bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[400px] flex flex-col items-center justify-center text-center hover:bg-surface-container-high hover:shadow-xl transition-all">
                                <div className="mb-6 relative">
                                    <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                                    <span className="material-symbols-outlined !text-7xl text-primary relative z-10">orthopedics</span>
                                </div>
                                <h3 className="text-3xl font-bold text-on-surface mb-3">Traumatología</h3>
                                <p className="text-on-surface-variant text-base">
                                    Diagnóstico y tratamiento avanzado de patologías traumatológicas con tecnología de última generación y un equipo de especialistas altamente calificados.
                                </p>
                            </div>
                        </Reveal>

                        {/* Grid de especialidades adicionales */}
                        <Reveal variant="fadeUp" delay={0.15} className="md:col-span-8">
                            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-10 h-[450px] lg:h-[400px] flex flex-col justify-between">
                                <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full" staggerDelay={0.08} delayChildren={0.1}>
                                    <StaggerItem><SpecialtyCard icon="gastroenterology" title="Gastroenterología" /></StaggerItem>
                                    <StaggerItem><SpecialtyCard icon="female" title="Ginecología" /></StaggerItem>
                                    <StaggerItem><SpecialtyCard icon="neurology" title="Neurología" /></StaggerItem>
                                    <StaggerItem><SpecialtyCard icon="psychology" title="Psicología" /></StaggerItem>
                                    <StaggerItem><SpecialtyCard icon="urology" title="Urología" /></StaggerItem>
                                    <StaggerItem><SpecialtyCard icon="endocrinology" title="Endocrinología" /></StaggerItem>
                                </StaggerReveal>
                                <span className="text-primary text-xl mt-8 font-bold cursor-pointer flex gap-2 hover:gap-6 transition-all duration-300 justify-end" onClick={openSpecialties}>Ver todas <ArrowOutwardIcon sx={{ fontSize: 24 }} /></span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Sobre Nosotros ────────────────────────────────────────────────── */}
            <section id="aboutUs" className="py-32 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <Reveal variant="slideLeft" className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-surface-container-high">
                                <Image
                                    src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/consultorio_4.webp"
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
                        </Reveal>
                        <Reveal variant="slideRight" delay={0.1} className="lg:w-1/2 flex flex-col gap-4">
                            <span className="text-primary  font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Nosotros</span>
                            <h2 className="text-5xl font-extrabold text-on-surface mb-9 leading-tight tracking-tight">Ética profesional al servicio <br /> de tu salud</h2>
                            <p>
                                <span className="text-primary font-semibold">Consultorios Médicos David</span> fue fundado en el año 2016, dando continuidad a una extensa trayectoria médica iniciada en la localidad de Sáenz Peña. La elección de Santos Lugares marcó el comienzo de una nueva etapa, con la visión de crear un espacio que combinara experiencia, compromiso y vocación de servicio.
                            </p>
                            <p>
                                A lo largo de los años, hemos ampliado nuestras instalaciones, sumado especialidades médicas y optimizado nuestros servicios con sistemas informatizados para turnos, estadísticas y gestión de historias clínicas, buscando siempre una atención más eficiente y personalizada.
                            </p>
                            <p>
                                Nos diferenciamos por el trato cercano de nuestro equipo médico y administrativo, que trabaja día a día con responsabilidad y dedicación, priorizando la calidad humana y profesional en cada consulta.
                            </p>
                            <p> Creemos en una medicina centrada en las personas con vocación y compromiso. </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Métricas ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-surface border-y border-outline-variant/10">
                <StaggerReveal
                    className="mas-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
                    staggerDelay={0.12}
                    delayChildren={0.05}
                    amount={0.3}
                >
                    <StaggerItem variant="zoomIn">
                        <MetricCounter value={totalPatients} label="Pacientes" />
                    </StaggerItem>
                    <StaggerItem variant="zoomIn">
                        <MetricCounter value={totalConsultas} label="Consultas" />
                    </StaggerItem>
                    <StaggerItem variant="zoomIn">
                        <MetricCounter value={totalProfesionales} label="Profesionales" />
                    </StaggerItem>
                    <StaggerItem variant="zoomIn">
                        <MetricCounter value={totalEspecialidades} label="Especialidades" />
                    </StaggerItem>
                </StaggerReveal>
            </section>

            {/* ── Valores y Visión ─────────────────────────────────────────────── */}
            <section className="py-32 bg-surface-low">
                <div className="max-w-7xl mx-auto px-8 flex flex-col gap-4">
                    <Reveal variant="fadeUp">
                        <h3 className="text-4xl font-bold text-on-surface text-center">Valores y Visión</h3>
                    </Reveal>
                    <Reveal variant="fadeUp" delay={0.1} className="w-full flex flex-col items-center justify-center mb-12">
                        <span className="text-md w-2/4  text-secondary/80 text-center mb-6">La calidad de nuestra atención se construye sobre principios claros, compromiso profesional y una mirada centrada en cada persona.</span>
                        <div className="h-1.5 w-20 bg-primary"></div>
                    </Reveal>
                    <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1} delayChildren={0.05}>
                        <StaggerItem><VisionCard icon='handshake' title="Relación médico-paciente" description="Construimos vínculos basados en la confianza, el respeto y la cercanía en cada consulta." /></StaggerItem>
                        <StaggerItem><VisionCard icon='sentiment_satisfied_alt' title="Calidez en la atención" description="Brindamos un trato humano y cercano, priorizando la empatía y el bienestar del paciente." /></StaggerItem>
                        <StaggerItem><VisionCard icon='verified' title="Compromiso ético" description="Actuamos con responsabilidad, profesionalismo y respeto en cada decisión médica." /></StaggerItem>
                        <StaggerItem><VisionCard icon='medical_services' title="Más especialidades médicas" description="Buscamos ampliar nuestra oferta para brindar una atención cada vez más completa." /></StaggerItem>
                        <StaggerItem><VisionCard icon='domain' title="Desarrollo de infraestructura" description="Trabajamos para mejorar nuestras instalaciones para ofrecer mayor comodidad y calidad." /></StaggerItem>
                        <StaggerItem><VisionCard icon='monitor_heart' title="Innovación tecnológica" description="Incorporamos herramientas que optimizan procesos y mejoran la atención médica." /></StaggerItem>
                    </StaggerReveal>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────────── */}
            <section className="py-24 bg-surface overflow-hidden" id="contact">
                <div className="max-w-7xl mx-auto px-8">
                    <Reveal variant="zoomIn" amount={0.2}>
                        <div className="group relative rounded-3xl overflow-hidden bg-primary-container p-8 md:p-24 flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-20"></div>
                            <Image src="https://media.consultoriosmedicosdavid.com.ar/silberman1346/pasillo.webp" alt="pasillo" width={1920} height={1080}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                                loading="eager"

                            />
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 relative z-10">
                                Cuidá de tu salud con un equipo médico que te acompaña
                            </h2>
                            <p className="text-white text-lg max-w-2xl mb-12 relative z-10 font-medium">
                                Coordiná tu consulta de forma simple y accedé a una atención cercana, profesional y personalizada.
                            </p>
                            <button onClick={openTurnos} className="bg-primary-fixed text-black px-12 py-5 cursor-pointer rounded-md font-extrabold text-xl shadow-xl hover:scale-105 transition-all duration-300 relative z-10">
                                Solicitar turno
                            </button>
                            <Link className="text-white mt-12 font-semibold hover:underline" href="tel:1147572389">O llamanos al 4757-2389</Link>
                            <p className="text-white/80 text-lg mt-6">Lunes a Viernes de 8 a 19hs - Sábados de 8 a 13hs</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Reseñas ──────────────────────────────────────────────────────── */}
            <section className="py-24 bg-surface-container overflow-hidden">
                <div className="mx-auto px-12">
                    <Reveal variant="fadeUp">
                        <h3 className="text-4xl font-bold text-on-surface text-center mb-12">¿Qué opinan nuestros pacientes?</h3>
                        <div className="w-full flex items-center justify-center mb-12">
                            <div className="h-1.5 w-20 bg-primary"></div>
                        </div>
                    </Reveal>
                    <StaggerReveal
                        className="flex flex-col gap-8 sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-center"
                        staggerDelay={0.12}
                        delayChildren={0.1}
                    >
                        {reviews?.map((review, index) => (
                            <StaggerItem className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full" key={index} variant="fadeUp">
                                <ReviewCard stars={review.rating} nombre={review.author} opinion={review.text} profilePicture={review.profilePhotoUrl} relativePublishTimeDescription={review.relativePublishTimeDescription} />
                            </StaggerItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>
        </main>
    );
}


const MetricCounter = ({ value, label }: { value: string; label: string }) => {
    const { display, ref } = useCountUp({ value, duration: 1600 });
    return (
        <div className="flex flex-col items-center">
            <span ref={ref} className="text-5xl font-bold text-primary mb-2">{display}</span>
            <span className="text-on-surface-variant">{label}</span>
        </div>
    );
};

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

const VisionCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className="p-8 h-full bg-surface-container-low rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center tex-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined !text-3xl text-primary">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3">{title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{description}</p>
        </div>
    )
}

const ReviewCard = ({ stars, nombre, opinion, profilePicture, relativePublishTimeDescription }: { stars: number, nombre: string, opinion: string, profilePicture: string, relativePublishTimeDescription: string }) => {
    return (
        <div className="w-full h-[360px] relative p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: stars }).map((_, index) => (
                    <span key={index} className="material-symbols-outlined text-yellow-500 fill-star">star</span>
                ))}
            </div>
            <p className="text-on-surface-variant flex-1 overflow-hidden line-clamp-8">{opinion}</p>
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-outline-variant/20">
                <img src={profilePicture} alt={nombre} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col items-start">
                    <span className="text-on-surface font-semibold">{nombre}</span>
                    <span className="text-on-surface-variant text-sm">{relativePublishTimeDescription}</span>
                </div>
            </div>
        </div>
    )
}