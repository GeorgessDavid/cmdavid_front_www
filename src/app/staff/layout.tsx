export const metadata = {
    title: 'Equipo Médico - Consultorios Médicos David',
    description: 'Conocé a nuestro equipo médico',
}

export default function StaffLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">{children}</div>
    )
}
