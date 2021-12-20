import { useState } from "react"
import style from '../../styles/Search/comments.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function createArrayFrom(startIndex)
{
    let result = [];

    for(let i = startIndex; i < startIndex + 3; i++)
    {
        result.push(i);
    }

    return result;
}


export default ({comments})=>
{
    const [startIndex, setStartIndex] = useState(0);
    let indexes = createArrayFrom(startIndex);

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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return <div className={style.containerComments}>

        <Carousel responsive={responsive}>
        {comments.map(c=>
            {
                let {userName, imgUrl, country, text} = c;
                return <div className={style.containerSingleComment}>
                    <div className={style.comment}>
                        <div className={style.headerComment}>
                            <div className={style.profilePicture} style={{backgroundImage:`url(${imgUrl})`}}></div>
                            <div className={style.name_country}>
                                <h4 className={style.name}>{userName}</h4>
                                <h6 className={style.country}>{country}</h6>
                            </div>
                        </div>
                        <div className={style.text}>
                            {text}
                        </div>
                    </div>
                </div>
            })}
            </Carousel>
    </div>
}