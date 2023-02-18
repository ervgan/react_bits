import React from "react";
import HeroImage from '../assets/Mario and Adrian A.jpg';

const Hero = () => {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <img className="about-1" src={HeroImage} alt="Little Lemon restaurant cuisine 1"></img>
    </article>
    );
}

export default Hero;