import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Home from "./Home";
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar";
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import Footer from "./Footer";

function App() {
  return (
    <>
    <Main>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/service" Component={Service}/>
      </Routes>
    </Main>
        <Footer/> 
    </>
  )
}

export default App;
