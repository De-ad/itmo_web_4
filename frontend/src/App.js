import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import PropTypes from "prop-types";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}



export default App;
