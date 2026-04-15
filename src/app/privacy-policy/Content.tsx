'use client';

const Content = () => {
    return (
        <div className="max-w-7xl p-32 flex flex-col gap-16">
            <h1 className="text-4xl text-primary font-bold">Política de Privacidad</h1>
            <p>
                En Consultorios Médicos David nos comprometemos a proteger la privacidad, confidencialidad y seguridad de los datos personales de nuestros pacientes, usuarios y visitantes. La presente Política de Privacidad describe el modo en que recopilamos, utilizamos, almacenamos y protegemos la información, de conformidad con la normativa vigente en la República Argentina.
            </p>

            <Container title="1. Responsable del tratamiento">
                <p>
                    El responsable del tratamiento de los datos personales es Consultorios Médicos David, bajo la dirección del Dr. Carlos Eduardo David, con domicilio en Padre Silberman 1346, Santos Lugares, Partido de Tres de Febrero, Provincia de Buenos Aires, Argentina.
                </p>
                <p className="ms-4">
                    <strong>Correo electrónico:</strong> contacto@consultoriosmedicosdavid.com.ar<br />
                    <strong>Teléfono:</strong> 4757-2389<br />
                    <strong>CUIT:</strong> 20-12498773-4
                </p>
            </Container>

            <Container title="2. Alcance de la política">
                <p>
                    La presente Política de Privacidad resulta aplicable al sitio web institucional, así como a los sistemas digitales internos utilizados para la gestión de la actividad médica, incluyendo CMD App (app.consultoriosmedicosdavid.com.ar) y CMD PAMI (pami.consultoriosmedicosdavid.com.ar).
                </p>
                <p>
                    Dichos sistemas se encuentran destinados exclusivamente al uso interno del consultorio y son operados por personal autorizado.
                </p>
            </Container>
            <Container title="3. Datos personales recopilados">

                <p>
                    En el marco de la prestación de servicios médicos y administrativos, podrán recopilarse los siguientes datos personales:
                </p>
                <ul className="ms-12 list-disc">
                    <li>Datos identificatorios: nombre y apellido, DNI</li>
                    <li>Datos personales: fecha de nacimiento, sexo biológico, domicilio</li>
                    <li>Datos de contacto: correo electrónico, número telefónico</li>
                    <li>Datos administrativos: número de afiliado (cuando corresponda)</li>
                    <li>Datos sensibles: información médica, historia clínica, diagnósticos, tratamientos e informes</li>
                    <li>Documentación asociada: archivos, estudios, informes en formato digital</li>
                    <li>Datos técnicos: dirección IP, registros de acceso</li>
                    <li>Cookies técnicas de sesión necesarias para el funcionamiento del sistema</li>
                </ul>
            </Container>

            <Container title="4. Finalidad del tratamiento">
                <p>
                    Los datos personales son tratados con las siguientes finalidades:
                </p>

                <ul className="ms-12 list-disc">
                    <li>Gestión integral de pacientes</li>
                    <li>Registro y seguimiento de consultas médicas</li>
                    <li>Generación, almacenamiento y consulta de informes médicos</li>
                    <li>Comunicación con usuarios del sistema y, eventualmente, pacientes</li>
                    <li>Administración interna del consultorio</li>
                    <li>Garantizar la seguridad y correcto funcionamiento de los sistemas</li>
                </ul>

                <p>
                    El tratamiento de datos se limita estrictamente a las finalidades aquí indicadas y no se utilizará para fines distintos sin el correspondiente consentimiento del titular.
                </p>
            </Container>
            <Container title="5. Acceso a los datos">
                <p>
                    El acceso a la información personal y médica se encuentra restringido exclusivamente a personal autorizado, incluyendo administradores, profesionales médicos y personal administrativo, de acuerdo con sus funciones y responsabilidades dentro del consultorio.
                </p>
                <p>
                    Los pacientes no acceden directamente a los sistemas internos de gestión, siendo la información tratada exclusivamente por el personal habilitado.
                </p>
            </Container>
            <Container title="6. Seguridad de la información">
                <p>
                    Consultorios Médicos David adopta medidas de seguridad técnicas y organizativas adecuadas para proteger los datos personales contra accesos no autorizados, pérdida, alteración o divulgación indebida.
                </p>
                <p>
                    Estas medidas incluyen, entre otras, mecanismos de autenticación, control de accesos basado en roles, uso de cookies seguras para gestión de sesiones y protección de las comunicaciones.
                </p>
            </Container>
            <Container title="7. Conservación de los datos">
                <p>
                    Los datos personales y, en particular, la información médica, serán conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recopilados, así como para dar cumplimiento a obligaciones legales y profesionales.
                </p>
                <p>
                    En el caso de datos vinculados a la historia clínica, los mismos podrán conservarse a largo plazo como parte del registro médico del paciente, incluso cuando ya no se mantenga una relación activa, conforme a las prácticas y normativas aplicables.
                </p>
            </Container>
            <Container title="8. Servicios de terceros">
                <p>
                    Para el funcionamiento del sitio y de los sistemas internos, Consultorios Médicos David puede utilizar servicios provistos por terceros, tales como plataformas de hosting, almacenamiento, envío de correos electrónicos y herramientas tecnológicas.
                </p>

                <p>
                    Entre ellos se incluyen, de manera enunciativa: Vercel, Cloudflare (incluyendo almacenamiento R2), Amazon Web Services (AWS), Resend y Google Drive.
                </p>

                <p>
                    Estos proveedores pueden procesar datos en el marco de la prestación de sus servicios, conforme a sus propias políticas de privacidad y condiciones de uso.
                </p>
            </Container>
            <Container title="9. Cookies">
                <p>
                    El sitio web utiliza exclusivamente cookies técnicas necesarias para el funcionamiento del sistema, particularmente para la gestión de sesiones de usuario. No se emplean cookies con fines publicitarios, de seguimiento o análisis de comportamiento.
                </p>
            </Container>
            <Container title="10. Derechos de los titulares de los datos">
                <p>
                    El titular de los datos personales tiene derecho a acceder a su información, solicitar su rectificación, actualización o supresión, en los términos establecidos por la legislación vigente.
                </p>
                <p>
                    Para ejercer dichos derechos, podrá comunicarse a través de los canales indicados en la presente política.
                </p>
            </Container>
            <Container title="11. Contacto">
                <p>
                    Para consultas relacionadas con la privacidad, tratamiento de datos personales o ejercicio de derechos, el usuario podrá comunicarse a:
                </p>

                <p>
                    contacto@consultoriosmedicosdavid.com.ar<br />
                    Tel: 4757-2389
                </p>
            </Container>
            <Container title="12. Modificaciones">
                <p>
                    Consultorios Médicos David se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento, a fin de adaptarla a cambios normativos, técnicos o operativos.
                </p>
                <p>
                    Las modificaciones entrarán en vigencia desde su publicación en el sitio web.
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