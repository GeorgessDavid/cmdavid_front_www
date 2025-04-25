import { useMedicalProcedures } from '../../hooks/useMedicalProcedures';
import { ItemBox } from '../../components/ItemBox/ItemBox';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import './Estudios.css'

export const Estudios = () => {
    const { medicalProcedures, loading, progress } = useMedicalProcedures();

    if (loading) {
        return (
            <>
                <LoadingPage progress={progress} />
            </>
        )
    }
    return (
        <section className="procedure_container">

            <h1>Estudios</h1>
            <div>
                {
                    medicalProcedures.map((procedure, index) =>
                        <ItemBox id={procedure.id} class_name="procedure_itemBox" title={procedure.practicaMedica} key={index} />
                    )
                }
            </div>

        </section>

    )
}
