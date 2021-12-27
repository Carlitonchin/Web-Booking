import style from '../../styles/AtraccionesTuristicas/singleTour.module.scss'
import ContainerImages from '../../components/Utils/ContainerImages';
import InfoTour from './InfoTour'
import DateComponent from '../../components/Search/DateComponent';
import PeopleAndPrice from './PeopleAndPrice';

let name = "Tour por Lima"
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
export default ()=>
{
    return <div className={style.container}>
        <div className={style.header}>
        <h1>Delfinario de Lima</h1>
        <a href="#">Lima</a>
        </div>
        <div className={style.containerGallery}>
          <ContainerImages pictures={pictures}/>
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
            <DateComponent/>
            
            <p className={style.time}>Empieza a las 8AM</p>
            </div>
            <div className={style.peopleAndPrice}>
            <PeopleAndPrice name="Delfinario Lima"
              info={[{iconUrl:"/favicon.ico", text:"cancelacion gratis"},
              {iconUrl:"/favicon.ico", text:"Duracion de 2 horas"}]}
              adultPrice={100}
              childPrice={50}
              rangeAdult="15-99"
              rangeChild="0-14"                    
                    />
                    </div>
          </div>
        </div>
    </div>
}