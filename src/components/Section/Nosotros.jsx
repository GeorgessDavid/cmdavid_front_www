import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faLightbulb, faHospital, faUsers, faEye } from '@fortawesome/free-solid-svg-icons';

export const Nosotros = () => {
    return (
        <section id="nosotros" className="section-container">
            <h2>Nosotros</h2>
            <p>
                <h3><FontAwesomeIcon icon={faStethoscope} /> Nuestra Historia</h3>
                Consultorios Médicos David fue fundado en el año 2016, dando continuidad a una extensa trayectoria médica iniciada en la localidad de Sáenz Peña. La elección de Santos Lugares marcó el comienzo de una nueva etapa, con la visión de crear un espacio que combinara experiencia, compromiso y vocación de servicio.                <br />
                <br />
                <h3><FontAwesomeIcon icon={faLightbulb} /> Nuestros Valores</h3>
                Desde el inicio, nos guiamos con tres principios fundamentales:
                <ul>
                    <li>Relación médico-paciente basada en la confianza.</li>
                    <li>Calidez y buen trato en cada consulta.</li>
                    <li>Compromiso ético y humano con cada persona.</li>
                </ul>
                <br />
                <br />
                <h3><FontAwesomeIcon icon={faHospital} /> Nuestro Crecimiento</h3>
                A lo largo de los años, hemos ampliado nuestras instalaciones, sumado especialidades médicas y optimizado nuestros servicios con sistemas informatizados para turnos, estadísticas y gestión de historias clínicas, buscando siempre una atención más eficiente y personalizada.
                <br />
                <br />
                <h3><FontAwesomeIcon icon={faUsers} /> Qué nos diferencia</h3>
                Nos diferenciamos por el trato cercano de nuestro equipo médico y administrativo, que trabaja día a día con responsabilidad y dedicación, priorizando la calidad humana y profesional en cada consulta.
                <br />
                <br />
                <h3><FontAwesomeIcon icon={faEye} /> Nuestra Visión</h3>
                Seguimos creciendo. Nuestro compromiso es:
                <ul>
                    <li>Incorporar más especialidades médicas.</li>
                    <li>Ampliar la infraestructura.</li>
                    <li>Invertir en tecnología que mejore la atención médica.</li>
                </ul>
                En Consultorios Médicos David creemos en una medicina centrada en las personas, con vocación y compromiso.
            </p>
        </section>
    )
}