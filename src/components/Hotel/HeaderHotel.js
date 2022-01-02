
import createArrayOfLength from '../../components/Utils/Functions/createArrayOfLength';
import style from '../../styles/Alojamineto/headerSingleHotel.module.scss';

export default ({name, stars, location})=>
{
    return  <div className={style.container}>
    <div className={style.nameAndStars}>
        <h1 className={style.name}>{name}</h1>
    <div className={style.stars}>
        {createArrayOfLength(stars).map(_=>
            {
                return <><i className={"bi bi-star-fill"}></i></>;
            })}
       
        </div>
        </div>
    <a href="#" className={style.location}>{location}</a>
    </div>
}