import style from '../../../styles/Alojamineto/health.module.scss'

export default ()=>
{
    return <div className={style.container}>
        <div 
        className={style.icon}
        style={{backgroundImage:`url(/favicon.ico)`}}></div>
        <div className={style.containerInfo}>
            <p className={style.title}>Medidas de salud y seguridad especiales</p>

            <div className={style.finalInfo}>
                <p>Este alojamiento ha tomado medidas de higiene y salud especiales por que tu seguridad es lo más importante</p>
                <a href="#">Ver info sobre salud y seguridad</a>
            </div>
        </div>
    </div>
}