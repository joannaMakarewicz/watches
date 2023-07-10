import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bcg from "../../../assets/background.png";

type CardComponentProps =  {
  title:string;
  text:string
}

const CardComponent = ({title, text}:CardComponentProps) => {

  return (
    <Card>
      <Card.Img variant="top" src={bcg} />
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
