import { useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import style from '../../styles/AtraccionesTuristicas/tab.module.scss'

export default ({data})=>
{
    let continentes = Object.keys(data);
    let [currentContinent, setContinent] = useState(continentes[0]);

    function clickTab(c)
    {
        if(c == currentContinent)
            return;

        setContinent(c);
    }

    return <div className={style.container}>
    <div className={style.tabContainer}>
        {continentes.map(c=>
            {
                return <div
                 className={style.tab + " " + ((currentContinent == c)?style.tabSelected:"")}
                 onClick={clickTab.bind(this, c)}
                 >
                    <h6>{c}</h6>
                </div>
            })}
    </div>
    <div className={style.containerImages}>
        {data[currentContinent].map(element=>
            {
                let {text, img, toDo} = element;
                console.log(text);
                return <div className={style.containerImg}>
                     <div className={style.img} style={{backgroundImage:`url(${img})`}}></div>
                     <div className={style.containerText}><h6>{text}</h6>
                     <div className={style.toDo}>{toDo}</div></div>
                     </div>
            })}
    </div>
    </div>
}