import style from '../../styles/Vuelos/listFly.module.scss'
import BlueButton from '../Utils/BlueButton';

import styleItem from '../../styles/Utils/listItem.module.scss'

function Fly({data})
{
    if(!data)
    return <></>
    let {companyName, companyLogo, time1, time2, duration, firstPlace, targetPlace, countScale, nextDay} = data;
    
    let textScala = countScale + " escalas";

    if(!countScale || countScale === 0)
        textScala = "sin escalas";

    else if(countScale === 1)
        textScala = "1 escala";

    return <div className={style.fly}>
        
        <div className={style.company}>
            <div className={style.logo} style={{backgroundImage:`url(${companyLogo})`}}></div>
            <p className={style.companyName}>{companyName}</p>
            </div>
        <div className={style.infoFly}>
            <div className={style.place}>
                <h6>{time1}</h6>
                {firstPlace}
                </div>

            <div className={style.scale}>
                <p>{duration}</p>
                <div className={style.line}>
               
                </div>
               <p>{textScala} </p>
            </div>

            <div className={style.place}>
            <h6>{time2 + (nextDay?" (+1)":"")}</h6>
                {targetPlace}
            </div>
        </div>
    </div>
    
}

export default ({list})=>
{
    return <>
    {list.map(fly=>
        {
            let {go, ret, infoTop, price, companies} = fly;
            return <div className={style.container + " " + styleItem.item}>
                <div className={style.left}>
                <div className={style.leftTop}>
                {infoTop?
                <div className={style.top}>
                    {infoTop.map(info=>
                        {
                            return <div className={style.itemTop}>{info}</div>
                        })}
                </div>
                :""
                }

                <Fly data={go}/>
                <Fly data={ret}/>
                </div>
                <div className={style.leftBottom}>
                    <div className={style.companiesLine}></div>
                    {companies.map(c=>
                        {
                            return (c !== companies[companies.length - 1])? c + " / " : c;
                        })}
                </div>
                </div>

                <div className={style.priceContainer}>
                    <h5 className={style.price}>{"$" + price}</h5>
                    <div className={style.button}>
                        <a href="/vuelos/reservar">
                        <BlueButton text="Ver mas"/>
                        </a>
                        </div>
                    <a href="/vuelos/reservar" className={style.link}>{"Ver mas >>"}</a>
                </div>
                
            </div>
        })}
    </>
}