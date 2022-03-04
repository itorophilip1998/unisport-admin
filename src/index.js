import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sidebar from "./layouts/Sidebar";
import { Header } from "./layouts/Header";
import Dashboard from "./views/Dashboard"; 
import Login from "./views/Login";
import SetMatch from "./views/SetMatch";
const rootElement = document.getElementById("root");
    /* eslint-disable */ 
render(
  <BrowserRouter>
    <Header />

    <div className="row m-0">
      <div className="col-md-3 col-lg-2 d-none p-0 d-md-block">
        <Sidebar />
      </div>
      <div className="col-md-9  mx-auto d-none d-md-block shadow bg-light border rounded-x my-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/set-match" element={<SetMatch/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>,
  rootElement
);
