
import style from '../../styles/Alojamineto/singleHotel.module.scss'
import HeaderHotel from './HeaderHotel';
import BlueButton from '../../components/Utils/BlueButton';
import ContainerImages from '../../components/Utils/ContainerImages';
import GrayButton from '../../components/Utils/GrayButton';
import CommentsComponent from '../../components/Search/CommentsComponent';
import { comments, bestServices, blackServices, room, listInfo } from '../Hotel/testing/commentsTest'; // borrar luego
import BestServices from './Services/BestServices';
import BlackServices from './Services/BlackServices';
import FinalInfo from '../../components/Search/FinalInfo';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { getDateFromString, getStringFromDate } from '../../components/Utils/Functions/dateManager';
import picturesManager from '../../components/Utils/Functions/picturesManager';
import AllPictures from '../Utils/AllPictures';
import Description from './components/Description';
import GoodPoints from './components/GoodPoints';
import ReserveData from './components/ReserveData';
import ModifySearch from './components/ModifySearch';
import BadNew from '../Utils/BadNew';
import GoodNew from '../Utils/GoodNew';
import Health from './components/InfoLink';
import Beach from './components/Beach';
import Reasons from './components/Reasons';
import CalificationComments from './components/CalificationComments';
import CalificationCategory from './components/CalificationCategory';
import QandA from './components/QandA';
import Hostess from './components/Hostess';
import InfoLink from './components/InfoLink';
import Around from './components/Around';
import Readme from './components/Readme';
import InfoBlue from './components/InfoBlue';
import FrequentQuestions from './components/FrequentQuestions';
import PopularPlaces from './components/PopularPlaces';
import Subscribe from './components/Subscribe';
import FinalLinks from './components/FinalLinks';
import styleScroll from '../../styles/Utils/notScroll.module.scss'
import SearchHotelsComponent from './SearchHotelsComponent';
import CarouselHotelImages from './components/CarouselHotelImages';
import Rooms from './components/Rooms';

const textDescription = `¡Puedes conseguir un descuento Genius en Faraona Grand Hotel! Para ahorrar en este alojamiento, solo tienes que iniciar sesión.
Alberga un restaurante. El establecimiento Grand está ubicado en el distrito histórico de Miraﬂores, a 100 metros del parque Kennedy, y ofrece habitaciones acogedoras con baño reformado. Se sirve el desayuno. Hay WiFi gratuita.
Todas las habitaciones del establecimiento Faraona Grand Hotel disponen de ventanas insonorizadas y TV de pantalla plana.
Se sirve un desayuno continental con zumo natural, fruta tropical y cruasanes. El restaurante ofrece platos de la cocina
regional. Los cócteles exóticos del bar pueden tomarse en una terraza jardín con encanto.
El establecimiento Faraona Grand Hotel proporciona un servicio de enlace con el aeropuerto y un servicio de alquiler de
coches por un suplemento. Hay aparcamiento gratuito y consigna de equipaje. El personal del mostrador de información
turística del hotel puede ayudar a los huéspedes con la organización de excursiones por Lima, Cuzco y otras ciudades
peruanas.
El aeropuerto Jorge Chávez queda a 15 km. El centro de Lima está a 25 minutos en coche. Algunos lugares de interés
cercanos son el Mercado Indio y el centro comercial Larcomar.
`

const goodPoints = [
  {
    icon: '/assets/sea.svg',
    text: "Ubicacion fantastica"
  },
  {
    icon: '/assets/arbol2.svg',
    text: "Comodidad para tus vacaciones"
  },
  {
    icon: '/assets/ciudad.svg',
    text: "Barrio tranquilo"
  },
  {
    icon: '/assets/caminar.svg',
    text: "Empieza el dia con buen pie"
  },
  {
    icon: '/assets/parking.svg',
    text: "Muevete a tu aire"
  }
]

let beaches = [

  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  },
  {
    picture: "/img/unnamed.jpg",
    name: "Playa Varadero",
    calification: "7.6 Buena Playa",
    distance: "A 900m del alojamiento"
  }

]

let reasons = [
  {
    icon: '/assets/billet.svg',
    text: "Precios Imbatibles"
  },
  {
    icon: '/assets/candado2.svg',
    text: "Una reserva segura"
  },
  {
    icon: '/assets/setting.svg',
    text: "Gestiona tus reservas online"
  },
  {
    icon: '/assets/mensaje.svg',
    text: "El personal habla español"
  }
]

