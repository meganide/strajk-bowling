import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingInfo from "./BookingInfo";
import { beforeEach } from "vitest";

function getInputs() {
	return {
		dateInput: screen.getByRole("textbox", {
			type: "date"
		}),
		timeInput: screen.getByRole("textbox", {
			type: "text",
			name: "time"
		}),
		peopleInput: screen.getByRole("spinbutton", {
			name: "people"
		}),
		lanesInput: screen.getByRole("spinbutton", { name: "lanes" })
	};
}

describe("BookingInfo", () => {
	beforeEach(() => {
		render(<BookingInfo />);
	});

	it("should render date input", () => {
		const { dateInput } = getInputs();
		expect(dateInput).toBeInTheDocument();
	});

	it("should update date input", async () => {
		const { dateInput } = getInputs();
		await userEvent.type(dateInput, "2021-10-10");
		expect(dateInput.value).toBe("2021-10-10");
	});

	it("should render time input", () => {
		const { timeInput } = getInputs();
		expect(timeInput).toBeInTheDocument();
	});

	it("should update time input", async () => {
		const { timeInput } = getInputs();
		await userEvent.type(timeInput, "12:00");
		expect(timeInput.value).toBe("12:00");
	});

	it("should render number of people input", () => {
		const { peopleInput } = getInputs();
		expect(peopleInput).toBeInTheDocument();
	});

	it("should update number of people input", async () => {
		const { peopleInput } = getInputs();
		await userEvent.type(peopleInput, "2");
		expect(peopleInput.value).toBe("2");
	});

	it("should render number of lanes input", () => {
		const { lanesInput } = getInputs();
		expect(lanesInput).toBeInTheDocument();
	});

	it("should update number of lanes input", async () => {
		const { lanesInput } = getInputs();
		await userEvent.type(lanesInput, "2");
		expect(lanesInput.value).toBe("2");
	});
});
