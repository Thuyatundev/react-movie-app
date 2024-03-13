import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Notfound from "./component/Notfound";
import Detail from "./component/Detail";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies/detail/:id" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
