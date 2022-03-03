import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Footer from "./layouts/Footer";
import { Header } from "./layouts/Header";
import Home from "./views/home";
import Register from "./views/Register";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>

    <Footer />
  </BrowserRouter>,
  rootElement
);
