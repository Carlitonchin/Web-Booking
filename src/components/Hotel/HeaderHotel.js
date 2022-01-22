
import createArrayOfLength from '../../components/Utils/Functions/createArrayOfLength';
import style from '../../styles/Alojamineto/headerSingleHotel.module.scss';
import BlueButton from '../Utils/BlueButton';
import { useState } from 'react';
//svgs


export default ({name, stars, location})=>
{
    const [liked, setLike] = useState(false);

    return  <div className={style.container}>
        <div className={style.top}>
    <div className={style.nameAndStars}>
        <div className={style.labelStars}>
        <div className={style.labelHotel}>hotel</div>
        <div className={style.stars + " " + style.starsMobile}>
        {createArrayOfLength(stars).map(_=>
            {
                return <><i className={"bi bi-star-fill"}></i></>;
            })}
      <div className={style.hand}>  <i className={"bi bi-hand-thumbs-up-fill"}></i></div>
        </div>
        </div>
        <div className={style.containerNameHotel}> 
        <h3 className={style.name}>{name}</h3>
        <div className={style.shareMobile + " " + style.reserve}>
        <i 
            onClick={()=>setLike(!liked)}
            className={(liked?"bi bi-heart-fill":"bi bi-heart")}></i>
                <i className={"bi bi-share-fill"}></i>
        </div>
        </div>
    <div className={style.stars}>
        {createArrayOfLength(stars).map(_=>
            {
                return <><i className={"bi bi-star-fill"}></i></>;
            })}
      <div className={style.hand}>  <i className={"bi bi-hand-thumbs-up-fill"}></i></div>
        </div>
        </div>

            <div className={style.reserve}>
            <i 
            onClick={()=>setLike(!liked)}
            className={(liked?"bi bi-heart-fill":"bi bi-heart")}></i>
                <i className={"bi bi-share-fill"}></i>
                <BlueButton text="Reservar ahora"/>
            </div>

        </div>
    <p className={style.location}><i class="bi bi-geo-alt-fill"></i>{location}</p>
    <div className={style.samePriceContainer}>
    <a className={style.location} href="#">{"Ubicación excelente - Ver mapa"}</a>
    <div className={style.samePrice}>
        <i class="bi bi-shield-fill-check"></i>
        <p>Igualamos el precio</p>
      </div>
    </div>
    </div>
}