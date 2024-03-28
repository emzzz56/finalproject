import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <>
        <BookingForm rtime={props.rtime} />
        </>
    );
}

export default BookingPage;