import InfoTour from "../AtraccionesTuristicas/InfoTour"
import styleFromTour from '../../styles/AtraccionesTuristicas/singleTour.module.scss'
import styleFromBestServices from '../../styles/Alojamineto/bestServices.module.scss'
import BestServices from "../../navegacionxsecciones/tipos-de-alojamineto/Services/BestServices"
import style from '../../styles/AlquilerCoches/singleCar.module.scss'
import HeaderCoches from "../../components/RentarCoches/HeaderCoches"
import PersonalDataForm from "../../components/Utils/PersonalDataForm"
import BlueButton from "../../components/Utils/BlueButton"
import GrayButton from "../../components/Utils/GrayButton"
import {useState} from 'react'
import {getDateFromString, getStringFromDate} from "../../components/Utils/Functions/dateManager";

let info=
[
  {
    title:"Razones para ir",
    info:[{iconUrl:"/favicon.ico", text:"Delfines mas lindos de la region"},
    {iconUrl:"/favicon.ico", text:"Los precios mas bajos"},
    {iconUrl:"/favicon.ico", text:"Excelentes opciones gastronomicas"},]

  },
  {
    title:"Razones para ir",
    info:[{iconUrl:"/favicon.ico", text:"Delfines mas lindos de la region"},
    {iconUrl:"/favicon.ico", text:"Los precios mas bajos"},
    {iconUrl:"/favicon.ico", text:"Excelentes opciones gastronomicas"},]

  },
  {
    title:"Que incluye",
    info:[{iconUrl:"/favicon.ico", text:"Bebida y comida"},
    {iconUrl:"/favicon.ico", text:"Transporte ida y vuelta"}]

  },
  {
    title:"Que necesitas saber",
    info:[{text:"Los ninhos de hasta 3 anhos entran gratis"},
    {text:"Abrimos a las 8AM y cerramos a las 8PM"},
    {text:"La funcion especial comienza a las 10AM"},
    {text:"Las fotos con los delfines son gratis antes de las 10AM"}]

  },
]

let services = [{icon:'/favicon.ico', text:"llantas michelin"},
{icon:'/favicon.ico', text:"asientos flexibles"},
{icon:'/favicon.ico', text:"Automatico"},
{icon:'/favicon.ico', text:"Capacidad: 5personas"},
{icon:'/favicon.ico', text:"Capacidad: 3 maletas"},
{icon:'/favicon.ico', text:"Vehiculo hibrido"}]

let imgUrl = '/img/reserva.jpg'

export default ()=>
{
 
  const [placeRent, setPlaceRent] = useState("");
  const [placeReturn, setPlaceReturn] = useState("");
  const [returnAtSamePlace, setReturnAtSamePlace] = useState(true);
  const [since, setSince] = useState(new Date());
  const [to, setTo] = useState(new Date());


  function handlePlaceRent(e)
  {
      setPlaceRent(e.target.value);
  }

  function handlePlaceReturn(e)
  {
      setPlaceReturn(e.target.value);
  }

  function handleReturnAtSamePlace(value)
  {
    setReturnAtSamePlace(value);
  }

  function handleSince(e) {
    e.preventDefault()
    setSince(getDateFromString(e.target.value))
  }

  function handleTo(e)
  {
    
    e.preventDefault()
    setTo(getDateFromString(e.target.value))
  }

   return<div className={style.container}>
   <h1>Finalizacion de la reserva</h1>
   <div className={style.imagAndInfo}>
    <div className={style.imag} style={{backgroundImage:`url(${imgUrl})`}}></div>
    <div className={style.info}>
      <div>
      <h3>Wolwvagen</h3>
      <h6>Rentacar</h6>
      </div>
    <div className={styleFromBestServices.container + " " + style.containerServices}>
        {services.map(s=>
            {
                let {icon, text} = s;
                console.log(icon)
                return <div className={styleFromBestServices.iconText +" " + style.moreMargin}>
                    <div  
                    style={{backgroundImage:`url(${icon})`}} className={styleFromBestServices.icon}
                    ></div>
                    {text}
                    </div>
            })}
    </div>
    </div>
   </div>
   <div className={style.infoAndPay}>
   <div className={styleFromTour.info}>
    <InfoTour data={info}/>
    </div>
    <div className={style.pay}>
      <HeaderCoches 
      handleReturnAtSamePlace={handleReturnAtSamePlace}
      handlePlaceRent={handlePlaceRent}
      handlePlaceReturn={handlePlaceReturn}
      handleSince={handleSince}
      handleTo={handleTo}
      placeRent={placeRent}
      placeReturn={placeReturn}
      returnAtSamePlace={returnAtSamePlace}
      since={since}
      to={to}

      />
    </div>
    </div>

    <div className={style.containerPersonalInfo}>
      <h3>Informacion requerida</h3>
            <PersonalDataForm/>
            <div className={style.containerButtons}>
              <div>
                <BlueButton text="Reservar"/>
              </div>

              <div>
                <GrayButton text="Atras"/>
              </div>
            </div>
    </div>
    </div>
}