import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage ";
import BookingPage from "./BookingPage";
import Menu from "./menu";
import About from "./About";
import Order from "./Order";
import Login from "./login";

function Main(props) {
    return (
        <main>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
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