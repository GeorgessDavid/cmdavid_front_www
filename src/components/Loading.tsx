'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from 'next-themes';

export const LoadingPage = () => {
    const { theme } = useTheme();
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-surface z-1000">
            <div className="flex flex-col items-center justify-center h-full">
                <DotLottieReact
                    src={theme === 'dark' ? '/animacion_dark.json' : '/animacion_light.json'}
                    loop
                    autoplay
                    style={{ width: '40rem', height: '40rem' }}
                />
                <span className='text-primary text-7xl animate-pulse'>Cargando...</span>
                <span className='text-on-surface text-6xl'>Por favor, espere un momento.</span>
            </div>
        </div>
    )
}

export const LoadingComponent = () => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <DotLottieReact
                src={theme === 'dark' ? '/animacion_dark.json' : '/animacion_light.json'}
                loop
                autoplay
                style={{ width: '230px', height: '230px' }}
            />
            <span className='text-primary text-3xl font-bold animate-bounce'>Cargando...</span>
            <span className='text-on-surface text-xl'>Por favor, espere un momento.</span>
        </div>
    )
}