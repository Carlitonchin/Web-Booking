import style from '../../../styles/Alojamineto/components/calificationComments.module.scss'

export default ({data})=>
{
    return <div className={style.container}>
        <div className={style.item}>
            <div className={style.calification}>{data.calification}</div>
            <p style={{fontWeight:'bold'}}>{data.textCalificacion}</p>
        </div>

    <div className={style.count}>
        <div className={style.item}>
            <p style={{color:'gray'}}>{data.count + " comentarios"}</p>
        </div>

        <div className={style.item}>
            <a href="#">Leer todos los comentarios</a>
        </div>
        </div>
    </div>
}