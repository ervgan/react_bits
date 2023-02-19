import BookingForm from './BookingForm';
import {useReducer} from 'react';
import {fetchAPI, submitAPI} from '../API';

const Reservation = () => {

    const updateTimes = (date) => {
        return (
            fetchAPI(date)
        );
    }

    const submitForm = (formData) => {
        return (
            submitAPI(formData)
        )
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
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
        </>
    );
}

export default Reservation;