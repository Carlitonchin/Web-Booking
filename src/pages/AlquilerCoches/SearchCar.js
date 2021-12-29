import ListTurism from "../AtraccionesTuristicas/ListTurism"
import styleFromTour from '../../styles/AtraccionesTuristicas/searchTurism.module.scss'
import FilterComponent from "../../components/Search/FilterComponent"
import HeaderCoches from "../../components/RentarCoches/HeaderCoches"
import { getDateFromString, getStringFromDate } from "../../components/Utils/Functions/dateManager"
import {d} from '../../navegacionxsecciones/tipos-de-alojamineto/testingForHotels'
import {useState} from 'react'
import style from '../../styles/AlquilerCoches/searchCar.module.scss'
import styleHide from '../../styles/Search/hideFilterTour.module.scss'

let data = 
[
    {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }, {
        place:"Rentacar",
        tour:"Wolwagen 50040 m2 r212",
        description:"Nuevo en perfecto estado",
        price:200,
        imgUrl:'/img/cook.jpg',
        list:[{icon:'/favicon.ico', text:"llantas michelin"}, {icon:'/favicon.ico', text:"aire acondicionado"}, {icon:'/favicon.ico', text:"Super comodo"}]
    }
]

export default ()=>
{
    const [placeRent, setPlaceRent] = useState("");
  const [placeReturn, setPlaceReturn] = useState("");
  const [returnAtSamePlace, setReturnAtSamePlace] = useState(true);
  const [since, setSince] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [showFilters, setShowFilters] = useState(false)

  function handleFilters()
  {
      setShowFilters(!showFilters);
  }

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

    return <>
    <div className={styleFromTour.filtersAndResults}>
        <div className={styleFromTour.filters}>
        <div className={style.containerSearchForm}>
        <HeaderCoches 
        handlePlaceRent={handlePlaceRent}
        handlePlaceReturn={handlePlaceReturn}
        handleReturnAtSamePlace={handleReturnAtSamePlace}
        placeRent={placeRent}
        placeReturn={placeReturn}
        returnAtSamePlace={returnAtSamePlace}
        handleSince={handleSince}
        handleTo={handleTo}
        since={since}
        to={to}
        />
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
            <ListTurism data={data}/>
        </div>

        </div>
        </>
}