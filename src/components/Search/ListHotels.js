import { Container } from 'react-bootstrap';
import style from '../../styles/Search/listHotels.module.scss'

export default ({list})=>
{
    return <><h3>{list.length + " hoteles encontrados"}</h3>
    <div className={style.containerHotels}>
        {list.map(hotel=>
            {
                let {name, stars, location, imgUrl, info, good, bad, price} = hotel;
                return <div className={style.singleHotel}>
                    <div><img src={imgUrl}/></div>
                    <div>
                    <div className={style.nameAndStars}>
                    <div className={style.name}><a href="#"><h4>{name}</h4></a></div>
                    <div>{stars} estrellas</div>
                    </div>
                    <div className={style.location}>{location}</div>

                    <div>
                        <div class="text-dark">{info}</div>
                        <div class="text-success">{good}</div>
                        <div class="text-danger">{bad}</div>
                    </div>
                    </div>

                    <div>
                        {price}
                        <input type="button" value="Hola"/>
                    </div>
                </div>

            })}
    </div>
    </>
}