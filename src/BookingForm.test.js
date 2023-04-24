import { render, screen } from "@testing-library/react";
import ReservationForm from "./Components/Reservation/ReservationForm";

test('Renders the BookingForm heading', () => {
    render( <ReservationForm /> );
    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
})