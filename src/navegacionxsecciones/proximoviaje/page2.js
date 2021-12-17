import React from 'react'
import Layout from '../../layout/Layout'
import Header2 from '../../components/secciones/proximoviaje/Header2';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/secciones/Page1.scss'

const Page2 = () => {
    return (
        <>
            <Layout>
                <Header2 />
            </Layout>
            <Container className="center-1">
                <Row>
                    <Col>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Artículos</a></li>
                                <li class="breadcrumb-item"><a href="#">Destinos</a></li>
                                <li class="breadcrumb-item"><a href="#">Destinos para inspirarse: San Juan, Puerto Rico</a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <Container className="center-2">
                <Row>
                    <Col>
                        <p class="h1" style={{ fontWeight: 'bold' }}>Destinos para inspirarse: San Juan, Puerto Rico  </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-3">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/123808376.jpg?k=ff37115065d7b9ec5b82d7f4ced8a2a987441af32c515bd16ed82126cd2fb9d1&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-4">
                <Row>
                    <Col>
                        <p class="h6">
                        El tiempo se detiene en el Viejo San Juan. Casas coloniales de mil colores dibujan las calles adoquinadas que cruzan la plaza Colón hasta la Puerta de San Juan, del siglo XVII, que en su día fue la entrada principal de la ciudad amurallada. A lo largo de la orilla, fortalezas vigilan desde altos acantilados, y sus cañones aún siguen apuntando hacia el mar. Justo en el límite con el centro histórico
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-5">
                <Row>
                    <Col>
                        <img className="format" src="https://cf.bstatic.com/data/xphoto/1182x887/192/19206739.jpg?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-6">
                <Row>
                    <Col>
                        <p class="h6">
                            Mundos muy diferentes se encuentran y colisionan en San Juan, la vibrante capital de Puerto Rico, un crisol de culturas indígenas, europeas, estadounidenses y afrocaribeñas forjado a fuego lento y con infinitas atracciones turísticas para deleitar a cualquier tipo de viajero o viajera.

                            El tiempo se detiene en el Viejo San Juan. Casas coloniales de mil colores dibujan las calles adoquinadas que cruzan la plaza Colón hasta la Puerta de San Juan, del siglo XVII, que en su día fue la entrada principal de la ciudad amurallada. A lo largo de la orilla, fortalezas vigilan desde altos acantilados, y sus cañones aún siguen apuntando hacia el mar. Justo en el límite con el centro histórico, la costa rocosa da paso a la playa de arena suave de El Escambrón, un lugar resguardado perfecto para nadar y hacer snorkel.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-7">
                <Row>
                    <Col>
                        <img className="format" src="https://cf.bstatic.com/data/xphoto/1182x887/192/19206790.jpg?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-8">
                <Row>
                    <Col>
                        <p class="h6"> Este moderno hotel está cerca del paseo marítimo, en el exclusivo barrio de Condado. Su club de playa y la piscina al aire libre han recibido muy buenas valoraciones por parte de los clientes y clientas de Booking.com, que también destacan la amabilidad del personal. Las habitaciones y suites son luminosas, y algunas tienen vistas al mar y cocina totalmente equipada.

                            El complejo es obra de Rob Drummond, un referente en el campo de la sostenibilidad. La naturaleza se cuela por todos los rincones, con inofensivos gecos campando a sus anchas y pequeños alcedínidos posados junto a las piscinas en tonos tierra. La idea de relajarse y disfrutar simplemente de la cadencia de la naturaleza con un zumo verde en la mano es tentadora, pero también existe la posibilidad de probar una gran variedad de servicios de bienestar. Lara, la mujer de Rob, organiza sesiones de yoga en una sala sobre las copas de los árboles escondida entre el bambú, y en su lista de alumnos figuran nombres como el de Gerard Butler y Sienna Miller. Como el Tri está cerca de la costa, podrás dejar que las olas del océano Índico se lleven todo tu estrés.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Page2
