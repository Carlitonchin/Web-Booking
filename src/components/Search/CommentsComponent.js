import { useState } from "react"
import style from '../../styles/Search/comments.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

let topics = ["Ubicacion", "Gimnasio", "Masaje", "Cama", "Vistas"]

export default ({comments})=>
{

    const [readMore, setReadMore] = useState(null); 
    const [topicsSelected, setTopics] = useState([]);

    function readMoreHandler(comment)
    {
        if(comment == readMore)
        {
            setReadMore(null);
            return;
        }

        setReadMore(comment);
    }

    function handleTopic(t)
    {
        if(!topicsSelected.includes(t))
        {
            setTopics(topicsSelected.concat([t]));
        }

        else
            setTopics(topicsSelected.filter(m=>m!=t));
    }


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };

    return <div className={style.containerComments}>
        <h6>Elige los temas de los comentarios</h6>
        <div className={style.containerTopics}>
            {topics.map(t=>
                {
                    return topicsSelected.includes(t)
                    ? <button
                    onClick={handleTopic.bind(this, t)}
                    class="btn btn-primary" type="button">{t + " -"}</button>
                    :<button
                    onClick={handleTopic.bind(this, t)}
                    type="button" class="btn btn-outline-primary">{t + " +"}</button>
                })}
        </div>
        <h6>Lo que más gustó a otros clientes:</h6>
        <Carousel 
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>
        {comments.map(c=>
            {
                let {userName, imgUrl, country, text} = c;
                let containerSingleComment = style.containerSingleComment;
                if(readMore == c)
                    containerSingleComment += " " + style.containerSingleCommentExpanded;
                return <div className={containerSingleComment}>
                    <div className={style.comment}>
                        <div className={style.headerComment}>
                            <div className={style.profilePicture} style={{backgroundImage:`url(${imgUrl})`}}></div>
                            <div className={style.name_country}>
                                <h4 className={style.name}>{userName}</h4>
                                <h6 className={style.country}>{country}</h6>
                            </div>
                        </div>
                        <div className={style.text}>
                            {
                            ((readMore == c) ? text : text.slice(0,150) )
                            + 
                            ((readMore == c) ? "" : ((text.length>150) ? " ..." : ""))
                            }
                        </div>
                        <p onClick={readMoreHandler.bind(this, c)} className={"link-primary " + style.readMore}>
                            {
                                ((readMore != c && text.length > 150)?"Leer más":"")
                                +
                                ((readMore == c) ? "Leer menos" : "")

                            }
                        </p>
                    </div>
                </div>
            })}
            </Carousel>
            <br/>
            <button type="button" class="btn btn-outline-primary">
                Leer todos los comentarios
                </button>
    </div>
}