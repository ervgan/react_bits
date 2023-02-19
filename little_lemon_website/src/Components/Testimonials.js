import React from 'react';
import TestimonialCard from './cards/TestimonialCard';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard name="James Larich" description="This is the best Italian food that I've ever had!"/>
                <TestimonialCard name="Maverick Jak" description="We love the authentic and family vibes in this restaurant."/>
                <TestimonialCard name="Jessica Fire" description="The food was excellent but for me it was the friendly staff that makes this
                the best Italian restaurant in town."/>
                <TestimonialCard name="Lara Gabrick" description="Great good and setting for any type of meal :) Definitely recommend it"/>
            </section>
        </section>
    );
}

export default Testimonials;