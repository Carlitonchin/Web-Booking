import style from '../../../styles/Alojamineto/components/infoBlue.module.scss'

export default ({title, info})=>
{
    return <div className={style.container}>
        {title?<h5>{title}</h5>:""}
        <p>{info}</p>
    </div>
}