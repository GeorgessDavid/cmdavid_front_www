import { useMedicalProcedures } from '../../hooks/useMedicalProcedures';
import { ItemBox } from '../../components/ItemBox/ItemBox';
// import { LoadingPage } from '../LoadingPage/LoadingPage';
import './Estudios.css'
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";


export const Estudios = () => {
    const { medicalProcedures, loading } = useMedicalProcedures();

    if (loading) {
        return (
            <>
                <LoadingScreen/>
            </>
        )
    }
    return (
        <main className="procedure_container">

            <h1>Estudios</h1>
            <div>
                {
                    medicalProcedures.map((procedure, index) =>
                        <ItemBox id={procedure.id} class_name="procedure_itemBox" title={procedure.practicaMedica} key={index} />
                    )
                }
            </div>

        </main>

    )
}
