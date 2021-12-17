import React from 'react'
import '../../../styles/secciones/tipos-de-alojamiento/sHeaderHotel.scss'
import { Container, Row, Col, Alert } from 'react-bootstrap';

const HeaderHotel = () => {
    return (
       <div className="hotel-header">
                <Container className="center-1">
                    <Row>
                        <Col>
                            <p class="h3" 
                              style={{
                                
                                  padding: '1px 1px 1px',
                                  fontSize: '32px',
                                  //lineHeight: '4px',
                                  fontWeight: 600
                                }}
                            >
                             Encuentra el hotel perfecto en Booking.com
                            </p>
                            <p class="h6" style={{marginTop: -14}}>Hoteles baratos, habitaciones de lujo y mucho más </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="center-2">
                    <Row>
                        <Col>
                            <div className="grid">
                               <div className="input-1">
                               <input type="text" class="form-control" placeholder="¿Adonde vas?" aria-label="Username" aria-describedby="basic-addon1" />
                               
                               </div>
                               <div className="input-2">
                                <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                               </div>
                               <div className="input-3">
                                <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="center-3">
                    <Row>
                        <Col>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Viajo por trabajo
                            </label>
                        </div>
                        </Col>
                    </Row>
                </Container>
            
       </div>
    )
}

export default HeaderHotel
