import { beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { getInputs } from "../components/BookingInfo/BookingInfo.test";
import router from "../router";

async function populateInputs() {
	const bookButton = screen.getByRole("button", { name: "strIIIIIike!" });
	const { dateInput, lanesInput, peopleInput, timeInput } = getInputs();
	await userEvent.type(timeInput, "15:00");
	await userEvent.type(peopleInput, "2");
	await userEvent.type(lanesInput, "1");
	await userEvent.type(dateInput, "2023-12-08");
	const addShoeButton = screen.getByRole("button", { name: "+" });

	await userEvent.click(addShoeButton);
	await userEvent.click(addShoeButton);

	const shoeSizeInputs = screen.getAllByTestId("shoe");

	for (const shoeSizeInput of shoeSizeInputs) {
		await userEvent.type(shoeSizeInput, "43");
	}

	await userEvent.click(bookButton);
}

describe("Booking", () => {
	beforeEach(() => {
		render(<RouterProvider router={router} />);
	});

	it("should render book button", () => {
		const bookButton = screen.getByRole("button", { name: "strIIIIIike!" });
		expect(bookButton).toBeInTheDocument();
	});

	it("should show error message when not all fields have been filled out", async () => {
		const bookButton = screen.getByRole("button", { name: "strIIIIIike!" });
		await userEvent.click(bookButton);

		expect(
			screen.getByText(
				"Fill out all the fields and make sure that people and shoes is the same number."
			)
		).toBeInTheDocument();
	});

	it("should show error message when the number of shoes is not equal to the number of people", async () => {
		const { peopleInput, dateInput, lanesInput, timeInput } = getInputs();
		const bookButton = screen.getByRole("button", { name: "strIIIIIike!" });

		await userEvent.type(timeInput, "12:00");
		await userEvent.type(peopleInput, "2");
		await userEvent.type(lanesInput, "1");
		await userEvent.type(dateInput, "2021-10-10");
		await userEvent.click(bookButton);

		expect(
			screen.getByText(
				"Fill out all the fields and make sure that people and shoes is the same number."
			)
		).toBeInTheDocument();
	});

	it("should navigate to confirmation page, generate a unique booking number, and a total price when all fields are populated correctly and book button is clicked", async () => {
		await populateInputs();

		const url = window.location.pathname;
		const bookingNumberInput = screen.getByLabelText("Booking number");
		const expectedBookingNumber = "STR9124FVQK";
		const totalPrice = Number(
			screen.getByText(/sek/i).textContent.split(" ")[0]
		);
		const expectedTotalPrice = 120 * 2 + 100 * 1;

		expect(url).toBe("/confirmation");
		expect(bookingNumberInput.value).toBe(expectedBookingNumber);
		expect(totalPrice).toBe(expectedTotalPrice);
	});
});
