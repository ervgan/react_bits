import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';

test('Renders the BookingForm book table button', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Table");
    expect(headingElement).toBeInTheDocument();
})