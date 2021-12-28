
import React, {useState} from 'react'
import Layout from '../../layout/Layout'
import Aturisticas from '../../components/AtraccionesTuristicas/Aturisticas'

import headerStyle from "../../styles/Alojamineto/Sleep.module.scss"
import { Container, Row, Col, Card  } from 'react-bootstrap';
import style from '../../styles/AtraccionesTuristicas/AT.module.scss'
import Header from '../../components/Search/Header';
import CardTop from '../../components/AtraccionesTuristicas/CardTop';
import CardsEuropa from '../../components/AtraccionesTuristicas/CardsEuropa';
import CardAsia from '../../components/AtraccionesTuristicas/CardAsia';
import CardsAmericaN from '../../components/AtraccionesTuristicas/CardsAmericaN';
import img1 from '../../images/fortuna-24.png'
import img2 from '../../images/calendario-24.png'
import img3 from '../../images/línea-32.png'
import ImageCarousel from '../../components/Utils/ImageCarousel';
import TabContinents from './TabContinents';

const AtraccionesTuristicas = () => {

    const dataTop = [
      {
        imgUrl: "/img/cancun.jpg",
        link: "hotel", 
        type: `Londres`, 
        toDo: "347 cosas para hacer" 
      },
      {
        imgUrl: "/img/playa.jpg",
        link: "", 
        type: "Los Angeles", 
        toDo: "347 cosas para hacer"       },
      {
        imgUrl: "/img/cook.jpg",
        link: "house1", 
        type: "Buenos Aires", 
        toDo: "347 cosas para hacer"       },
      {
        imgUrl: "/img/España.jpg",
        link: "", 
        type: "Barcelona", 
        toDo: "347 cosas para hacer"       },
      {
        imgUrl: "/img/unnamed.jpg",
        link: "", 
        type: "New York", 
        toDo: "347 cosas para hacer"       }
    ];  
    
    let continent=
    {
      "Europa":[{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"},{text:"Europa", img:"/img/unnamed.jpg", toDo:"10 cosas para hacer"}],
      "America":[{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"},{text:"America",img:"/img/España.jpg", toDo:"10 cosas para hacer"}],
      "Asia":[{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"},{text:"Asia", img:"/img/cook.jpg", toDo:"10 cosas para hacer"}],
      "Africa":[{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"},{text:"Africa", img:"/img/playa.jpg"}],
      "Australia":[{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg", toDo:"10 cosas para hacer"},{text:"Australia", img:"/img/cancun.jpg"}]
    };

    const [value, setValue] = useState("")
    return (
      <>
        
        <Header
        h1="Donde quieres ir"
        h5="Visita los lugares mas hermosos del mundo"
        value={value}
        setValue={setValue}
        placeholder="Destinos, museos, tours ..."
        linkTo={`/turismo/buscar?search=${value}`}
        />
        <div className={headerStyle.cabecera} style={{backgroundImage:'url(img/Hawaii.jpg)'}}></div>
        <div className={style.containerInfo}>
        <h4 className={style.top}>Destinos Top</h4>
        <ImageCarousel list={dataTop}/>
        
       
       {/* <Container className="text-center2">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h5 style={{ fontWeight: "bold" }}>
                      Inicia sesión para ahorrar tiempo
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    <h6>
                      Tu cuenta de Booking.com te permite reservar utilizando
                      los datos que tengas guardados
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        */}
        <h4 className={style.top + " " + style.titleGood}>
                Cuenta con nosotros
              </h4>
        <div className={style.containerGood}>
          
            <div className={style.good}>
            <div className={style.imag} style={{backgroundImage:`url(${img1})`}}></div>
              
              <div className={style.headerGood}>
                <h6>Descubre las principales atracciones turisticas</h6>
                <p className={style.textGood}>
                Conoce lo mejor del destino con atracciones, tours y mucho mas
              </p>
              </div>
             
            </div>
          

          
            <div className={style.good}>
            <div className={style.imag} style={{backgroundImage:`url(${img1})`}}></div>
              <div className={style.headerGood}>
                <h6>Descubre las principales atracciones turisticas</h6>
                <p className={style.textGood}>
                Conoce lo mejor del destino con atracciones, tours y mucho mas
              </p>
              </div>
             
            </div>
          

          
            <div className={style.good}>
            <div className={style.imag} style={{backgroundImage:`url(${img1})`}}></div>
              <div className={style.headerGood}>
                
                <h6>Descubre las principales atracciones turisticas</h6>
                <p className={style.textGood}>
                Conoce lo mejor del destino con atracciones, tours y mucho mas
              </p>
              </div>
              
            </div>
          

        </div>
      
        
              <h4 className={style.top}>
                Explora más destinos
              </h4>
              <p class="h6">
                Encuentra cosas que hacer en ciudades de todo el mundo
              </p>
          
          <TabContinents data={continent}/>
        
        
      </div>
      </>
    );
}

export default AtraccionesTuristicas
