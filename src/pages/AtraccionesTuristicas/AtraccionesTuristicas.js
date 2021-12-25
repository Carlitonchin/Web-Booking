
import React, {useState} from 'react'
import Layout from '../../layout/Layout'
import Aturisticas from '../../components/AtraccionesTuristicas/Aturisticas'

import headerStyle from "../../styles/Alojamineto/Sleep.module.scss"
import { Container, Row, Col, Card  } from 'react-bootstrap';
import '../../styles/AtraccionesTuristicas/AT.scss'
import Header from '../../components/Search/Header';
import CardTop from '../../components/AtraccionesTuristicas/CardTop';
import CardsEuropa from '../../components/AtraccionesTuristicas/CardsEuropa';
import CardAsia from '../../components/AtraccionesTuristicas/CardAsia';
import CardsAmericaN from '../../components/AtraccionesTuristicas/CardsAmericaN';
import img1 from '../../images/fortuna-24.png'
import img2 from '../../images/calendario-24.png'
import img3 from '../../images/línea-32.png'

const AtraccionesTuristicas = () => {

    const[destinos,setDestinnos] = useState([
        {  
            url:"https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o=",
            destino: "Dubai",
            descripcion: "452 cosas que hacer",
            
        },
        {
            url:"https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=",
            destino: "Londres",
            descripcion: "227 cosas que hacer",
           
        },
        {
            url:"https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=", 
            destino: "Estambul",
            descripcion: "168 cosas que hacer",
            
        }
        
    ])
    /*Europa*/

    const [europa, setEuropa] = useState([
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=",
      },
    ]);

    const [american, setAmerica] = useState([
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/856744.jpg?k=8e88f1d59ccc1b8e88bfdacac7c4b59fb1c3402a6a1aae8e3f43a50beae1bee9&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/349730.jpg?k=1682bc9fb350fe5b1a79e8a12946edc27374fd0ad711f8730747c5af8fa0e9f1&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/689611.jpg?k=fd3461d7228fb7154a9bdf78fd3f4c73c2bed5039c8ed25f0e92dbc17c713f12&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/856744.jpg?k=8e88f1d59ccc1b8e88bfdacac7c4b59fb1c3402a6a1aae8e3f43a50beae1bee9&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/349730.jpg?k=1682bc9fb350fe5b1a79e8a12946edc27374fd0ad711f8730747c5af8fa0e9f1&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/689611.jpg?k=fd3461d7228fb7154a9bdf78fd3f4c73c2bed5039c8ed25f0e92dbc17c713f12&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/856744.jpg?k=8e88f1d59ccc1b8e88bfdacac7c4b59fb1c3402a6a1aae8e3f43a50beae1bee9&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/349730.jpg?k=1682bc9fb350fe5b1a79e8a12946edc27374fd0ad711f8730747c5af8fa0e9f1&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/689611.jpg?k=fd3461d7228fb7154a9bdf78fd3f4c73c2bed5039c8ed25f0e92dbc17c713f12&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/856744.jpg?k=8e88f1d59ccc1b8e88bfdacac7c4b59fb1c3402a6a1aae8e3f43a50beae1bee9&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/349730.jpg?k=1682bc9fb350fe5b1a79e8a12946edc27374fd0ad711f8730747c5af8fa0e9f1&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/689611.jpg?k=fd3461d7228fb7154a9bdf78fd3f4c73c2bed5039c8ed25f0e92dbc17c713f12&o=",
      },
      
    ]);

    const [asia, setAsia] = useState([
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/685560.jpg?k=f21648aa2f4e412c9950c9d683deb21dd7e69fecdcd1bf6717d4d5fa8520dc7e&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/688058.jpg?k=cfccb18a3a547d883cdce149ec955392ea4e4ad5bef313d70322e788956f7549&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/685287.jpg?k=d859f6ae53fac51b55b662aecfb43cd3c7cf28d04ca047a12db96ceda7ea26bd&o=",
      },
      {
        url: "https://q-xx.bstatic.com/xdata/images/city/720x405/948972.jpg?k=b5c4ef69ae44a264a1172a21f0dc13bdf527e9403846adb7873ba00e4dd10763&o=",
      },
      
    ]);

    return (
      <div>
        <Header
        h1="Donde quieres ir"
        h5="Visita los lugares mas hermosos del mundo"
        placeholder="Destinos, museos, tours, ..."
        />
        <div className={headerStyle.cabecera} style={{backgroundImage:'url(img/Hawaii.jpg)'}}></div>
        <Container className="text-center1">
          <Row>
            <Col>
              <h3 style={{ fontWeight: "bold" }}>Destinos top</h3>
            </Col>
          </Row>
        </Container>
        <div className="grid-top">
          {destinos.map((dest) => {
            return (
              <CardTop
                destino={dest.destino}
                descripcion={dest.descripcion}
                url={dest.url}
              />
            );
          })}
        </div>
        <Container className="text-center2">
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
        <Container className="text-center4">
          <Row>
            <Col>
              <p class="h5" style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                Cuenta con nosotros
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="text-center3">
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <p
                    class="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    &nbsp;&nbsp;Descubre las principales atracciones turísticas
                  </p>
                  <p class="h6">
                    &nbsp;&nbsp;Conoce lo mejor del destino con atracciones,
                    tours, &nbsp;&nbsp;actividades y mucho más0
                  </p>
                </div>
              </div>
            </Col>
            <Col xs lg="4">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={img2} />
                </div>
                <div>
                  <p
                    class="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    &nbsp;&nbsp; Rápido y flexible
                  </p>
                  <p class="h6">
                    &nbsp;Puedes reservar los tickets online en pocos minutos y
                    hay cancelación gratis en muchas atracciones
                  </p>
                </div>
              </div>
            </Col>
            <Col xs lg="4">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={img3} />
                </div>
                <div>
                  <p
                    class="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    &nbsp;Asistencia cuando lo necesites
                  </p>
                  <p class="h6">
                    El equipo internacional de Atención al cliente de
                    Booking.com está a tu disposición para ayudarte las 24 horas
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="text-center5">
          <Row>
            <Col>
              <p class="h5" style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Explora más destinos
              </p>
              <p class="h6">
                Encuentra cosas que hacer en ciudades de todo el mundo
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Europa
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    America del Norte
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Asia
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="ex1-content">
                <div
                  class="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="grid-eur">
                    {europa.map((dest) => {
                      return <CardsEuropa url={dest.url} />;
                    })}
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div className="grid-america">
                    <div className="grid-eur">
                      {american.map((am) => {
                        return <CardsAmericaN url={am.url} />;
                      })}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <div className="grid-asia">
                    <div className="grid-eur">
                      {asia.map((as) => {
                        return <CardAsia url={as.url} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default AtraccionesTuristicas
