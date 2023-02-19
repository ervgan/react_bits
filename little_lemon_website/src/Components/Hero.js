import React from "react";
import HeroImage from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <header>
            <article className="hero">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservation">Reserve a table</Link>
                </section>
                <section className="hero-image">
                    <img src={HeroImage} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}

export default About;