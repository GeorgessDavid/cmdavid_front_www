'use client';
import Logo from '@/components/Logo'
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const Header = () => {
    const [resolvedTheme, setResolvedTheme] = useState<string>('dark');
    const { resolvedTheme: nextResolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        setResolvedTheme(nextResolvedTheme || 'dark');
    }, [nextResolvedTheme]);

    const hrefPrestadores = () => {
        window.open('https://app.consultoriosmedicosdavid.com.ar', '_blank')
    }

    return (
        <header
            className="sticky top-0 w-full z-50 bg-surface/70 backdrop-blur-xl transition-all duration-300 shadow-md shadow-(color:--primary)/20"
        >
            <nav className="flex justify-between items-center px-8 py-4 w-full mx-auto">
                <div className="text-2xl font-bold tracking-tight text-(--logo-text-primary)  font-ubuntu flex items-center gap-2">
                    <Logo color={resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)'} height='50' width='50' />
                    Consultorios Médicos David
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-primary border-b-2 border-primary pb-1 font-medium transition-all duration-300"
                        href="/#home">Inicio</a>
                    <a className="text-on-surface-variant hover:text-primary font-medium transition-all duration-300"
                        href="/#specialties">Especialidades</a>
                    <a className="text-on-surface-variant hover:text-primary font-medium transition-all duration-300" href="#">Equipo
                        Médico</a>
                    <a className="text-on-surface-variant hover:text-primary font-medium transition-all duration-300"
                        href="#">Estudios</a>
                </div>
                <div className="flex items-center gap-2">
                    <Tooltip title={resolvedTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'} placement="bottom" arrow>
                        <button
                            onClick={toggleTheme}
                            className="text-on-surface-variant px-6 py-2.5 rounded-md font-semibold text-sm hover:scale-95 active:scale-90 transition-all duration-200 cursor-pointer">
                            {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        </button>
                    </Tooltip>
                    <button
                        onClick={hrefPrestadores}
                        className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-semibold text-sm hover:scale-95 active:scale-90 transition-all duration-200 cursor-pointer">
                        Prestadores <ArrowOutwardIcon />
                    </button>
                </div>
            </nav>
        </header>
    );
}