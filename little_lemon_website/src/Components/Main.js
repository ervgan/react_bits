import {Routes, Route} from 'react-router-dom';
import About from './About';
import Hero from './Hero';
import Home from './Home';
import Login from './Login';
import Order from './Order';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element= {
            <Home />
            } />

            <Route path="/about" element={
            <About />
            } />

            <Route path="/hero" element= {
            <Hero />
            } />

            <Route path="/order" element= {
            <Order />
            } />

            <Route path="/login" element= {
            <Login />
            } />

        </Routes>
    );
}

export default Main;