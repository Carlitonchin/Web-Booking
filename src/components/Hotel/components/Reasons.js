import style from '../../../styles/Alojamineto/components/reasons.module.scss'

export default ({data})=>
{
    return <div className={style.container}>
        {data.map(reason=>
            {
                let {icon, text} = reason;
                return <div className={style.reason}>
                    <div 
                    className={style.icon}
                    style={{backgroundImage:`url(${icon})`}}
                    ></div>
                    <p style={{fontWeight:'bold'}}>{text}</p>
                </div>
            })}
    </div>
}