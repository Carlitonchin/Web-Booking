import style from '../../../styles/Alojamineto/components/goodPoints.module.scss'

export default ({items})=>
{
    return <>
    <h6>Puntos fuertes del alojamiento</h6>
    <p style={{color:"gray", fontSize:"smaller", fontWeight:"bold"}}>Ideal para estancias de 15 noches</p>
    <div className={style.containerItems}>
    {items.map(item=>
        {
            let {icon, text} = item;
            
            return <div className={style.item}>
                <div
                style={{backgroundImage:`url(${icon})`}}
                className={style.icon}></div>

                <p className={style.itemText}>{text}</p>
            </div>
        })}
    </div>
    </>
}