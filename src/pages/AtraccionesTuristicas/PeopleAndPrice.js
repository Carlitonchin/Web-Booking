import { useState } from "react"
import BlueButton from "../../components/Utils/BlueButton";
import style from '../../styles/AtraccionesTuristicas/PeopleAndPrice.module.scss'
import '../../styles/Utils/pGray.scss'


export default ({name, info, adultPrice, rangeAdult, childPrice, rangeChild})=>
{
    let [adultCount, setAdult] = useState(1);
    let [childCount, setChild] = useState(0);

    let priceForAdults = adultCount*adultPrice;
    let priceForChilds = childCount*childPrice;
    let totalPrice = priceForAdults + priceForChilds;

    function handleCountAdults(operation)
{
    if(operation == '-' && adultCount == 1)
        return;

    if(operation == '-')
    {
        setAdult(adultCount - 1);
        return;
    }

    setAdult(adultCount + 1);
}

function handleChildCount(operation)
{
    if(operation == '-' && childCount == 0)
        return;

        if(operation == '-')
        {
            setChild(childCount - 1);
            return;
        }

        setChild(childCount + 1);
}

    return <div className={style.container}> 
    <div>
        <h6>{name}</h6>
        {info.map(element=>
        {
            let {iconUrl, text} = element;
            return <div className={style.containerItem}>
                <div className={style.icon} style={{backgroundImage:`url(${iconUrl})`}}></div>
                <p>{text}</p>
            </div>
        })}
</div>
<div>
        <h6>Cuantos tickets</h6>
        <div className={style.select}>
            <div>
            <p>Adulto</p>
            <p>{"$" + priceForAdults }</p>
            </div>

            <div className={style.plusMinus}>
          
            <div className={style.minus + " btn"}
            onClick={handleCountAdults.bind(this, '-')}
            >-</div>

            <p>{adultCount}</p>
            
        <div className={style.plus + " btn"}
            onClick={handleCountAdults.bind(this, '+')}
            >+</div>
            </div>

        </div>

        <div className={style.select}>
            <div>
            <p>Ninho</p>
            <p>{"$" + priceForChilds }</p>
            </div>

            <div className={style.plusMinus}>
           
            <div className={style.minus+ " btn"}
            onClick={handleChildCount.bind(this, '-')}
            >-</div>

            <p>{childCount}</p>
            
             <div className={style.plus+ " btn"}
            onClick={handleChildCount.bind(this, '+')}
            >+</div>
            </div>
        </div>
        </div>

        <div className={style.totalPriceContainer}>
            <div>
                <p>{"Precio Total $"+totalPrice}</p>
            </div>
            <div>
                <BlueButton text="siguiente" 
                link={`/pagar?event=${name}`}/>
            </div>
        </div>
    </div>
}