import ListTurism from "../AtraccionesTuristicas/ListTurism"
import styleFromTour from '../../styles/AtraccionesTuristicas/searchTurism.module.scss'
import FilterComponent from "../../components/Search/FilterComponent"
import HeaderCoches from "../../components/RentarCoches/HeaderCoches"
import { getDateFromString, getStringFromDate } from "../../components/Utils/Functions/dateManager"
import {d} from '../../navegacionxsecciones/tipos-de-alojamineto/testingForHotels'
import {useState} from 'react'
import style from '../../styles/AlquilerCoches/searchCar.module.scss'

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
            <h5>Filtrar por</h5>
       
        <FilterComponent filters={d}/>
        </div>

        <div className={styleFromTour.results}>
            <ListTurism data={data}/>
        </div>

        </div>
        </>
}