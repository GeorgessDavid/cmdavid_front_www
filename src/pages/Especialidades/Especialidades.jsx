import { useSpecialties } from "../../hooks/useSpecialties"
import { ItemBox } from "../../components/ItemBox/ItemBox"
// import { LoadingPage } from '../LoadingPage/LoadingPage'
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import './Especialidades.css'

export const Especialidades = () => {
    let { specialties, loading } = useSpecialties();
    
    return (
        <main>
            {
                loading ?
                    <LoadingScreen />
                    :
                    <main className="specialties_container">

                        <h1>Especialidades</h1>
                        <div>
                            {
                                specialties.map((specialty, index) =>
                                    <ItemBox id={specialty.id} class_name="specialty_itemBox" title={specialty.especialidad} key={index} />
                                )
                            }
                        </div>

                    </main>
            }
        </main>
    )
}