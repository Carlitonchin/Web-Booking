import style from '../../styles/Utils/goodNews.module.scss'

export default ({icon, title, info})=>
{
    return <div className={style.container}>
        <div className={style.row}>
        <div style={{backgroundImage:`url(${icon})`}}
        className={style.icon}
        ></div>

        <p style={{fontWeight:'bold'}}>{title}</p>
        </div>

        <div className={style.row}>
        <div
        className={style.icon}
        ></div>

        <p>{info}</p>
        </div>

    </div>
}