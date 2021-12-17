import React, {useState} from 'react'
import '../../styles/shouse2.scss'
import { Container, Row, Col } from 'react-bootstrap';
import CardSection from '../../components/CardSection';
import Aside from '../../layout/Aside';

const House2 = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [destinos, setDestinnos] = useState([
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/25014074.webp?k=0e3fcdf764f5f681a4fb9eab92b541d178be27f69c73c53967d92345227647f8&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
    
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/217640704.webp?k=e61c431ec28f26eccd7d5e89e39ba09e3688941b822fa62d27c8ffd0a3411145&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/248269130.webp?k=aa557a3e3eaaefdc7dcbf93e1fd8e079fbcf8d7cacbee119441df0abdf77624f&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/25014074.webp?k=0e3fcdf764f5f681a4fb9eab92b541d178be27f69c73c53967d92345227647f8&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/13125860.webp?k=8faf7397d7827b3a946977284021d264d997f65284cf67a6645d496a9d96b18f&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/251449152.webp?k=66da0c795ceecb8b62237cafbcdcf650bc7536361dc149e42479d52adb37122a&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/237963984.webp?k=7048fb9f0821655d60cbfc8622682d62fa178d377c3062cd6f25ab2afcfb5ebe&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/square200/222460302.webp?k=5c2177d9e1dfa858d365c069fd0981ec9329184b1a2108af5ce7793dfc9e27dc&o=&s=1",
          calificacion: "Muy bien",
          comentario: "243 comentarios",
          titulo: "AG Apartments",
          subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
          descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
        },
    
      ])
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="layout">
                            <div className="aside">
                                <Aside />
                            </div>
                            <div className="section">
                                <section>
                                    {destinos.map((dest) => {
                                        return (
                                            <CardSection
                                                url={dest.url}
                                                calificacion={dest.calificacion}
                                                comentario={dest.comentario}
                                                titulo={dest.titulo}
                                                subtitulo={dest.subtitulo}
                                                descripcion={dest.descripcion}
                                            />
                                        );
                                    })}
                                </section>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default House2
