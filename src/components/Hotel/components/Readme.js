import style from '../../../styles/Alojamineto/components/readme.module.scss'

function getTime(timeText)
{
    
    let [h,m] = timeText.split(':');
    h = Number(h)
    m = Number(m)

    return h + m/60;
}

function percentTime(timeSince, timeTo)
{
    let since = getTime(timeSince);
    let to_ = getTime(timeTo);

    let interval = to_ - since

    return interval/24*100;
}

let checkin = {
    since:'13:30',
    to:'22:00'
}

let checkout = {
    since:'6:00',
    to:'10:30'
}

let data = 
[
    {
        icon:'/favicon.ico',
        name:'Check-In online diponible',
        info:['En este alojamiento, puedes hacer el check-in online antes de la estancia y ahórrate esperas cuando llegues.']
    },
    {
        icon:'/favicon.ico',
        name:'Cancelacion/Prepago',
        info:['Las condiciones de cancelación y de pago por adelantado pueden varias según el tipo de apartamento.']
    },
    {
        icon:'/favicon.ico',
        name:'Check-In online diponible',
        info:['En este alojamiento, puedes hacer el check-in online antes de la estancia y ahórrate esperas cuando llegues.']
    },
    {
        icon:'/favicon.ico',
        name:'Camas para ninhos',
        info:['Condiciones para estancias con niños',
    'Se pueden alojar niños de cualquier edad.',
    'Los niños a partir de 6 años se considerarán adultos en este alojamiento.',
    'Para ver la información correcta sobre precios y ocupación, añade a la búsqueda el número de niños con los que viajas y sus edades.',
    'Condiciones sobre cunas y camas supletorias',
    'No se pueden añadir cunas en este alojamiento.',
    'No se pueden añadir camas supletorias en este alojamiento.'
]
    },
    {
        icon:'/favicon.ico',
        name:'No hay restricción por edad',
        info:['No hay edad mínima para el check-in']
    },
    {
        icon:'/favicon.ico',
        name:'Pagos mediante Booking.com',
        info:['Booking.com gestiona el pago de tu estancia en nombre del alojamiento, pero asegúrate de llevar efectivo para poder abonar cualquier gasto adicional una vez estés allí.']
    },
    {
        icon:'/favicon.ico',
        name:'Fumadores / No fumadores',
        info:['No se puede fumar.']
    },
    {
        icon:'/favicon.ico',
        name:'Horario sin ruido',
        info:['Los clientes deben minimizar el ruido de 00:00 a 08:00']
    }
]

export default ()=>
{
    let leftSince = getTime(checkin.since)/24*100;
    let rangeSince = percentTime(checkin.since, checkin.to);

    let leftTo = getTime(checkout.since)/24*100;
    let rangeTo = percentTime(checkout.since, checkout.to);

    return <>
    <p className={style.presentation}>
    Apartment Luxury Palace No1 acepta peticiones especiales. Añádelas en el siguiente paso!
    </p>

    <div className={style.box}>
        <div className={style.row}>
    <div className={style.left}>
        <div className={style.icon}
        style={{backgroundImage:`url(/favicon.ico)`}}></div>
        <p>Entrada</p>
    </div>

    <div className={style.right}>
        <div className={style.containerBarTime}>
            <p 
            style={{left:`${leftSince}%`}}
            className={style.timeText}>{checkin.since}</p>
            <p 
            style={{left:`${leftSince+rangeSince}%`}}
            className={style.timeText}>{checkin.to}</p>
            <div 
            style={{left:`${leftSince}%`,
                    width:`${rangeSince}%`}}
            className={style.barTime}>

            </div>
        </div>
    </div>
    </div>
<div className={style.row + " " + style.rowAclaration}>
    <div className={style.left}></div>
    <div className={style.right}>
    <p className={style.aclaration}>Tienes que decirle al alojamiento con antelación a qué hora vas a llegar.</p>
    </div>
</div>
    <div className={style.row}>
    <div className={style.left}>
        <div className={style.icon}
        style={{backgroundImage:`url(/favicon.ico)`}}></div>
        <p>Salida</p>
    </div>

    <div className={style.right}>
        <div className={style.containerBarTime}>
            <p className={style.timeText}
            style={{left:`${leftTo}%`}}>{checkout.since}</p>
            <p className={style.timeText}
            style={{left:`${rangeTo+leftTo}%`}}>{checkout.to}</p>
            <div 
            style={{left:`${leftTo}%`,
                    width:`${rangeTo}%`}}
            className={style.barTime}>

            </div>
        </div>
    </div>
    </div>

    {
        data.map(item=>{
            let {icon, name, info} = item;
            return <div className={style.row + " " + style.rowNoTime}>
                <div className={style.left}>
        <div className={style.icon}
        style={{backgroundImage:`url(${icon})`}}></div>
        <p>{name}</p>
    </div>

    <div className={style.right}>
        {info.map(sentence=>
            {
                return <p className={style.sentence}>{sentence}</p>
            })}
    </div>
            </div>
        }
            )
    }

    </div>
    </>
}