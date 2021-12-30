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

let data = 
[
    {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"
        ,linkTo:'/coches/coche'
    }
    ]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
        ,linkTo:'/coches/coche'
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

  const [firstPlace, setFirstPlace] = useState(salidaDesde);
  const [targetPlace, setTargetPlace] = useState(destino);
  const [goAndReturn, setGoAndReturn] = useState(idaVuelta);
  const [since, setSince] = useState(getDateFromString(fechaSalida));
  const [to, setTo] = useState(getDateFromString(fechaRetorno));
  const [showFilters, setShowFilters] = useState(false)

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
    <div className={styleFromTour.filtersAndResults}>
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
            <ListTurism
            data={data}
            linkTo="/coches/coche"
            />
        </div>

        </div>
        </>
}