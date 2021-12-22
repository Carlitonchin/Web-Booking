import style from '../../../styles/Alojamineto/blackServices.module.scss'

export default ({services})=>
{
    return services.map(s=>
        {
            let {name, icon, list} = s;
            return <div className={style.container}>
                <div className={style.header}>
                    <div className={style.icon}
                    style={{backgroundImage:`url(${icon})`}}></div>
                    <h6 className={style.name}>{name}</h6>
                </div>
                <div className={style.list}> 
                {list.map(element=>
                    {
                        return <div className={style.blackService}>
                        <i class="bi bi-check"></i>
                        {element}
                    </div>
                    })}
                    
                </div>
            </div>
        });
}