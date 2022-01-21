import style from '../../../styles/Alojamineto/components/finalLinks.module.scss'

let data = 
[
    [{text:"Paises", url:"#"},{text:"Paises", url:"#"},{text:"Paises", url:"#"},{text:"Paises", url:"#"},{text:"Paises", url:"#"}],
    [{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"},{text:"Hostales y pensiones ", url:"#"}],
    [{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"},{text:"Artículos ", url:"#"}],
    [{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"},{text:"Reservas en restaurantes", url:"#"}],
    [{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"},{text:"Sobre Booking.com", url:"#"}]
]

export default ()=>
{
    return <div className={style.container}>
        {data.map(array=><div className={style.column}>
            {array.map(link=><a href={link.url}>{link.text}</a>)}
        </div>)}
    </div>
}