import style from '../../styles/Utils/allComments.module.scss';
import  {comments} from '../Hotel/testing/commentsTest'

let calification = 8.1;
let calificationVerbal = "Muy bien"


export default ()=>
{
    return <div className={style.container}>
        <div className={style.top}>
            <h4 className={style.calification}>{calification}</h4>

            <div>
                <p className={style.calificationVerbal}>{calificationVerbal}</p>
                <p className={style.countComments}>{comments.length + " comentarios"}</p>
            </div>
        </div>

        <p className={style.textPresentation}>Lo que más gustó a los clientes:</p>
        <div className={style.containerComments}>
            {comments.map(c=>
                {
                    let {userName, country, imgUrl, text} = c;
                    return <div className={style.singleComment}>
                        <p className={style.textComments}>{text}</p>

                        <div className={style.userInfo}>
                            <div 
                            style = {{backgroundImage:`url(${imgUrl})`}}
                            className={style.img}></div>

                            <div className={style.nameAndCountry}>
                            <p className={style.userName}>{userName}</p>
                            <p className={style.country}>{country}</p>
                            </div>
                        </div>
                    </div>
                })}
        </div>
    </div>
}