'use client';

export const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-surface z-1000">
            <div className="flex flex-col items-center justify-center h-full">
                <span className='text-primary text-7xl animate-pulse'>Cargando...</span>
                <span className='text-on-surface text-6xl'>Por favor, espere un momento.</span>
            </div>
        </div>
    )
}