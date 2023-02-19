import Reservation from './Hero';
import Specials from  './Specials';
import Testimonials from './Testimonials';
import About from './About';
export default function Homepage() {
    return (
        <>
        <Reservation />
        <main>
            <Specials />
            <Testimonials />
            <About />
        </main>
      </>
    );
}