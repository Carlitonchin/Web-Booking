import BlueButton from '../../components/Utils/BlueButton';
import style from '../../styles/AtraccionesTuristicas/listTurism.module.scss';

export default ({data, linkTo})=>
{
    return <>
    {data.map(element=>
        {
            let {place, tour, description, price, imgUrl, list} = element;
            if(!list)
                list = [];
           return <div className={style.containerItem}>
               <div className={style.containerImg}>
                <div className={style.img} style={{backgroundImage:`url(${imgUrl})`}}></div>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.place}>{place}</p>
                    <h5 className={style.tour}>{tour}</h5>
                    <p className={style.description}>{description}</p>
                    <div className={style.list}>
                        {list.map(t=>
                            {
                                let {icon, text} = t;
                                return <div className={style.item}>
                                    <div className={style.icon}
                                    style={{backgroundImage:`url(${icon})`}}></div>
                                        <p>{text}</p>
                                </div>
                            })}
                    </div>
                    <div className={style.price}>
                        <h5>{"$"+price}</h5>
                        <a href={`${linkTo}?name=${tour}`}>
                        <BlueButton text="Ver"/>
                        </a>
                    </div>
                </div>
            </div>
        })}
    </>
}