let calificationsComments=
{
  calification:8.6,
  textCalificacion:"Fabuloso",
  count:845
}

let calificationCategory=
[
  {
    name:"Ubicacion",
    calification:9.3
  },
  {
    name:"Personal",
    calification:7
  },
  {
    name:"Limpieza",
    calification:7.9
  },
  {
    name:"Confort",
    calification:8
  },
  {
    name:"Confort",
    calification:8
  },
  {
    name:"Confort",
    calification:8
  },
  {
    name:"Confort",
    calification:8
  },
  {
    name:"Relacion Calidad-Precio",
    calification:10
  }
]

export default () => {

  //borrar luego ......................
  let pictures = ["../img/playa.jpg", "../img/playa.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg"]

  let location = "Calle Manuel Bonilla 185 - Miraﬂores, Miraﬂores, Lima 01, Perú -";
  let stars = 3;

  let { search } = useLocation()
  let query = new URLSearchParams(search);

  let name = query.get("name");
  let adultCount = query.get("adultCount");
  let childCount = query.get("childCount");
  let dateSince = query.get("dateSince");
  let dateTo = query.get("dateTo");
  let countRooms = query.get("countRoom");

  if (!name || !adultCount || !childCount || !dateSince || !dateTo || !countRooms)
    return <h1>Not found</h1>

  const [adults, setAdults] = useState(Number(adultCount))
  const [childs, setChilds] = useState(Number(childCount))
  const [since, setSince] = useState(getDateFromString(dateSince))
  const [to, setTo] = useState(getDateFromString(dateTo))
  const [cRooms, setRooms] = useState(Number(countRooms))
  const [place, setPlace] = useState("")
  const [imageExpanded, setImageExpanded] = useState(false);
  const [roomsExpanded, setRoomsExpanded] = useState({expanded:false, room : null})

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
});

useEffect(() =>{
  const handleResize = () => {

     setSize({
         width: window.innerWidth,
         height: window.innerHeight,
     });
  };

  window.addEventListener("resize",handleResize);
  window.onload = ()=>setSize({  width: window.innerWidth,
    height: window.innerHeight,})

  return () => window.removeEventListener("resize", handleResize)
},[])


  function handleImageExpanded() {

    setImageExpanded(!imageExpanded);
  }

  function handleRoomsExpanded(room)
  {
  setRoomsExpanded(
    {
      expanded:!roomsExpanded.expanded,
      room:room
    })
  }

  useEffect(() => {
    let html = document.getElementsByTagName("html")[0];
    if(imageExpanded)
      html.className += " " + styleScroll.notScroll;

    else if(roomsExpanded.expanded)
      html.className += " " + styleScroll.notScrollStrong;

    else
    {
      html.classList.remove(styleScroll.notScrollStrong)
      html.classList.remove(styleScroll.notScroll)
    }
    
  })


  if (isNaN(adults) || isNaN(childs) || isNaN(cRooms))
    return <h1>Not found</h1>

  if (!name)
    return <h1>Not found</h1>

  let linkTo = `/pagar?event=${name}&adultCount=${adults}&childCount=${childs}&dateSince=${getStringFromDate(since)}&dateTo=${getStringFromDate(to)}`

  //.......................................... .........
  return <div className={style.container}>
    <div className={style.top}>
      <div className={style.leftTop}>
      <SearchHotelsComponent 
        adults={adults}
        childs={childs}
        endDate={to}
        rooms = {cRooms}
        setAdults={setAdults}
        setChilds={setChilds}
        setEndDate={setTo}
        setRooms={setRooms}
        setStartDate={setSince}
        startDate={since}
        value={place}
        setValue={setPlace}
        />

        <div className={style.map}>
          <BlueButton text="Ver Mapa"/>
        </div>
      </div>

    <div className={style.rightTop}>
        <HeaderHotel name={name} location={location} stars={stars} />
    <div className={style.containerGallery + " " + ((size.width > 700)?(imageExpanded?style.allImage:""):"")}>
      {
      size.width > 700?((!imageExpanded ? <ContainerImages pictures={pictures} handleImageExpanded={handleImageExpanded} />
        : <AllPictures
          pictures={pictures}
          closeHandler={handleImageExpanded}
        />))
        :
        <CarouselHotelImages pictures={pictures}/>
      }

    </div>
    </div>
    </div>
    <div className={style.descriptionAndGood}>

      <div className={style.description}>

        <Description text={textDescription} />
      </div>

      <div className={style.goodPoints}>
        <GoodPoints items={goodPoints} />
        <div style={{ marginTop: '1.5rem' }}>
          <BlueButton text="Reservar" />
        </div>
      </div>
    </div>

    <BestServices services={bestServices} />
    <div className={style.line}></div>

    <div className={style.avaible + " " + style.h2}>
      <h4>Disponibilidad</h4>
      <div className={style.equilityPrice}>
        <i class="bi bi-shield-fill-check"></i>
        <p>Igualamos el precio</p>
      </div>
    </div>
    <div className={style.reserveData}>
      <ReserveData name={name} />
    </div>

    <div className={style.modifySearch}>
      <ModifySearch
        countAdults={adultCount}
        countChilds={childCount}
        since={since}
        to={to} />
    </div>


