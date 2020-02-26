import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
    <Header text="Сборка"></Header>
    <div className="container">
      <div className="main-menu">
        <h1>ОСИМ</h1>
        <div>
          <div>Журнал СЗ на отгрузку</div>
          
        </div>
      </div>
    </div>
    <Footer text={"© 2016-2020, ФГУ ФНЦ НИИСИ РАН"}></Footer>
    </div>
  );
}

export default App;
