import style from '../../styles/AtraccionesTuristicas/infoTour.module.scss'

export default ({data})=>
{
    return <>
    {data.map(element=>
        {
            let {title, info} = element;
            return <>
            <h5 className={style.title}>{title}</h5>
            <div className={style.containerItems}>
                {info.map(item=>
                    {
                        let {text, iconUrl} = item;
                        return <div className={style.item}>

                            {(iconUrl)?<div className={style.icon} style={{backgroundImage:`url(${iconUrl})`}}></div>:""}
                            <div className={style.textItem}>{text}</div>
                        </div>
                    })}
            </div>
            </>
        })}
    </>
}