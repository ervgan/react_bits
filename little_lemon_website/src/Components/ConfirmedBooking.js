import {Link} from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <header className="confirmation-header">
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for booking with us!</h4>
            </section>

            <section className="redirect-buttons">
                <Link className="redirect-button" to="/">Go back to Home Page</Link>
            </section>
        </header>
    );
}

export default ConfirmedBooking;