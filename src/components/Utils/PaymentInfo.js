import style from '../../styles/Utils/paymentInfo.module.scss'

let imgUrl = '/img/España.jpg'
let pricePerAdult = 100;
let pricePerChild = 50;

export default ({event, adultCount, childCount, dateSince, dateTo})=>
{
    let textAdult = (childCount !== undefined)?"Adulto":"Persona";
    if(childCount === undefined)
        childCount = 0;
    else
        childCount=Number(childCount)

    let totalPrice = adultCount*pricePerAdult + childCount*pricePerChild;

    return <>
    <div className={style.header}>
        <div className={style.img} style={{backgroundImage:`url(${imgUrl})`}}></div>
        <div className={style.headerInfo}>
            <h5 className={style.title}>{event}</h5>
            <p>{dateSince + (dateTo)?`-${dateTo}`:""}</p>
        </div>
    </div>
    <div className={style.containerPrice}>
        <div className={style.itemPrice}>
        <p>{adultCount + "x " + textAdult}</p>
        <p>{"$" + pricePerAdult*adultCount}</p>
        </div>
        {(childCount !== 0?
          (<div className={style.itemPrice}>
          <p>{childCount + "x ninho" }</p>
          <p>{"$" + pricePerChild*childCount}</p>
          </div>):"")
    }
    </div>
    <div className={style.priceTotal}>
        <h6>Precio total</h6>
        <p>{"$" + totalPrice}</p>
    </div>
    </>
}