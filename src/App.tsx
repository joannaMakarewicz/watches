import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div>
      <Navbar/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
