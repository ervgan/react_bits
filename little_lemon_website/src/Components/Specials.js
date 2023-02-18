import React from "react";
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';
import SpecialCard from './cards/SpecialCard';

const Specials = () => {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href="/" target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives."/>
                <SpecialCard image={Bruchetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>
        </section>
    );
}

export default Specials;