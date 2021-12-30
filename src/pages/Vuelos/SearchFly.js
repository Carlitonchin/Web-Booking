import ListTurism from "../AtraccionesTuristicas/ListTurism"
import styleFromTour from '../../styles/AtraccionesTuristicas/searchTurism.module.scss'
import FilterComponent from "../../components/Search/FilterComponent"
import HeaderCoches from "../../components/RentarCoches/HeaderCoches"
import { getDateFromString, getStringFromDate } from "../../components/Utils/Functions/dateManager"
import {d} from '../../navegacionxsecciones/tipos-de-alojamineto/testingForHotels'
import {useState} from 'react'
import style from '../../styles/AlquilerCoches/searchCar.module.scss'
import styleHide from '../../styles/Search/hideFilterTour.module.scss'
import BlueButton from "../../components/Utils/BlueButton"
import {useLocation} from 'react-router'
import SearchFlyComponent from '../../components/Vuelos/SearchFlyComponent';
import ListFly from '../../components/Vuelos/ListFly.js'

let data = 
[
    {
        price:1000,
        infoTop:["Bueno", "Bonito", "Barato"],
        companies:["American Airlines", "LATAM Airlines"],

        go:
        {
            companyName:"American Airlines",
            companyLogo:"/favicon.ico",
            time1:"9:49",
            time2:"15:00",
            duration:"5h 30m",
            firstPlace:"LA",
            targetPlace:"Lima",
            countScale:1
        },
        ret:
        {
            companyName:"LATAM Airlines",
            companyLogo:"/favicon.ico",
            time1:"9:49",
            time2:"14:00",
            duration:"4h 30m",
            firstPlace:"Lima",
            targetPlace:"Miami",
            countScale: 0
        }
    },
    {
      price:1000,
      infoTop:["Bueno", "Bonito", "Barato"],
      companies:["American Airlines", "LATAM Airlines"],

      go:
      {
          companyName:"American Airlines",
          companyLogo:"/favicon.ico",
          time1:"9:49",
          time2:"15:00",
          duration:"5h 30m",
          firstPlace:"LA",
          targetPlace:"Lima",
          countScale:1
      },
      ret:
      {
          companyName:"LATAM Airlines",
          companyLogo:"/favicon.ico",
          time1:"9:49",
          time2:"14:00",
          duration:"4h 30m",
          firstPlace:"Lima",
          targetPlace:"Miami",
          countScale: 0
      }
  },
  {
    price:1000,
    infoTop:["Bueno", "Bonito", "Barato"],
    companies:["American Airlines", "LATAM Airlines"],

    go:
    {
        companyName:"American Airlines",
        companyLogo:"/favicon.ico",
        time1:"9:49",
        time2:"15:00",
        duration:"5h 30m",
        firstPlace:"LA",
        targetPlace:"Lima",
        countScale:1
    },
    ret:
    {
        companyName:"LATAM Airlines",
        companyLogo:"/favicon.ico",
        time1:"9:49",
        time2:"14:00",
        duration:"4h 30m",
        firstPlace:"Lima",
        targetPlace:"Miami",
        countScale: 0
    }
}
]

export default ()=>
{


  let { search } = useLocation()
  let query = new URLSearchParams(search);

  let salidaDesde = query.get("salidaDesde");
  let destino = query.get("destino");
  let idaVuelta = query.get("idaVuelta");
  let fechaSalida = query.get("fechaSalida");
  let fechaRetorno = query.get("fechaRetorno");
  let cantPasajeros = query.get("cantPasajeros")

  const [firstPlace, setFirstPlace] = useState(salidaDesde);
  const [targetPlace, setTargetPlace] = useState(destino);
  const [goAndReturn, setGoAndReturn] = useState(idaVuelta === 'true'?true:false);
  const [since, setSince] = useState(getDateFromString(fechaSalida));
  const [to, setTo] = useState(getDateFromString(fechaRetorno));
  const [showFilters, setShowFilters] = useState(false)
  const [count, setCount] = useState(cantPasajeros)
  function handleCount(e)
  {
    let value = e.target.value;
    if(value == '0')
      return;

    setCount(value)
  }
  function handleFilters()
  {
      setShowFilters(!showFilters);
  }

  function handleFirstPlace(e)
  {
      setFirstPlace(e.target.value);
  }

  function handleTargetPlace(e)
  {
      setTargetPlace(e.target.value);
  }

  function handleGoAndReturn(value)
  {
    setGoAndReturn(value);
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


    return <>
    <div className={styleFromTour.filtersAndResults}
    >
        <div className={styleFromTour.filters}>
        <div className={style.containerSearchForm}>
        <SearchFlyComponent
  handleGoAndReturn={handleGoAndReturn}
  firstPlace={firstPlace}
  goAndReturn={goAndReturn}
  handleFirstPlace={handleFirstPlace}
  handleSince={handleSince}
  handleTargetPlace={handleTargetPlace}
  handleTo={handleTo}
  since={since}
  targetPlace={targetPlace}
  to={to}
  count={count}
  handleCount={handleCount}
  />
    <div style={{marginTop:'1rem', width:'100%'}}>
        <BlueButton text="Buscar"/>
        </div>
        </div>
        <a className={"text-primary " + style.showFiltersMessage}
            onClick={handleFilters}
            className={styleFromTour.showFiltersMessage}>{(!showFilters?"Mostrar Filtros":"Ocultar Filtros")}</a>
              <div className={styleFromTour.filters + " " + style.containerFilters + " " +(!showFilters?styleFromTour.hide:"")}>
            <h5>Filtrar por</h5>
       
        <FilterComponent
        filters={d}
        handleFilters={handleFilters}
        styleHide={styleHide}
        />
        </div>
        </div>

        <div className={styleFromTour.results}>
            <h3>{data.length + " resultados"}</h3>
            <ListFly
            list={data}
            />
        </div>

        </div>
        </>
}