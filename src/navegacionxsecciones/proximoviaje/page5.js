import React from 'react'
import Layout from '../../layout/Layout'
import Header5 from '../../components/secciones/proximoviaje/Header5'
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/secciones/Page1.scss'

const Page5 = () => {
    return (
        <>
            <Layout>
                <Header5 />
            </Layout>
            <Container className="center-1">
                <Row>
                    <Col>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Artículos</a></li>
                                <li class="breadcrumb-item"><a href="#">Destinos</a></li>
                                <li class="breadcrumb-item"><a href="#"> Cinco destinos para un babymoon inolvidable </a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <Container className="center-2">
                <Row>
                    <Col>
                        <p class="h1" style={{ fontWeight: 'bold' }}> Cinco destinos para un babymoon inolvidable  </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-3">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/123680658.jpg?k=97dc7a58e22a94fef6820d4143283212a508b0f87316c79ec7b182a166f02bc9&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-4">
                <Row>
                    <Col>
                        <p class="h6">
                          En un babymoon hay que olvidarse de las preocupaciones y, a pesar de sus famosas fiestas, Miami Beach es un destino sorprendentemente zen. Descubre las habitaciones frescas y luminosas del 1 Hotel South Beach, en el que podrás pasarte las horas en alguna de sus cuatro piscinas. Podrás descansar en una tumbona y admirar las vistas al mar mientras saboreas una bebida refrescante
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-5">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1440x810/123680675.jpg?k=e0c55968f87eaf432bedc907f46333268ccaf0dd3545d373fd4a9f7c6705f518&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-6">
                <Row>
                    <Col>
                        <p class="h6">
                        Tumbarse a tomar el sol suena a plan redondo para muchos futuros padres y madres, y es que no es mala idea permitirse no mover ni un dedo antes de que bebé llame a la puerta. Albufeira se encuentra en la región portuguesa del Algarve y es un sueño hecho realidad si adoras el sol. Aquí la temperatura es agradable todo el año y puedes disfrutar de la playa, una costa agreste y comida de primera. Un buen sitio donde alojarse es el Sao Rafael Villas, Apartments & Guest House que tiene un diseño elegante y se encuentra a un breve paseo de la playa.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-7">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/123680656.jpg?k=d518be39c5b57cb4c14d740694e5647e9173f23d2e582530b36cae7b3a2a30e3&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-8">
                <Row>
                    <Col>
                        <p class="h6">La playa no es solo un lugar ideal para pasar el día descansando, leyendo o nadando, también es estupenda para dar paseos. En 70 kilómetros, Gold Coast comprende algunas de las playas más divinas del mundo. Así que podrás pasear todo el día y dejar que la arena te masajee los pies sin tener que salir de la ciudad. Despiértate con vistas al océano en el Vue Broadbeach, un hotel contemporáneo ubicado a orillas del agua. El alojamiento también cuenta con piscina, terraza y zona de barbacoa. Además, gracias a su ubicación céntrica, podrás salir a conocer la ciudad a pie.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Page5
