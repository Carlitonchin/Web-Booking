import ImageGallery from 'react-image-gallery';
import style from '../../styles/Alojamineto/singleHotel.module.scss'
import "react-image-gallery/styles/css/image-gallery.css";
import HeaderHotel from './HeaderHotel';
import BlueButton from '../../components/Utils/BlueButton';
import ContainerImages from '../../components/Utils/ContainerImages';
import GrayButton from '../../components/Utils/GrayButton';
import CommentsComponent from '../../components/Search/CommentsComponent';
import { comments, bestServices, blackServices, room, listInfo } from './testing/commentsTest'; // borrar luego
import BestServices from './Services/BestServices';
import BlackServices from './Services/BlackServices';
import FinalInfo from '../../components/Search/FinalInfo';
import { useLocation } from 'react-router';
import { useState } from 'react';
import {getDateFromString, getStringFromDate} from '../../components/Utils/Functions/dateManager';


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
          <GrayButton text="Buscar otro hotel" />
        </div>
       
        <div className={style.booking}>
        <a href={linkTo}>
          <BlueButton text="Reservar" />
          </a>
        </div>
        
      </div>
    </div>
    <div className={style.containerGallery}>
      <ContainerImages pictures={pictures} />
    </div>
    <h2 className={style.h2}>Comentarios</h2>
    <CommentsComponent comments={comments} />

    <h2 className={style.h2}>Servicios</h2>
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
        <GrayButton text="Buscar otro hotel" />
      </div>
     
      <div className={style.finalBooking}>
      <a href={linkTo}>
        <BlueButton text="Reservar" />
        </a>
      </div>
      
    </div>

  </div>
}