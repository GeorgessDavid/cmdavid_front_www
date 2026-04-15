const Content = () => {
    return (
        <div className="max-w-7xl p-32 flex flex-col gap-8">
            <h1 className="text-4xl font-bold mb-8 text-primary">Términos y Condiciones</h1>
            <Container title="1. Aceptación">
                <p>
                    El acceso, navegación y uso del sitio web de Consultorios Médicos David implica el conocimiento y la aceptación de los presentes Términos y Condiciones por parte del usuario. En caso de no estar de acuerdo con alguno de los puntos aquí establecidos, se recomienda abstenerse de utilizar este sitio y sus canales de contacto asociados.
                </p>
                <p>
                    La utilización de este sitio se encuentra sujeta a la normativa aplicable en la República Argentina, así como a las disposiciones particulares que el consultorio pueda establecer para la correcta prestación de sus servicios.
                </p>
            </Container>

            <Container title="2. Objeto">
                <p>
                    El presente sitio web tiene carácter informativo e institucional. Su finalidad es brindar información general sobre Consultorios Médicos David, sus servicios, especialidades, estudios, equipo profesional y medios de contacto disponibles.
                </p>
                <p>
                    Asimismo, el sitio puede facilitar la comunicación con el consultorio mediante enlaces o accesos a plataformas externas, como WhatsApp, a fin de que los usuarios puedan realizar consultas generales o solicitar turnos de atención.
                </p>
            </Container>

            <Container title="3. Naturaleza del servicio">
                <p>
                    La información publicada en este sitio tiene un fin exclusivamente orientativo e informativo. En ningún caso deberá interpretarse como sustituto de una consulta médica profesional, diagnóstico, indicación terapéutica o tratamiento clínico.
                </p>
                <p>
                    Las decisiones relacionadas con la salud de cada paciente deben ser evaluadas por profesionales habilitados en el contexto de una consulta médica formal. Ante una urgencia o emergencia médica, el usuario no deberá depender de este sitio web ni de sus formularios o canales de contacto digitales como medio exclusivo de asistencia.
                </p>
            </Container>
            <Container title="4. Solicitud de Turnos">
                <p>
                    Los mecanismos de contacto y solicitud de turnos disponibles a través del sitio web o de plataformas externas vinculadas tienen por objeto facilitar la comunicación inicial con el consultorio. Toda solicitud se encuentra sujeta a disponibilidad, evaluación y confirmación por parte del personal autorizado.
                </p>
                <p>
                    El envío de una consulta, mensaje o solicitud de turno no implica, por sí mismo, la asignación automática de una atención, ni garantiza fecha, horario o profesional específico hasta tanto exista confirmación expresa por parte del consultorio.
                </p>
            </Container>
            <Container title="5. Uso del sitio">
                <p>
                    El usuario se compromete a utilizar el sitio web de manera lícita, responsable y de buena fe, absteniéndose de realizar actos que puedan afectar su funcionamiento, seguridad, disponibilidad o integridad.
                </p>
                <p>
                    Asimismo, cuando el sitio permita el envío de datos de contacto o consultas, el usuario deberá proporcionar información veraz, actualizada y suficiente para posibilitar una adecuada gestión de su solicitud. Queda prohibido el uso del sitio para fines fraudulentos, engañosos, abusivos o contrarios a la normativa vigente.
                </p>

            </Container>
            <Container title="6. Limitación de responsabilidad">
                <p>
                    Consultorios Médicos David realiza esfuerzos razonables para mantener actualizada la información publicada y asegurar el correcto funcionamiento del sitio. Sin perjuicio de ello, no garantiza la disponibilidad permanente e ininterrumpida del servicio, ni la ausencia absoluta de errores técnicos, interrupciones, demoras, fallas de conectividad o contingencias ajenas a su control.
                </p>
                <p>
                    En consecuencia, el consultorio no será responsable por daños o perjuicios derivados del uso o imposibilidad de uso del sitio web, cuando ello responda a causas técnicas, eventos externos, mantenimiento, fallas de terceros proveedores o situaciones no imputables de manera directa al consultorio.
                </p>
            </Container>
            <Container title="7. Servicios de terceros">
                <p>
                    El sitio web puede contener enlaces, accesos o integraciones con servicios prestados por terceros, tales como plataformas de mensajería, mapas, herramientas tecnológicas o servicios de infraestructura digital. El uso de dichos servicios se encuentra sujeto a los términos, condiciones y políticas de privacidad propias de cada proveedor.
                </p>
                <p>
                    Consultorios Médicos David no controla ni asume responsabilidad por el contenido, funcionamiento, disponibilidad o prácticas de tales servicios externos, sin perjuicio de utilizarlos como apoyo para la operación de sus canales digitales.
                </p>

            </Container>
            <Container title="8. Propiedad intelectual">
                <p>
                    Todos los contenidos del sitio web, incluyendo de manera enunciativa pero no limitativa textos, imágenes, logotipos, diseños, estructuras, elementos gráficos, marcas, nombres comerciales y demás materiales, son de titularidad de Consultorios Médicos David o se utilizan con la debida autorización.
                </p>
                <p>
                    Queda prohibida su reproducción, distribución, modificación, publicación, transmisión o utilización total o parcial sin autorización previa y expresa, salvo en los casos permitidos por la legislación aplicable.
                </p>
            </Container>
            <Container title="9. Protección de datos personales">
                <p>
                    El tratamiento de los datos personales eventualmente recopilados a través del sitio web o de los sistemas vinculados se rige por lo dispuesto en la Política de Privacidad de Consultorios Médicos David, la cual forma parte complementaria de estos Términos y Condiciones.
                </p>
                <p>
                    Se recomienda al usuario leer detenidamente dicha política a fin de conocer el modo en que se recopila, utiliza, almacena y protege la información proporcionada.
                </p>
            </Container>
            <Container title="10. Modificaciones">
                <p>
                    Consultorios Médicos David se reserva el derecho de modificar, actualizar o reemplazar en cualquier momento los presentes Términos y Condiciones, con el objeto de adaptarlos a cambios normativos, operativos, tecnológicos o institucionales.
                </p>
                <p>
                    Las modificaciones entrarán en vigencia desde su publicación en el sitio web, por lo que se recomienda al usuario revisar periódicamente esta sección.
                </p>
            </Container>
            <Container title="11. Legislación aplicable y jurisdicción">
                <p>
                    Los presentes Términos y Condiciones se regirán e interpretarán de conformidad con la legislación vigente en la República Argentina.
                </p>
                <p>
                    Para cualquier controversia derivada del acceso o uso del sitio web, las partes se someterán a la jurisdicción de los tribunales ordinarios competentes que correspondan, con exclusión de cualquier otro fuero o jurisdicción que pudiera resultar aplicable.
                </p>
            </Container>
        </div>
    )
}

const Container = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold border-b-2 border-on-surface/20 pb-2 mb-4">{title}</h2>
            {children}
        </div>
    )
}

export default Content;