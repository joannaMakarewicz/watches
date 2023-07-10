import React from "react";
import CardComponent from "./CardComponent/CardComponent";
import "../Main/Main.scss";

const Main = () => {
  const input = [
    { id:1, title: "Womens", text: "Opis zegarka dla kobiet" },
    { id:2, title: "Mens", text: "Opis zegarka dla mężczyzn" },
    { id:3, title: "Sports", text: "Opis zegarka sportowego" },
  ];

  return (
    <div className="main w-100 m-0">
      {input.map((el) => {
        return <CardComponent title={el.title} key={el.id} text={el.text}/>;
      })}
    </div>
  );
};

export default Main;
