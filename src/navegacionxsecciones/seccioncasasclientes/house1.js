import React, { useState } from 'react'
import '../../styles/secciones/proximoviaje/shouse1.scss'
import { Container, Row, Col } from 'react-bootstrap';
import CardSection from '../../components/secciones/casasclientes/CardSection';
import Aside from '../../layout/Aside';
import CommentsComponent from '../../components/Search/CommentsComponent';

const House1 = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [destinos, setDestinnos] = useState([
    {
      url: "https://cf.bstatic.com/xdata/images/hotel/square200/25014074.webp?k=0e3fcdf764f5f681a4fb9eab92b541d178be27f69c73c53967d92345227647f8&o=&s=1",
      calificacion: "Muy bien",
      comentario: "243 comentarios",
      titulo: "AG Apartments",
      subtitulo: "Sants-Montjuïc, BarcelonaMostrar en el mapa",
      descripcion: "El Apartamentos AG ocupa un edificio restaurado de 1893 y se encuentra en el barrio Poble Sec de Barcelona. Hay WiFi gratuita."
    }
  ])

  let comments = [
    {
      userName:"Carlos",
      country:"Cuba",
      imgUrl:"./favicon.ico",
      text:"Me parece un excelente hotel, tiene excelentes vistas, el servicio es es muy bueno, la comida exquisita, 5 estrellas (literalmente)"
    },
    {
      userName:"Carlos",
      country:"Cuba",
      imgUrl:"./favicon.ico",
      text:"Me parece un excelente hotel, tiene excelentes vistas, el servicio es es muy bueno, la comida exquisita, 5 estrellas (literalmente)"
    }
    ,
    {
      userName:"Carlos",
      country:"Cuba",
      imgUrl:"./favicon.ico",
      text:"Me parece un excelente hotel, tiene excelentes vistas, el servicio es es muy bueno, la comida exquisita, 5 estrellas (literalmente)"
    },
    {
      userName:"Carlos",
      country:"Cuba",
      imgUrl:"./favicon.ico",
      text:"Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio Me parece un excelente hotel, tiene excelentes vistas, el servicio es es muy bueno, la comida exquisita, 5 estrellas (literalmente)"
    }
  ];

  return (
    <>
    <br/>
    <CommentsComponent comments={comments}/>
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
  );
}

export default House1
