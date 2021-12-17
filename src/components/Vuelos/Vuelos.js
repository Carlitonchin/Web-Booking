import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../styles/Vuelos/Vuelos.scss'
const Vuelos = () => {
    return (
      <>
        <Container className="center1">
          <Row>
            <Col>
              <p class="h3">
                Encuentra un vuelo flexible para tu próximo viaje
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container className="center2">
          <Row className="justify-content-md-left">
            <Col xs lg="2">
              <select class="form-select" aria-label="Default select example">
                <option selected>Ida y Vuelta</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </select>
            </Col>
            <Col xs lg="2">
              <select class="form-select" aria-label="Default select example">
                <option selected>1 adulto</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </select>
            </Col>
            <Col xs lg="2">
              <select class="form-select" aria-label="Default select example">
                <option selected>Turista Superior</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </select>
            </Col>
          </Row>
        </Container>
        <Container className="center">
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
                <FormControl aria-label="Last name" />
                <Button variant="primary">Buscar</Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Vuelos
