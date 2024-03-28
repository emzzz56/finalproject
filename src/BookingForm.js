import { useState } from "react";
function BookingForm(props) {
    const occasions = [
        "Birthday", "Anniversary"
    ];
    const[resdate, setresdate] = useState("");
    const[guests, setguests] = useState("");
    const[occasion, setoccasion] = useState({occasions: occasions});
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking Created!");
      };
      const rtime = props.rtime
    return (
        <>
            <form method="post">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={resdate} onChange={(e) => {setresdate(e.target.value)}} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={rtime.restime} onChange={(e) => {rtime.setrestime(e.target.value)}}>
                    {rtime.restime.availableTimes.map((availableTime) => {
                        return (<option>{availableTime}</option>);
                    } )}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setguests(e.target.value)}} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => {setoccasion(e.target.value)}}>
                    {occasions.map((occasion) => {
                        return (<option>{occasion}</option>);
                    })}
                </select>
                <input type="submit" onClick={handleSubmit} value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;