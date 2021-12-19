import { useState } from "react"
import style from '../../styles/Search/comments.module.scss'

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

    return <div className={style.containerComments}>
        {indexes.map(i=>
            {
                if(i > comments.length - 1)
                    return <></>;

                let {userName, imgUrl, country, text} = comments[i];
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
    </div>
}