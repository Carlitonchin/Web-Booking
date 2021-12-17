import React from 'react'
import { Container, Row, Col, Alert, Form } from 'react-bootstrap';
import '../../styles/TaxiAereopuerto/Tax.scss'
import img1 from '../../images/location.png'
import img2 from '../../images/flujo.png'

const PageTwo = () => {
    return (
      <>
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
                <p style={{ textAlign: "center" }}>
                  Te protegemos durante la COVID-19
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
        <Container className="center">
          <Row>
            <Col>
              <p class="h5" style={{ fontWeight: "bold" }}>
                Reserva un taxi desde o al aeropuerto
              </p>
              <p class="h6">
                Traslados cómodos para ir a tu alojamiento y volver al
                aeropuerto{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {" "}
                        Ida{" "}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        {" "}
                        Ida y Vuelta{" "}
                      </label>
                    </div>
                  </blockquote>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div className="grid-location">
                      <div>
                        <img src={img1} />
                      </div>
                      <div>
                        <Form.Control
                          size="lg"
                          type="text"
                          placeholder="Lugar de recogida"
                        />
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <p class="h5" style={{ fontWeight: "bold", marginTop: "50px" }}>
                Reservar un traslado al aereopuerto ahora es mas facil
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="grid-ofers">
            <div>
              <Row>
                <Col>
                  <p class="h5">Reserva Taxi para el Aereopuerto</p>
                  <p class="h6">
                    La confirmacion es inmediatay, si cambias de planes, puedes
                    cancelar hasta 24 horas antes de la hora de recogida
                  </p>
                </Col>
              </Row><br/><br/>
              <Row>
                <Col>
                  <p class="h5">Reunete con el conductor</p>
                  <p class="h6">
                    El conductor te estara esperando cuando llegues y te dara tu
                    coche , ademas , estara pendiente de tu vuelo
                  </p>
                </Col>
              </Row><br/><br/>
              <Row>
                <Col><p class="h5">LLega tu destino</p>
                  <p class="h6">
                    LLega a tu destino de forma rapida y segura
                  </p></Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col>
                  <img src={img2} />
                </Col>
              </Row>
             
            </div>
          </div>
        </Container>
      </>
    );
}

export default PageTwo
