
import React from 'react'
import { Card, Button } from "react-bootstrap";


const CarCards = ({ destino, descripcion, precio, url }) => {
    return (
      <Card style={{ width: '25rem'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{destino}</Card.Title>
          <Card.Text>
           {descripcion}
          </Card.Text>
          <Card.Link href="#">{precio}</Card.Link>
        </Card.Body>
      </Card>
    );
}

export default CarCards
