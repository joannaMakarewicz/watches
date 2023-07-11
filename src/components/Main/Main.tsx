import React from "react";
import CardComponent from "./CardComponent/CardComponent";
import sportImg from "../../assets/sport2.jpg";
import menImg  from "../../assets/men1.jpg";
import womanImg  from "../../assets/woman2.jpg";
import "../Main/Main.scss";

const Main = () => {
  const input = [
    { id:1, title: "Womens", text: "Opis zegarka dla kobiet", photo:womanImg},
    { id:2, title: "Mens", text: "Opis zegarka dla mężczyzn", photo:menImg },
    { id:3, title: "Sports", text: "Opis zegarka sportowego", photo:sportImg },
  ];


  return (
    <div className="main m-0">
      {input.map((el) => {
        return <CardComponent title={el.title} key={el.id} text={el.text} photo={el.photo}/>;
      })}
    </div>
  );
};

export default Main;
