import style from '../../../styles/Alojamineto/components/singleRoom.module.scss'
import CarouselRooms from '../../Utils/CarouselRooms'

let pictures = ["../img/playa.jpg", "../img/playa.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg"]

let data=
{
    size:"20 m2",
    bestThings:
    [
        {text:"20 m2", icon:"/assets/metraje.svg"},
        {text:"Vistas a la ciudad", icon:"/assets/ciudad.svg"},
        {text:"Aire acondicionado", icon:"/assets/ok.svg"},
        {text:"Baño en la habitacion", icon:"/assets/bano.svg"},
        {text:"TV pantalla plana", icon:"/assets/soporte.svg"},
        {text:"Minibar", icon:"/assets/mini_bar.svg"},
        {text:"Wifi gratis", icon:"/assets/wifii.svg"},
        {text:"Parking gratuito", icon:"/assets/parking.svg"},
    ]
    ,
    extraInfo:["Camas comodas: 8, segun 70 comentarios", "Habitacion con aire acondicionado"],
    details:
    [
        {
            name:"En el baño privado",
            items:["Articulos de aseo gratis", "WC", "Bañera o ducha", "Toallas", "Secador de pelo", "Papel Higienico"]
        },
        {
            name:"Vista a",
            items:["Vista a la ciudad"]
        },
        {
            name:"Equipamiento en la habitacion",
            items:["Articulos de aseo gratis", "WC", "Bañera o ducha", "Toallas", "Secador de pelo", "Papel Higienico",
            "Articulos de aseo gratis", "WC", "Bañera o ducha", "Toallas", "Secador de pelo", "Papel Higienico"]
        }
    ]
}

function Margin()
{
    return <div style={{marginBottom:'1rem'}}></div>
}

function twoParts(array)
{
    if(array.length < 4)
        return [array]

    let result = []
    result.push(array.slice(0, array.length/2))
    result.push(array.slice(array.length/2, array.length))
    return result
}

export default ({room, handleExpanded})=>
{
    let {size, extraInfo, details, bestThings} = data;
    console.log(twoParts(details[0].items))
    return <div className={style.container}>
<i 
onClick={handleExpanded}
className={"bi bi-x-circle-fill " + style.close}></i>
        <div className={style.containerCarousel}>
        <CarouselRooms data={pictures}/>
        </div>
        
        <div className={style.containerInfo}>
            <h4>{room.title}</h4>
            <Margin/>
            <div className={style.containerBest}>
                {
                    bestThings.map(item=>
                    <p className={style.itemBest}>
                        {item.text}
                        <img 
                        src={item.icon}
                        className={style.icon}></img>
                    </p>)
                }
            </div>
            <Margin/>
            <p>
                <span style={{fontWeight:'bold'}}>{"Tamaño de la habitacion: "}</span>
                {size}</p>

            <Margin/>
            {extraInfo.map(item=>
            <>
            <p>{item}</p>
            <Margin/>
            </>)}

            {
                details.map(detail=>
                    {
                        let {name, items} = detail;
                        let parts=twoParts(items)
                        return <>
                        <p style={{fontWeight:'bold'}}>{name}</p>
                        <div className={parts.length<2?style.oneRow:style.twoRows}>
                           {parts.map(row=>
                                    <div className={style.row}>
                                        {row.map(e=><p><i class="bi bi-check"></i>{e}</p>)}
                                    </div>
                                    )}
                        </div>
                        <Margin/>
                        </>
                    })
            }
        </div>

    </div>
}