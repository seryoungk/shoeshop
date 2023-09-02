import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"; // App.js 파일을 import합니다.
import Detail from "./pages/Detail"; // Detail.js 파일을 import합니다.
import About from "./pages/About"; // About.js 파일을 import합니다.
import Error from "./pages/Error";
import data from "./data";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<Detail shoes={data} />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
