
import createArrayOfLength from '../../components/Utils/Functions/createArrayOfLength';
import style from '../../styles/Alojamineto/headerSingleHotel.scss';

export default ({name, stars, location})=>
{
    return  <div className={style.container}>
    <div><h1>{name}</h1></div>
    <div className={style.stars}>
        {createArrayOfLength(stars).map(_=>
            {
                return <><i className={"bi bi-star-fill"}></i></>;
            })}
       
        </div>
    <div>{location}</div>
    </div>
}