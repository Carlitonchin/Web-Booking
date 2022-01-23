import style from '../../styles/AtraccionesTuristicas/singleTour.module.scss'
import ContainerImages from '../../components/Utils/ContainerImages';
import InfoTour from './InfoTour'
import DateComponent from '../../components/Search/DateComponent';
import PeopleAndPrice from './PeopleAndPrice';
import {useState} from 'react';
import {getDateFromString, getStringFromDate} from '../../components/Utils/Functions/dateManager';
import {useLocation} from 'react-router'
import styleFromSingleHotel from '../../styles/Alojamineto/singleHotel.module.scss'
import AllPictures from '../../components/Utils/AllPictures';


let pictures=["../img/playa.jpg","../img/playa.jpg","../img/cancun.jpg","../img/cancun.jpg"]
let infoTour=
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

let place = "Lima"
export default ()=>
{

  let { search } = useLocation()
  let query = new URLSearchParams(search);

  let name = query.get("name");
  if(!name)
  return <h1>Not found</h1>

  let [adultCount, setAdult] = useState(1);
  let [childCount, setChild] = useState(0);
  let [date, setDate] = useState(new Date());
  const [imageExpanded, setImageExpanded] = useState(false);

  function handleDate(e) {
    e.preventDefault()
    setDate(getDateFromString(e.target.value))
  }


  function handleImageExpanded()
  {
    setImageExpanded(!imageExpanded);
  }

    return <div className={style.container}>
        <div className={style.header}>
        <h1 >{name}</h1>
        <a href="#">{place}</a>
        </div>
        <div className={styleFromSingleHotel.containerGallery}>
        {(!imageExpanded?<ContainerImages pictures={pictures} handleImageExpanded={handleImageExpanded} />
    :<AllPictures 
    pictures={pictures}
    closeHandler={handleImageExpanded}
    />  )
    
    }
        </div>
        <div className={style.infoAndPrice}>
          <div className={style.info}>
          <InfoTour data={infoTour}/>
          </div>
          <div className={style.price}>
            <div>
            <h5>
              Tickets y Precios
            </h5>
            <h6>Cuando quieres ir</h6>
            <DateComponent
            date={date}
            handleChange={handleDate}
            />
            
            <p className={style.time}>Empieza a las 8AM</p>
            </div>
            <div className={style.peopleAndPrice}>
            <PeopleAndPrice 
              name={name}
              info={[{iconUrl:"/favicon.ico", text:"cancelacion gratis"},
              {iconUrl:"/favicon.ico", text:"Duracion de 2 horas"}]}
              adultPrice={100}
              childPrice={50}
              rangeAdult="15-99"
              rangeChild="0-14"
              adultCount={adultCount}
              childCount={childCount}
              setAdult={setAdult}
              setChild={setChild}
              date={date}       
              place={place}          
                    />
                    </div>
          </div>
        </div>
    </div>
}