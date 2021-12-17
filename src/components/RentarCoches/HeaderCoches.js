import React ,{useState} from 'react'
import '../../styles/AlquilerCoches/HeaderCoches.scss'
import { Container, Row, Col, Alert, InputGroup, FormControl, Button } from 'react-bootstrap';

const HeaderCoches = () => {

    return (
      <div className="cab">
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
              <Alert variant="danger">
                <Alert.Heading
                  style={{
                    fontSize: "1rem",
                    marginBottom: ".1rem",
                    fontWeight: 300,
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  Vehículos limpios. Flexibilidad en tu reserva. Distancia de
                  seguridad en los mostradores.
                </Alert.Heading>
                <p style={{ textAlign: "center" }}>
                  Estamos trabajando con nuestros colaboradores para que
                  conducir siga siendo seguro.
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
        <Container className="centrado">
          <Row>
            <Col>
              <p class="h3" style={{ fontWeight: "bold" }}>
                Alquiler de coches para cualquier tipo de viaje
              </p>
              <p class="h6">
                Compara las ofertas de las principales empresas de alquiler de
                coches{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="centrado">
          <Row className="justify-content-md-left">
            <Col xs lg="3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                &nbsp; Devolver en el mismo lugar
              </label>
            </Col>
            <Col xs lg="3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                &nbsp;Devolver en otro lugar
              </label>
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
                <FormControl aria-label="First name" />
                <FormControl aria-label="Last name" />
                <FormControl aria-label="Last name" />

                <Button variant="primary">Buscar</Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                &nbsp;Edad del conductor: 30-65 años
              </label>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default HeaderCoches



