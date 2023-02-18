import './App.css';
import React from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
