import React from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EC2 from "./pages/EC2";
import ReactEssentails from "./pages/ReactEssentails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="how-to-deploy-node-app-on-ec2" element={<EC2 />} />
        <Route path="react-essentials" element={<ReactEssentails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
