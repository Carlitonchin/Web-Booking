
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
import { useState } from 'react';
import { getDateFromString, getStringFromDate } from '../../components/Utils/Functions/dateManager';
import picturesManager from '../../components/Utils/Functions/picturesManager';
import AllPictures from '../../components/Utils/Functions/AllPictures';
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
    icon: '/favicon.ico',
    text: "Ubicacion fantastica"
  },
  {
    icon: '/favicon.ico',
    text: "Comodidad para tus vacaciones"
  },
  {
    icon: '/favicon.ico',
    text: "Barrio tranquilo"
  },
  {
    icon: '/favicon.ico',
    text: "Empieza el dia con buen pie"
  },
  {
    icon: '/favicon.ico',
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
    icon: '/favicon.ico',
    text: "Precios Imbatibles"
  },
  {
    icon: '/favicon.ico',
    text: "Una reserva segura"
  },
  {
    icon: '/favicon.ico',
    text: "Gestiona tus reservas online"
  },
  {
    icon: '/favicon.ico',
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
  let pictures = ["../img/playa.jpg", "../img/playa.jpg", "../img/cancun.jpg", "../img/cancun.jpg"]

  let location = "Varadero";
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
  const [imageExpanded, setImageExpanded] = useState(false);

  function handleImageExpanded() {
    setImageExpanded(!imageExpanded);
  }

  if (isNaN(adults) || isNaN(childs) || isNaN(cRooms))
    return <h1>Not found</h1>

  if (!name)
    return <h1>Not found</h1>

  let linkTo = `/pagar?event=${name}&adultCount=${adults}&childCount=${childs}&dateSince=${getStringFromDate(since)}&dateTo=${getStringFromDate(to)}`

  //...................................................
  return <div className={style.container}>
    <div className={style.containerHeader}>
      <div className={style.nameStarsLocation}>
        <HeaderHotel name={name} location={location} stars={stars} />
      </div>

      <div className={style.containerBooking}>
        <div className={style.booking}>
          <GrayButton text="Atras" />
        </div>

        <div className={style.booking}>
          <a href={linkTo}>
            <BlueButton text="Reservar" />
          </a>
        </div>

      </div>
    </div>
    <div className={style.containerGallery}>
      {(!imageExpanded ? <ContainerImages pictures={pictures} handleImageExpanded={handleImageExpanded} />
        : <AllPictures
          pictures={pictures}
          closeHandler={handleImageExpanded}
        />)
      }

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

    <BadNew
      icon="/favicon.ico"
      title="Disponibilidad limitada en Lima para la fecha"
      info="8 hoteles de 3 estrellas como este ya no están disponibles en nuestra página"
    />
<div style={{marginBottom:'0.5rem'}}></div>
    <GoodNew
      icon="/favicon.ico"
      title="Consigue un buen precio para tu próxima estancia"
      info="Puede ser que los precios suban, así que garantiza tu reserva ahora!"
    />

<div style={{marginBottom:'0.5rem'}}></div>
    <InfoLink
    title= "Medidas de salud y seguridad especiales"
    info="Este alojamiento ha tomado medidas de higiene y salud especiales por que tu seguridad es lo más importante"
    link="Ver info sobre salud y seguridad"
    picture="/favicon.ico" />



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

<div className={style.around}>
<h4 className={style.h2}>Alrededores del alojamiento</h4>
<div className={style.buttonRight}><BlueButton text="Ver disponibilidad"/></div>
</div>
<Around/>
    <h4 className={style.h2}>Servicios</h4>
    <BestServices services={bestServices} />
    <div className={style.containerBlackServices}>
      <BlackServices services={blackServices} />
    </div>
    <div className={style.containerFinalInfo}>
      <FinalInfo
        listInfo={listInfo}
        room={room}
        countAdults={adults}
        countChilds={childs}
        countRooms={cRooms}
        setAdults={setAdults}
        setChilds={setChilds}
        setRooms={setRooms}
        startDate={since}
        endDate={to}
        setStartDate={setSince}
        setEndDate={setTo}
      />

    </div>
    <div className={style.finalBookingContainer}>
      <div className={style.finalBooking}>
        <GrayButton text="Atras" />
      </div>

      <div className={style.finalBooking}>
        <a href={linkTo}>
          <BlueButton text="Reservar" />
        </a>
      </div>

    </div>

  </div>
}