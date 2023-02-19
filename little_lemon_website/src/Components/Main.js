import {Routes, Route} from 'react-router-dom';
import About from './About';
import Hero from './Hero';
import Home from './Home';
import Login from './Login';
import Reservation from './Reservation';
import Order from './Order';
import Menu from './Menu';

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

            <Route path="/reservation" element= {
                <Reservation />
            } />

            <Route path="/order" element= {
            <Order />
            } />

            <Route path="/login" element= {
            <Login />
            } />

            <Route path="/menu" element= {
            <Menu />
            } />

        </Routes>
    );
}

export default Main;