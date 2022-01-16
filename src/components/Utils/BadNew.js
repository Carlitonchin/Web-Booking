import style from '../../styles/Utils/badNews.module.scss'

export default ({icon, title, info})=>
{
    return <div className={style.container}>
        <div style={{backgroundImage:`url(${icon})`}}
        className={style.icon}
        ></div>

        <p><span style={{fontWeight:'bold'}}>{title + ": "}</span>{info}</p>
    </div>
}