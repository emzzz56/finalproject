import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage ";
import BookingPage from "./BookingPage";
import Menu from "./menu";
import About from "./About";
import Order from "./Order";
import Login from "./login";
import { useState } from "react";

function Main(props) {
    const availableTimes  = [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
    const[restime, setrestime] = useState({availableTimes: availableTimes});
    return (
        <main>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage rtime={{restime, setrestime}} />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
            </BrowserRouter>
        </main>
    );
}

export default Main;