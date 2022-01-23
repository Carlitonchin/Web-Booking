import style from '../../../styles/Alojamineto/components/infoLink.module.scss'

export default ({title, info, picture, link})=>
{
    return <div className={style.container}>
        <div className={style.head}>
        <div 
        className={style.icon}
        style={{backgroundImage:`url(${picture})`}}></div>
        <div className={style.containerInfo}>
            <p className={style.title}>{title}</p>

            <div className={style.finalInfo}>
                <p>{info}</p>
                <a href="#">{link}</a>
            </div>
        </div>
        </div>

        <div className={style.finalInfoMobile}>
                <p>{info}</p>
                <a href="#">{link}</a>
            </div>
    </div>
}