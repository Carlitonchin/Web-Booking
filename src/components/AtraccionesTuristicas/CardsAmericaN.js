import React from 'react'
import { Card } from "react-bootstrap";

const CardsAmericaN = ({  url }) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={url} />
    </Card>
  );
};

export default CardsAmericaN
