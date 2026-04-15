'use client';

import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Instagram, LinkedIn, WhatsApp, Mail } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="bg-surface-container-low w-full border-t border-outline-variant/30">
            <div className="flex justify-between items-start gap-16 px-8 py-20 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <p className="text-2xl font-bold text-primary">Consultorios Médicos David</p>
                    <p className="text-on-surface-variant text-base leading-relaxed max-w-xs">Ética profesional al servicio de tu salud.</p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/ConsultoriosMedicosDavid" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/consultoriosmedicosdavid" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                            <Instagram />
                        </a>
                        <a href="https://www.linkedin.com/company/consultorios-medicos-david" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                            <LinkedIn />
                        </a>
                        <a href="https://wa.me/5491135958787" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                            <WhatsApp />
                        </a>
                        <a href="mailto:contacto@consultoriosmedicosdavid.com.ar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                            <Mail />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-on-surface mb-8">Información</h4>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/#aboutUs" className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer">Sobre nosotros</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer">Contacto</Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer">Términos y Condiciones</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer">Política de Privacidad</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-on-surface mb-8">Ubicación</h4>
                    <div className="rounded-xl overflow-hidden h-52 mb-6 border border-outline-variant/30 shadow-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3109936539236!2d-58.54627802426!3d-34.596296672956996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb78ee9f69aab%3A0xac7fcba01d35650a!2sConsultorios%20M%C3%A9dicos%20David!5e0!3m2!1ses-419!2sar!4v1776205289989!5m2!1ses-419!2sar" width="400" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <p className="text-on-surface-variant text-base">
                        Padre Silberman 1346, Santos Lugares
                        <br />
                        3 de Febrero, Provincia de Buenos Aires, Argentina
                    </p>
                </div>
            </div>
            <div className="w-full  flex justify-center border-t border-t-on-surface/10">
                <span className="text-sm text-on-surface/70 my-8"> © 2026 Consultorios Médicos David. Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;