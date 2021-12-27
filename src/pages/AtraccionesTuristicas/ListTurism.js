import BlueButton from '../../components/Utils/BlueButton';
import style from '../../styles/AtraccionesTuristicas/listTurism.module.scss';

export default ({data})=>
{
    return <>
    {data.map(element=>
        {
            let {place, tour, description, price, imgUrl} = element;

           return <div className={style.containerItem}>
               <div className={style.containerImg}>
                <div className={style.img} style={{backgroundImage:`url(${imgUrl})`}}></div>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.place}>{place}</p>
                    <h5 className={style.tour}>{tour}</h5>
                    <p className={style.description}>{description}</p>

                    <div className={style.price}>
                        <h5>{"$"+price}</h5>
                        <a href={`/turismo/tour?name=${tour}`}>
                        <BlueButton text="Ver"/>
                        </a>
                    </div>
                </div>
            </div>
        })}
    </>
}