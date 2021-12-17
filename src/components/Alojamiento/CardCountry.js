import React from "react";
import { Card } from "react-bootstrap";

const CardCountry = ({ title, url}) => {
  return (
    <Card style={{ cursor: "pointer"}}>
      <Card.Img src={url} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title
          style={{
            textOverflow: 'clip',
            color: "#fffbfb",
            textShadow: "2px 2px 2px #000",
            fontWeight: "bold",
             
          }}
        >
          {title}
        </Card.Title>
      
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardCountry;
