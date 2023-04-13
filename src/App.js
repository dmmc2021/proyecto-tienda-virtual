import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pruebas from "./components/Pruebas/Pruebas";
import "./css/style.css";
import Title from './components/Title/Title';
import MarketWindow from "./components/MarketWindow/MarketWindow";

function App() {
  return (
    <>
    <Title/>
    <NavBar/>
    <MarketWindow/>
    <Pruebas/>
    </>
  );
}

export default App;
