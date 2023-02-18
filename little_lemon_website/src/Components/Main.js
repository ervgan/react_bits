import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';
import Confirmation from './Confirmation';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element= {
            <Home />
            } />

            <Route path="/about" element={
            <About />
            } />

            <Route path="/reservations" element= {
            <Reservations />
            } />

            <Route path="/order" element= {
            <Order />
            } />

            <Route path="/login" element= {
            <Login />
            } />

            <Route path="/confirmation" element= {
                <Confirmation />
            } />
        </Routes>
    );
}