import style from '../../styles/Vuelos/pay.module.scss'
import createArrayOfLength from '../../components/Utils/Functions/createArrayOfLength';
import PersonalDataForm from "../../components/Utils/PersonalDataForm"
import styleFromSingleCar from '../../styles/AlquilerCoches/singleCar.module.scss'
import BlueButton from '../../components/Utils/BlueButton'
import GrayButton from '../../components/Utils/GrayButton'

let count = 3;

export default ()=>
{
    let array = createArrayOfLength(count);

    return <div className={style.container}>
        <h1>Informacion personal</h1>
    {
        array.map(i=>
            {
                return <div style={{marginBottom:'2rem'} } className={styleFromSingleCar.containerPersonalInfo}>
                    <h5 className={style.person}>{"Pasajero " + i}</h5>
                        <PersonalDataForm/>

                        {i==array.length?
                        <div className={styleFromSingleCar.containerButtons} style={{marginTop:'1rem'} }>
                        <div>
                          <BlueButton text="Reservar"/>
                        </div>
          
                        <div>
                          <GrayButton text="Atras"/>
                        </div>
                      </div>
                      :""}
                </div>
            })
    }
    
    </div>
}