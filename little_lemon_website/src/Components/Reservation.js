import BookingForm from './BookingForm';
import {useReducer} from 'react';

const Reservation = () => {

    /* replacement for Math.random() */
    const seededRandom = (seed) => {
        let m = 2**35 - 31;
        let a = 185852;
        let s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = (date) => {
        let result = [];
        let dt = new Date(date)
        let seed = dt.getDate();
        let random = seededRandom(seed);

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const updateTimes = (date) => {
        return (
            fetchAPI(date)
        );
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <div className='booking-form-header'>
                <div className="booking-form-text">
                    <h2>We are glad you want to reserve a table with us :)</h2>
                    <h3>Please enter your details below</h3>
                </div>
            </div>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    );
}

export default Reservation;