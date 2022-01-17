import style from '../../../styles/Alojamineto/components/calificationCategory.module.scss'

export default ({data})=>
{
    return <>
    <h6>Categorias:</h6>
    <div className={style.container}>
        {data.map(c=>
            {
                let {name, calification} = c;
                let calificationPercent = calification*10;
                return <div className={style.item}>
                    <p style={{margin:0}}>{name}</p>
                    <div className={style.calification}>
                        <div className={style.calificationBar}>
                        <div className={style.calificationPercent}
                        style={{width:`${calificationPercent}%`}}></div>
                        </div>
                        <p className={style.calificationText}>{calification}</p>
                    </div>
                </div>
            })}
    </div>
    </>
}