import { Container } from 'react-bootstrap';
import BlueButton from '../Utils/BlueButton';
import style from '../../styles/Search/listHotels.module.scss'
import createArrayOfLength from '../Utils/Functions/createArrayOfLength';
import { Link } from 'react-router-dom';
import { room } from '../../navegacionxsecciones/tipos-de-alojamineto/testing/commentsTest';

export default ({ list }) => {
    return <><h3 className={style.hotelsFinded}>{list.length + " hoteles encontrados"}</h3>
        <div className={style.containerHotels}>
            {list.map(hotel => {
                console.log("hola")
                let { name, stars, location, imgUrl, info, good, bad, price, points, nigths, adults, childs, rooms, since, to } = hotel;
                let textAdults = (adults === 1) ? "adulto" : "adultos";
                let textChilds = (childs === 1) ? "niño" : "niños";
                let textRooms = (rooms === 1) ? "habitación" : "habitaciones";
                let textNights = (nigths === 1) ? "noche" : "noches";


                let date = new Date()

                let m = (date.getMonth() + 1).toString();
                let d = date.getDate().toString();

                let mounth = m.length === 1 ? "0" + m : m;
                let day = d.length === 1 ? "0" + d : d;
                let dateToString = date.getFullYear() + "-" + mounth + "-" + day;

                if(!since)
                    since = dateToString

                if (!to)
                    to = dateToString

                let linkTo = `/hotel?name=${name}&adultCount=${adults}&childCount=${childs}&dateSince=${since}&dateTo=${to}&countRoom=${rooms}`
                return <div className={style.singleHotel}>
                    <div className={style.containerImag}>
                        <a href={linkTo}>
                            <div className={style.backHotel} style={{ backgroundImage: 'url(/img/cancun.jpg)' }}></div>
                        </a>
                    </div>

                    <div className={style.noImage}>
                    <div className={style.centerPosition}>
                        <div>
                            <div className={style.nameAndStars}>
                                
                            <div className={style.name}><a href={linkTo}><h4>{name}</h4></a></div>
                                
                                <div className={style.stars}>
                                    {createArrayOfLength(stars).map(_ => {
                                        return <><i class="bi bi-star-fill"></i></>;
                                    })}

                                </div>
                            </div>
                            <div className={style.location}><a href="#">{location}</a></div>
                        </div>
                        <div className={style.extraInfo}>
                            <div class="text-dark">{info}</div>
                            <div class="text-success">{good}</div>
                            <div class="text-danger">{bad}</div>
                        </div>
                    </div>

                    <div className={style.priceSection}>
                        <div className={style.points}><h6>{points + " puntos"} </h6><div className={style.hand}><i class="bi bi-hand-thumbs-up-fill"></i></div></div>
                        <div className={style.price}>
                            <div className={style.peopleRooms}>
                                {((adults) ? adults + " " + textAdults : "") +
                                    ((childs) ? " y " + childs + " " + textChilds : "")
                                }
                            </div>
                            <div className={style.peopleRooms}>
                                {
                                    ((rooms) ? rooms + " " + textRooms : "") +
                                    ((nigths) ? " por " + nigths + " " + textNights : "")

                                }
                            </div>
                            <h3 class="text-success">{"$" + price}</h3>

                        
                        </div>
                        <a href={linkTo}>
                        <BlueButton text="Ver disponibilidad" />
                        </a>
                    </div>
                    </div>
                </div>

            })}
        </div>
    </>
}