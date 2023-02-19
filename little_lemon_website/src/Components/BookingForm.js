import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = (props) => {
    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );
    const [formData, setFormData] = useState({});
    /*const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({
        fName: "",
        email: "",
        tel: "",
        date: "",
      });
    const [popup, setPopup] = useState(<div></div>);*/



    /*const successPopup = (
        <div className="popup">
        <h2>Booking confirmed.</h2>
        <p>We can't wait to welcome you in our restaurant :)</p>
        </div>
    )

    const failPopup = (
        <div className="popup">
        <h2>Booking Failed.</h2>
        <p>Please check your input details.</p>
        <p>{JSON.stringify(errors)}</p>
        </div>
    )

    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const checkFormValidity = () => {
        const newErrors = {};
        let formIsValid = true;

        if (fName === "") {
          newErrors.fName = "Please enter your first name";
          formIsValid = false;
        }
        if (!isValidEmail(email)) {
          newErrors.email = "Please enter a valid email address";
          formIsValid = false;
        }

        if (tel === "") {
          newErrors.tel = "Please enter your phone number";
          formIsValid = false;
        }

        setErrors(newErrors);
        setIsValid(formIsValid);
      };*/

    const handleDateChange = (e) => {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
        setFormData({ ...formData, [e.target.name]: date });
        /*checkFormValidity();*/
    }

    const handleFirstNameChange = (e) => {
        setFName(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });

        /*checkFormValidity();*/
    }

    const handleTelChange = (e) => {
        setTel(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handleLastNameChange = (e) => {
        setLName(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handlePeopleChange = (e) => {
        setPeople(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handlePreferencesChange = (e) => {
        setPreferences(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handleCommentsChange = (e) => {
        setComments(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
        /*checkFormValidity();*/
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*checkFormValidity();
        if (isValid){
            setPopup(successPopup)
        } else {
            setPopup(failPopup)
        }*/
        if (props.submitForm(formData)){
            navigate("/confirmedBooking");
        }
      };

    return (
       <form className="reservation-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input type="text" id="fName" placeholder="First Name"
                required minLength={2} maxLength={50}
                value={fName}
                onChange={handleFirstNameChange}></input>
            </div>

            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input type="text" id="lName" placeholder="Last Name"
                minLength={2} maxLength={50}
                value={lName}
                onChange={handleLastNameChange}></input>
            </div>

            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input type="email" id="email" placeholder="Email"
                value={email}
                required minLength={4} maxLength={200}
                onChange={handleEmailChange}></input>
            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input type="tel" id="phonenum" placeholder="(xx)-xxxxxxxx"
                value={tel}
                required minLength={10} maxLength={25}
                onChange={handleTelChange}></input>
            </div>

            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input type="number" id="people" placeholder="Number of People"
                value={people}
                required min={1} max={100}
                onChange={handlePeopleChange}></input>
            </div>

            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input type="date" id="date" required
                value={date}
                onChange={handleDateChange}></input>
            </div>

            <div>
                <label htmlFor="time">Select Time</label> <br></br>
                <select id="time" required>
                    {finalTime}
                </select>
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select id="occasion"
                value={occasion}
                onChange={handleOccasionChange}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select id="preferences"
                value={preferences}
                onChange={handlePreferencesChange}>
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>

            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments"
                value={comments}
                onChange={handleCommentsChange}>
                </textarea>
            </div>

            <div>
                <br></br>
                <small><p id="booking-warning">Note: You cannot edit your reservation after submission. Please call us if you realized you made a mistake.</p></small>
                <button className="action-button" aria-label="On Click">Book Table</button>
            </div>
       </form>
    );
}

export default BookingForm;