import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import {useEffect} from "react";

function App() {
    //TODO: proper login, axios data from get, send data, canvas, clock, add redux?


    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    }

    useEffect( async () => {
        await fetchData();
    })


  return (
    <BrowserRouter>
        <button onClick={fetchData}>Get</button>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
