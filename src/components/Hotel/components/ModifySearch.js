import style from '../../../styles/Alojamineto/modifySearch.module.scss'
import BlueButton from '../../Utils/BlueButton'
import { getStringFromDate } from '../../Utils/Functions/dateManager'

export default ({since, to, countAdults, countChilds})=>
{
    return <>
    <div className={style.containerDates}>

    <div className={style.date1}>
        <p className={style.title}>Fecha de entrada</p>
        <p className={style.blue}>{getStringFromDate(since)}</p>
        <p className={style.info}>A partir de las 15:00</p>
    </div>

    <div className={style.date}>
        <p className={style.title}>Fecha de salida</p>
        <p className={style.blue}>{getStringFromDate(to)}</p>
        <p className={style.info}>Estancia de 15 noches</p>
    </div>

    </div>

    <div>
       <p className={style.title}>
           {"huéspedes"}
        </p>
        <p className={style.blue}>{countAdults + " adultos"}</p>
        {countChilds? <p className={style.blue}>{countChilds + " niños"}</p> : ""} 
    </div>
<div className={style.button}> 
    <BlueButton text="Modificar búsqueda"/>
    </div>
    </>
}