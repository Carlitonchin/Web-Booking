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
import TaxiSearchComponent from "../../components/Taxi/TaxiSearchComponent";

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

  let place1 = query.get("recogida");
  let place2 = query.get("destino");
  let fecha1 = query.get("fecha1");
  let fecha2 = query.get("fecha2");
  let cantidad = query.get("cantidad");

  let hora = query.get("hora");
  let horaRegreso = query.get("horaRegreso");
  let idaVuelta = query.get("idaVuelta");

    const [firstPlace, setFirstPlace] = useState(place1);
    const [targetPlace, setTargetPlace] = useState(place2);
    const [goAndReturn, setGoAndReturn] = useState(idaVuelta=='true'?true:false);
    const [since, setSince] = useState(getDateFromString(fecha1));
    const [to, setTo] = useState(getDateFromString(fecha2));
    const [count, setCount] = useState(cantidad)
    const [time, setTime] = useState(hora)
    const [returnTime, setReturnTime] = useState(horaRegreso)
    const [showFilters, setShowFilters] = useState(false)

    function handleFilters()
    {
        setShowFilters(!showFilters);
    }

    function handleTime(e)
    {
        setTime(e.target.value)
    }

    function handleReturnTime(e)
    {
      setReturnTime(e.target.value)
    }

    function handleCount(e)
    {
      let value = e.target.value;
      if(value === '0')
        return;
  console.log(value)
      setCount(value)
    }
  
    let linkTo=`/vuelos/buscar?salidaDesde=${firstPlace}&destino=${targetPlace}&idaVuelta=${goAndReturn}&fechaSalida=${getStringFromDate(since)}&fechaRetorno=${getStringFromDate(to)}&cantPasajeros=${count}`;
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
        <TaxiSearchComponent
    count={count}
    firstPlace={firstPlace}
    goAndReturn={goAndReturn}
    handleCount={handleCount}
    handleFirstPlace={handleFirstPlace}
    handleGoAndReturn={handleGoAndReturn}
    handleReturnTime={handleReturnTime}
    handleSince={handleSince}
    handleTargetPlace={handleTargetPlace}
    handleTime={handleTime}
    handleTo={handleTo}
    returnTime={returnTime}
    since={since}
    targetPlace={targetPlace}
    time={time}
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
            linkTo="/taxis/taxi"
            />
        </div>

        </div>
        </>
}