{roomsExpanded.expanded?
<div className={style.allImage}>
<Rooms 
roomExpanded={roomsExpanded}
handleExpanded={handleRoomsExpanded}/>
</div>
:<Rooms 
roomExpanded = {roomsExpanded}
handleExpanded={handleRoomsExpanded}/>
}

<div className={style.marginBottom}></div>

    <BadNew
      icon="/assets/timer.svg"
      title="Disponibilidad limitada en Lima para la fecha"
      info="8 hoteles de 3 estrellas como este ya no están disponibles en nuestra página"
    />
<div style={{marginBottom:'0.5rem'}}></div>
    <GoodNew
      icon="/assets/candado.svg"
      title="Consigue un buen precio para tu próxima estancia"
      info="Puede ser que los precios suban, así que garantiza tu reserva ahora!"
    />

<div style={{marginBottom:'0.5rem'}}></div>
    <InfoLink
    title= "Medidas de salud y seguridad especiales"
    info="Este alojamiento ha tomado medidas de higiene y salud especiales por que tu seguridad es lo más importante"
    link="Ver info sobre salud y seguridad"
    picture="/assets/escudo.svg" />



    <h4 className={style.h2}>Playas mas cercanas</h4>
    <Beach data={beaches} />
    <div className={style.buttonRight}>
      <BlueButton text="Ver disponibilidad" />
    </div>

    <h4 className={style.h2}>{reasons.length + " razones para escojer el " + name}</h4>
      <Reasons data={reasons}/>
    <h4 className={style.h2}>Comentarios de los clientes</h4>
    <CalificationComments data={calificationsComments}/>

    <div className={style.marginBottom}></div>
  <CalificationCategory data={calificationCategory}/>
  <div className={style.marginBottom}></div>
    <CommentsComponent comments={comments} />

    <h4 className={style.h2}>¿Tienes alguna pregunta?</h4>
    <QandA/>
    <div className={style.marginBottom}></div>
    <Hostess/>

<div className={style.around + " " + style.h2}>
<h4>Alrededores del alojamiento</h4>
<div className={style.buttonAvaibility}><BlueButton text="Ver disponibilidad"/></div>
</div>
<Around/>
<div className={style.around + " " + style.h2}>
<h4>Servicios de {name}</h4>
<div><BlueButton text="Ver disponibilidad"/></div>
</div>
    <BestServices services={bestServices} />
    <div className={style.containerBlackServices}>
      <BlackServices services={blackServices} />
    </div>

    <InfoLink
    title= "Iniciativas sostenibles"
    info="Este alojamiento ha tomado medidas para promover una forma de viajar más sostenible y respetuosa con el medioambiente"
    link="Leer más"
    picture="/assets/logo99.svg" />

<div className={style.around + " " + style.h2}>
<h4>Léeme</h4>
<div ><BlueButton text="Ver disponibilidad"/></div>
</div>
<Readme/>
<div className={style.around + " " + style.h2}>
<h4>A tener en cuenta</h4>
<div ><BlueButton text="Ver disponibilidad"/></div>
</div>
<InfoBlue
info="Informa a Apartment Luxury Palace No1 con antelación de tu hora prevista de llegada. Para ello, puedes utilizar el apartado de peticiones especiales al hacer la reserva
o ponerte en contacto directamente con el alojamiento. Los datos de contacto aparecen en la conﬁrmación de la reserva."
/>

<div className={style.marginBottom}></div>
<FrequentQuestions />
<div className={style.marginBottom}></div>
<PopularPlaces />
<div className={style.marginBottom}></div>
<Subscribe/>
<FinalLinks/>
  </div>
}