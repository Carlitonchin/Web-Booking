import React from 'react'
import Layout from '../../layout/Layout'
import Header4 from '../../components/nexttravel/Header4'
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/nextviajes/Page1.scss'

const Page4 = () => {
    return (
        <>
            <Layout>
                <Header4 />
            </Layout>
            <Container className="center-1">
                <Row>
                    <Col>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Artículos</a></li>
                                <li class="breadcrumb-item"><a href="#">Destinos</a></li>
                                <li class="breadcrumb-item"><a href="#">5 piscinas atractivas en las azoteas de Nueva York </a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <Container className="center-2">
                <Row>
                    <Col>
                        <p class="h1" style={{ fontWeight: 'bold' }}>5 piscinas atractivas en las azoteas de Nueva York </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-3">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/66116730.jpg?k=d0beae121f0cfeab2dff0d801c3c816e47b5c3838a3b0affe27b92daeb1200fc&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-4">
                <Row>
                    <Col>
                        <p class="h6">
                            El 1 Hotel Brooklyn Bridge es un hotel con conciencia ecológica y fachada futurista de cristal situado a orillas del río Este de Nueva York. A pocos pasos del Puente de Brooklyn, ofrece una de las vistas más codiciadas de la ciudad. 
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-5">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/66116745.jpg?k=0d185622266a52b856969486229b99e74acd93be6d0d3638c24159de44b68979&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-6">
                <Row>
                    <Col>
                        <p class="h6">
                            Entre las calles del Lower East Side, en tonos arena y con aires glamurosos, se encuentra el Sixty LES, un refugio con piscina en la azotea y mucho arte. En la planta superior hay una piscina pequeña de aguas azules que dejan entrever una imagen de Andy Warhol pintada en el fondo. La zona de la azotea está decorada con detalles metálicos, en consonancia con los modernos interiores del hotel. Puedes alquilar una cabañita junto a la piscina, un espacio tranquilo con área de bar, sistema de sonido envolvente y zona de refrescos bien surtida.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-7">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1440x810/66116728.jpg?k=fc3bc156c543d24c950eb099bd07e2b2bd2e5eba3553dbefef25648119b437e0&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-8">
                <Row>
                    <Col>
                        <p class="h6">  La esencia cool del The Williamsburg Hotel se respira en todos sus rincones. El hotel, obra de los mismos arquitectos del Soho House Berlin, es un alojamiento moderno con una clase innata. Y la piscina sigue esa misma línea: una larga franja aguamarina se extiende por la planta superior y está rodeada de tumbonas a rayas y plantas. Disfruta de una de las panorámicas más preciadas de Nueva York, de la majestuosa Manhattan y de la arquitectura típica del barrio de Williamsburg, donde el ladrillo rojo es protagonista. Después de darte un chapuzón, tómate algo en la terraza, en la cafetería de la azotea. Intenta quedarte hasta que el sol se ponga y ve a la torreta de agua del hotel, un curioso lugar donde bailar hasta bien entrada la noche.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Page4
