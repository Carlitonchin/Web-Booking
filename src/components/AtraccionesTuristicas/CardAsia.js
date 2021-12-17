import React from 'react'
import { Card } from "react-bootstrap";

const CardAsia = ({  url }) => {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={url} />
      </Card>
    );
}

export default CardAsia
