import React from 'react'
import Layout from '../../layout/Layout'
import Header3 from '../../components/secciones/proximoviaje/Header3';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/secciones/Page1.scss'

const page3 = () => {
    return (
        <>
          <Layout>
                <Header3 />
            </Layout> 
            <Container className="center-1">
                <Row>
                    <Col>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Artículos</a></li>
                                <li class="breadcrumb-item"><a href="#"> Consejos de viaje </a></li>
                                <li class="breadcrumb-item"><a href="#"> 7 viajes en globo que no te puedes perder </a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <Container className="center-2">
                <Row>
                    <Col>
                        <p class="h1" style={{ fontWeight: 'bold' }}>7 viajes en globo que no te puedes perder  </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-3">
                <Row>
                    <Col>
                        <img className="format" src="https://cf.bstatic.com/data/xphoto/1182x887/382/38250948.jpg?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-4">
                <Row>
                    <Col>
                        <p class="h6">
                            Capadocia es famosa por sus chimeneas de hadas, un tesoro natural que es un reclamo para viajeros y viajeras de todo el mundo. Estas delgadas y puntiagudas torres de roca se formaron durante millones de años al paso de los ríos de lava, y verlas desde arriba es impresionante. En un día cualquiera del año, hay montones de globos aerostáticos flotando en el horizonte y adornándolo con multitud de colores.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-5">
                <Row>
                    <Col>
                        <img className="format" src="https://cf.bstatic.com/data/xphoto/1182x887/382/38250968.jpg?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-6">
                <Row>
                    <Col>
                        <p class="h6">
                            En el valle del Loira podrás ver la panorámica francesa por excelencia mientras te desplazas suavemente sobre viñedos, ríos y bosques en cuestión de minutos. Prueba uno de los paseos más populares, el que se eleva por encima del magnífico castillo de Chenonceau. Y asómate por el cesto de mimbre para ver qué pasa allí abajo. Si vas entre abril y octubre, el castillo está abierto y puedes visitarlo también a pie.

                            Las salidas suelen hacerse por la mañana temprano o a media tarde, según las condiciones meteorológicas. Cuando ya pises tierra firme, descansa en el lujoso Le Pavillon Des Lys, que está a solo cinco minutos a pie del castillo de Amboise.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-7">
                <Row>
                    <Col>
                      <img className="format" src="https://cf.bstatic.com/data/xphoto/1182x887/382/38250961.jpg?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-8">
                <Row>
                    <Col>
                        <p class="h6">  El Ártico canadiense, en concreto Iqaluit, es un destino codiciado por las personas aficionadas a los globos aerostáticos. Estas excursiones en globo te brindan una oportunidad (de las que solo se presentan una vez en la vida) de volar entre las comunidades del norte, e incluso por los casquetes de hielo, desde la Isla de Baffin hasta Groenlandia.

                            Mentalízate para enfrentarte a los elementos. Los paseos en globo se hacen en invierno para poder disfrutar de la belleza del hielo en todo su esplendor. Al final del día, entra en calor en el The Frobisher Inn. Tiene una ubicación céntrica y un centro de fitness. Algunas habitaciones también cuentan con zona de cocina.</p>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default page3
