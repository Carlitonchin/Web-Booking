import style from '../../styles/Utils/goodNews.module.scss'

export default ({icon, title, info, white})=>
{
    return <div className={style.container + " " + ((white)?style.white:style.green)}>
       
        <div style={{backgroundImage:`url(${icon})`}}
        className={style.icon}
        ></div>

        <div className={style.row}>
        
        <p style={{fontWeight:'bold'}}>{title}</p>
        <p>{info}</p>
        </div>

    </div>
}