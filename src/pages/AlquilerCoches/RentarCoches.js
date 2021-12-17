import React ,{useState} from 'react'
import Layout from '../../layout/Layout'
import HeaderCoches from '../../components/RentarCoches/HeaderCoches'
import { Container, Row, Col, Accordion  } from 'react-bootstrap';
import CarCards from '../../components/RentarCoches/CarCards';

const RentarCoches = () => {

    const[destinos,setDestinnos] = useState([
        {  
            url:"https://cf.bstatic.com/xdata/images/city/360x240/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o=",
            destino: "Londres",
            descripcion: "Alquiler de coches en 75 lugares de recogida",
            precio: "Desde US$47,58 al día"
        },
        {
            url:"https://cf.bstatic.com/xdata/images/city/360x240/613088.webp?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
            destino: "París ",
            descripcion: "Alquiler de coches en 90 lugares de recogida ",
            precio: "Desde US$51,10 al día"
        },
        {
            url:"https://cf.bstatic.com/xdata/images/city/360x240/971353.webp?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o=", 
            destino: "Madrid",
            descripcion: "Alquiler de coches en 40 lugares de recogida",
            precio: "Desde US$46,27 al día"
        },
        {
            url:"https://cf.bstatic.com/xdata/images/city/360x240/619932.webp?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=",
            destino: "Dubái",
            descripcion: "Alquiler de coches en 91 lugares de recogida",
            precio: "Desde US$41,82 al día"
        },
        {
             url:"https://cf.bstatic.com/xdata/images/city/360x240/645577.webp?k=81d61cb4e120af4d4218386546a117b77ef18dfcf3727d186ec3a1aad60f38fe&o=",
            destino: "Málaga",
            descripcion: "Alquiler de coches en 6 lugares de recogida ",
            precio: "Desde US$41,05 al día"
        },
        {
            url:"https://cf.bstatic.com/xdata/images/city/360x240/619965.webp?k=8b2bc851e921e03c4565fe28e4f608c30223227743b3b2cc56c476a5ef04d3da&o=",
            destino: "Lisboa",
            descripcion: "Alquiler de coches en 18 lugares de recogida",
            precio: "Desde US$22,85 al día"
        },
    ])

    return (
      <div>
        <Layout>
          <HeaderCoches />
        </Layout>
        <Container className="centrado2">
          <Row>
            <Col>
              <p class="h4" style={{ fontWeight: "bold" }}>
                Empresas populares de alquiler de coches
              </p>
            </Col>
          </Row>
        </Container>
        <div className="grid">
          <img src="https://cdn.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/suppliers/flat/sixt_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/supplier_logos/enterprise_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/supplier_logos/thrifty_logo_lrg.gif" />
          <img src="https://cdn.rcstatic.com/images/suppliers/flat/sicily_by_car_logo_lrg.gif" />
        </div>
        <Container className="centrado3">
          <Row>
            <Col>
              <p class="h4" style={{ fontWeight: "bold" }}>
                Destinos populares para alquiler de coches
              </p>
            </Col>
          </Row>
        </Container>
        <div className="grid-cards">
          {destinos.map((dest) => {
            return (
              <CarCards
                destino={dest.destino}
                descripcion={dest.descripcion}
                precio={dest.precio}
                url={dest.url}
              />
            );
          })}
        </div>
        <Container className="centrado4">
          <Row>
            <Col>
              <p class="h4" style={{ fontWeight: "bold" }}>
                 Preguntas frecuentes
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Accordion defaultActiveKey="0">
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
        </Container>
        <Container className="centrado5">
          <Row>
            <Col>
              <p class="h4" style={{ fontWeight: "bold" }}>
                Los mejores sitios del mundo para alquilar coches 
              </p>
            </Col>
          </Row>
        </Container>
        <div className="grid-cards1">
           <img src="https://cf.bstatic.com/xdata/images/city/360x240/619644.webp?k=5b21ac6d3d913a54274d6546e60adb2c3c138d661dd1a2bd7b3aed53e9df0b65&o=" />
           <img src="https://cf.bstatic.com/xdata/images/city/360x240/613105.webp?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o=" />
           <img src="https://cf.bstatic.com/xdata/images/city/360x240/968315.webp?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o=" />
          
        </div>
      </div>
    );
}

export default RentarCoches
