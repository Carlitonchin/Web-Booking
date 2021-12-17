import React from 'react'
import Layout from '../../layout/Layout'
import Header1 from '../../components/secciones/proximoviaje/Header1';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/secciones/Page1.scss'
const Page1 = () => {

    return (
        <>
            <Layout>
                <Header1 />
            </Layout>
            <Container className="center-1">
                <Row>
                    <Col>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Artículos</a></li>
                                <li class="breadcrumb-item"><a href="#">Destinos</a></li>
                                <li class="breadcrumb-item"><a href="#">5 destinos con alma para un retiro de yoga</a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <Container className="center-2">
                <Row>
                    <Col>
                        <p class="h1" style={{ fontWeight: 'bold' }}>5 destinos con alma para un retiro de yoga </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-3">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/122580880.jpg?k=67893e63f75b7794a6d9fbf3d951ce9e821954bc62d9d79796e90eaaccc701be&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-4">
                <Row>
                    <Col>
                        <p class="h6">
                            Durante el último año, muchas personas han buscado en el yoga un refugio de paz. Ahora que los viajes vuelven a nuestras vidas, descubrimos que uno de cada cuatro viajeros y viajeras dará prioridad a la relajación en su próximo viaje. Así que, si eres una de las muchas personas que buscan unir cuerpo, mente y pasión por los viajes, echa un vistazo a los retiros de yoga que hemos seleccionado alrededor del mundo. Sentirás rejuvenecer cuerpo y alma.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-5">
                <Row>
                    <Col>
                        <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/122580876.jpg?k=3b184971c18f62fa1fd29959866c53ae494be53ec6ef698f155bd54ded7d490a&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-6">
                <Row>
                    <Col>
                        <p class="h6">
                            El Shambhala Estate, en un exuberante enclave tropical, es el lugar ideal para relajarse en Bali. En este lujoso refugio de yoga, escalones de piedra sobre cursos de agua serpenteantes conducen a residencias privadas, y sus piscinas infinitas quedan a cubierto bajo el denso dosel que forma la selva. Liberarse de las tensiones del mundo exterior está más que garantizado, incluso aunque no hagas ni una sola sesión de yoga.

                            Pero si realmente necesitas tu momento mindfulness, el Shambhala Estate ofrece todo un mundo de experiencias holísticas para cuidar de ti: meditación, pilates, yoga, hidroterapia y mucho más. ¿Quieres una experiencia más personal? Los profes con acreditación internacional elaborarán para ti un plan de bienestar personalizado.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="center-7">
                <Row>
                    <Col>
                      <img className="format" src="https://bstatic.com/xdata/images/xphoto/1182x887/122580877.jpg?k=63ef10f6b40631db00342adc711054a7392a141de7380ea5e88ce01a1fccf05c&o=?size=S" />
                    </Col>
                </Row>
            </Container>
            <Container className="center-8">
                <Row>
                    <Col>
                        <p class="h6"> El Tri, a orillas de la tranquila laguna de Koggala, está rodeado por plantaciones de canela con un aroma de lo más dulce. Las paredes del complejo están hechas con madera de las plantaciones de los alrededores y se fusionan con el entorno natural. Solo el ocasional fulgor de un techo de paja o el brillo del agua de las piscinas de borde infinito revelan su ubicación.

                            El complejo es obra de Rob Drummond, un referente en el campo de la sostenibilidad. La naturaleza se cuela por todos los rincones, con inofensivos gecos campando a sus anchas y pequeños alcedínidos posados junto a las piscinas en tonos tierra. La idea de relajarse y disfrutar simplemente de la cadencia de la naturaleza con un zumo verde en la mano es tentadora, pero también existe la posibilidad de probar una gran variedad de servicios de bienestar. Lara, la mujer de Rob, organiza sesiones de yoga en una sala sobre las copas de los árboles escondida entre el bambú, y en su lista de alumnos figuran nombres como el de Gerard Butler y Sienna Miller. Como el Tri está cerca de la costa, podrás dejar que las olas del océano Índico se lleven todo tu estrés.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Page1
