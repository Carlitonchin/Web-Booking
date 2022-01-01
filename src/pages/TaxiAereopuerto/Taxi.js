import TaxiSearchComponent from "../../components/Taxi/TaxiSearchComponent";
import styleFromRentCar from '../../styles/AlquilerCoches/rentCar.module.scss'
import styleFromFly from '../../styles/Vuelos/Fly.module.scss';
import { getStringFromDate, getDateFromString } from "../../components/Utils/Functions/dateManager";
import { useState } from "react";
import BlueButton from "../../components/Utils/BlueButton";
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styleFromAT from '../../styles/AtraccionesTuristicas/AT.module.scss'
import style from '../../styles/TaxiAereopuerto/Taxi.module.scss'

let img1 = '/favicon.ico'

export default ()=>
{
    const [firstPlace, setFirstPlace] = useState("");
    const [targetPlace, setTargetPlace] = useState("");
    const [goAndReturn, setGoAndReturn] = useState(false);
    const [since, setSince] = useState(new Date());
    const [to, setTo] = useState(new Date());
    const [count, setCount] = useState(1)
    const [time, setTime] = useState(null)
    const [returnTime, setReturnTime] = useState(null)


    function handleTime(e)
    {
        setTime(e.target.value)
    }

    function handleReturnTime(e)
    {
        alert(e.target.value)
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

    let linkTo=`/taxis/buscar?recogida=${firstPlace}&destino=${targetPlace}&fecha1=${getStringFromDate(since)}&fecha2=${getStringFromDate(to)}&cantidad=${count}&hora=${time}&horaRegreso=${returnTime}&idaVuelta=${goAndReturn}`
    return <div className={styleFromFly.container}>

    <div className={styleFromRentCar.title}>
        <h1>Reserva taxis para tus viajes</h1>
        <h5>Te llevaremos del aeropuerto al hotel y del hotel al aeropuerto</h5>
  </div>

        <div className={styleFromRentCar.containerHeader}>
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
      <a href={linkTo}>
        <BlueButton text="Buscar"/>
        </a>
        </div>
    </div>

    <h5 className={styleFromFly.marginTop}>Que ofrecemos</h5>
  <div className={styleFromAT.containerGood}>
          
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            
            <div className={styleFromAT.headerGood}>
              <h6>Seguimiento de vuelos</h6>
              <p className={styleFromAT.textGood}>
              Si el vuelo se retrasa, el conductor te esperara
            </p>
            </div>
           
          </div>
        

        
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={styleFromAT.headerGood}>
              <h6>Un solo precio</h6>
              <p className={styleFromAT.textGood}>
              Sin cargos extras, ni necesidad de llevar efectivo
            </p>
            </div>
           
          </div>
        

        
          <div className={styleFromAT.good}>
          <div className={styleFromAT.imag} style={{backgroundImage:`url(${img1})`}}></div>
            <div className={styleFromAT.headerGood}>
              
              <h6>Una apuesta segura</h6>
              <p className={styleFromAT.textGood}>
                  Conductores profesionales y atencion al cliente 24 horas
            </p>
            </div>
            
          </div>
        
        

      </div>

      <h5 className={styleFromFly.marginTop}>Reservar un traslado desde o para el aeropuerto ahora es mas facil</h5>
      <div className={style.containerInfoTaxi}>

        <div className={style.item}>
            <div className={style.head}>
            <div className={style.icon} style={{backgroundImage:`url(${img1})`}}></div>
            <h6 className={style.titleInfoTaxi}>Reserva un taxi para el aeropuerto</h6>
            </div>
            <p className={style.textInfoTaxi}>
                La confirmacion es inmediata y, si cambias de planes, puedes cancelar hasta 24 horas antes de la hora de recogida
            </p>
        </div>

        <div className={style.item}>

        <div className={style.head}>
            <div className={style.icon} style={{backgroundImage:`url(${img1})`}}></div>
            <h6 className={style.titleInfoTaxi}>Reunete con el conductor</h6>
            </div>
            <p className={style.textInfoTaxi}>
                El conductor te estara esperando cuando llegues y te acompanhara al coche. Ademas, estara
                pendiente de tu vuelo para esperarte si se retrasa
            </p>
        </div>

        <div className={style.item}>

        <div className={style.head}>
            <div className={style.icon} style={{backgroundImage:`url(${img1})`}}></div>
            <h6 className={style.titleInfoTaxi}>LLega a tu destino</h6>
            </div>
            <p className={style.textInfoTaxi}>
                LLega a tu destino de forma rapida y segura, sin hacer cola para el taxi ni tener que buscar como llegar al transporte publico
            </p>
        </div>

      </div>

      <h5 className={styleFromFly.marginTop}>Preguntas frecuentes</h5>
      <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  ¿Que es necesario para alquilar un coche?
                </Accordion.Header>
                <Accordion.Body>
                  Cuando alquilas un coche, tan solo necesitas una tarjeta de
                  crédito o débito. En el mostrador de la empresa de alquiler,
                  necesitarás: Tu pasaporte El vale de confirmación El permiso
                  para conducir de cada uno de los conductores La tarjeta de
                  crédito del conductor principal (algunas empresas de
                  alquiler también aceptan tarjetas de débito, aunque la
                  mayoría no) Importante: Debes leer las condiciones del
                  alquiler del coche, ya que cada empresa tiene sus propias
                  normas. ¿A qué nos referimos? Puede ser que te pidan algún
                  otro documento de identidad o que no acepten algunos tipos
                  de tarjeta de crédito. También es posible que para alquilar
                  el coche sea necesario que el conductor tenga el permiso de
                  conducir al menos desde hace 36 meses.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  ¿Soy lo suficientemente mayor para ALquilar un coche?
                </Accordion.Header>
                <Accordion.Body>
                  La mayoría de las empresas de alquiler te alquilará un coche
                  si tienes al menos 21 años (y algunas pueden ofrecer
                  alquiler a conductores aún más jóvenes). Sin embargo, si
                  tienes menos de 25 años, es posible que tengas que pagar una
                  tasa por conductor joven.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ¿Se puede alquilar un coche para otra persona?
                </Accordion.Header>
                <Accordion.Body>
                  Por supuesto, solo tienes que poner sus datos en el
                  formulario "Datos del conductor" cuando hagas la reserva.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  ¿Que deberia tener en cuenta al elegir un coche?
                </Accordion.Header>
                <Accordion.Body>
                  Piensa en el destino del viaje. Un SUV puede ser la opción
                  ideal para circular por una autopista de Texas, pero con un
                  coche pequeño es más fácil moverse por Roma. Descubre qué
                  opinan otras personas. En nuestra página tienes un montón de
                  comentarios y valoraciones para saber qué les ha gustado (o
                  no) a los clientes de cada empresa de alquiler. ¡No te
                  olvides del embrague! En algunos países, casi todo el mundo
                  conduce un coche manual. En cambio, hay otros en los que lo
                  normal son los vehículos automáticos. Asegúrate de alquilar
                  uno que sepas conducir.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  ¿El precio del Alquiler incluye todos los cargos?
                </Accordion.Header>
                <Accordion.Body>
                  El precio que ves incluye el coche, la cobertura obligatoria
                  (p. ej., cobertura en caso de robo y cobertura parcial por
                  colisión) y otros cargos que, si se aplican, suelen pagarse
                  durante la recogida (p. ej., tasa por devolución en otra
                  oficina, recargos aeroportuarios e impuestos locales).
                  También incluye cualquier extra que ya hayas añadido (p.
                  ej., GPS o silla de bebé). No incluye ninguna cobertura
                  adicional que adquieras directamente en el mostrador de la
                  empresa de alquiler. Consejo: Verás un desglose del precio
                  completo en la página de pago.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

    </div>
}