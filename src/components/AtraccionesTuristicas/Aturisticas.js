import React from 'react'
import '../../styles/AtraccionesTuristicas/Aturistas.scss'
import { Container, Row, Col, Alert, InputGroup, FormControl, Button } from 'react-bootstrap';

const Aturisticas = () => {
    return (
      <div className="aheader">
        <Container
          fluid="xl"
          style={{
            maxWidth: "1920px",
            paddingRight: "1px",
            paddingLeft: "1px",
          }}
        >
          <Row>
            <Col>
              <Alert
                variant="warning"
                style={{
                  fontSize: "1rem",
                  marginBottom: ".1rem",
                  fontWeight: "bold",
                  lineHeight: 1,
                  textAlign: "center",
                  color: "black",
                }}
              >
                Informacion relacionada con el coronavirus (COVID-19)
              </Alert>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row>
            <Col>
              <p class="h3" style={{ fontWeight: "bold" }}>
                Encuentra y reserva una experiencia fantástica
              </p>
              <p class="h6" style={{ marginRight: "160px" }}>
                Conoce el destino más a fondo y aprovecha al máximo el viaje
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="centrado1">
          <Row
            style={{
              backgroundColor: "yellow",
              paddingTop: 5,
              height: 47,
            }}
          >
            <Col
              style={{
                paddingRight: 2,
                paddingLeft: 2,
              }}
            >
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Destinos,Museos,otros...."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary">
                  Buscar
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      
      </div>
    );
}

export default Aturisticas
