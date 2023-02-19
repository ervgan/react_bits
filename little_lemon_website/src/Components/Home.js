import Reservation from './Hero';
import Specials from  './Specials';
import Testimonials from './Testimonials';
import About from './About';

const Home = () => {

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

export default Home;