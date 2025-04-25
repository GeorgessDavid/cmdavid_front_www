import { useSpecialties } from "../../hooks/useSpecialties"
import { ItemBox } from "../../components/ItemBox/ItemBox"
import { LoadingPage } from '../LoadingPage/LoadingPage'
import './Especialidades.css'

export const Especialidades = () => {
    let { specialties, loading, progress } = useSpecialties();
    
    return (
        <main>
            {
                loading ?
                    <LoadingPage progress={progress} />
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