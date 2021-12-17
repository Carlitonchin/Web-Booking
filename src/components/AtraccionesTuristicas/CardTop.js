import React from 'react'
import { Card } from "react-bootstrap";

const CardTop = ({ destino, descripcion, url }) => {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{destino}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default CardTop
