import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../CardComponent/CardComponent.scss";

type CardComponentProps =  {
  photo:string;
  title:string;
  text:string;
}

const CardComponent = ({title, text, photo}:CardComponentProps) => {

  return (
    <Card className="cardComponent">
      <Card.Img variant="top" src={photo} className="cardComponent__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Show</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
