import './App.css';
import React from "react";
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials';
import Reserve from './Components/Reserve';

function App() {
  return (
    <>
      <div class="container">
      <Nav/>
      <Reserve/>
      <Specials />
      <Testimonials />
      <About/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
