import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import "./index.css";
import { useEffect } from "react";

function App() {
  //TODO: proper login, axios data from get, send data, canvas, clock, add redux?

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
