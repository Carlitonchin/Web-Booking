import style from '../../styles/Vuelos/Fly.module.scss';
import SearchFlyComponent from '../../components/Vuelos/SearchFlyComponent';
import {getDateFromString, getStringFromDate} from '../../components/Utils/Functions/dateManager';
import {useState} from 'react'
import styleFromRentCar from '../../styles/AlquilerCoches/rentCar.module.scss'
import BlueButton from '../../components/Utils/BlueButton';

export default ()=>
{

  const [firstPlace, setFirstPlace] = useState("");
  const [targetPlace, setTargetPlace] = useState("");
  const [goAndReturn, setGoAndReturn] = useState(false);
  const [since, setSince] = useState(new Date());
  const [to, setTo] = useState(new Date());

  let linkTo=`/vuelos/buscar?salidaDesde=${firstPlace}&destino=${targetPlace}&idaVuelta=${goAndReturn}&fechaSalida=${getStringFromDate(since)}&fechaRetorno=${getStringFromDate(to)}`;
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

  //let linkTo = `/coches/buscar?recogida=${placeRent}&entrega=${placeReturn}&desde=${getStringFromDate(since)}&hasta=${getStringFromDate(to)}&devolverEnElMismoLugar=${returnAtSamePlace}`;

  return <>
  <div className={styleFromRentCar.title}>
  <h1>A donde quieres viajar</h1>
  <h5>Encuentra los mejores vuelos</h5>
  </div>

  <div className={styleFromRentCar.containerHeader}>
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
      <a href={linkTo}>
        <BlueButton text="Buscar"/>
        </a>
        </div>
  </div>
  </>
}
