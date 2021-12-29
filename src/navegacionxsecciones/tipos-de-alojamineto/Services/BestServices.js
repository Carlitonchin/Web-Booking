import style from '../../../styles/Alojamineto/bestServices.module.scss'

export default ({services})=>
{
    return <>
    <h6 className={style.title}>Servicios más populares</h6>
    <div className={style.container}>
        {services.map(s=>
            {
                let {icon, text} = s;
                console.log(icon)
                return <div className={style.iconText}>
                    <div  
                    style={{backgroundImage:`url(${icon})`}} className={style.icon}
                    ></div>
                    {text}
                    </div>
            })}
    </div>
    </>
}