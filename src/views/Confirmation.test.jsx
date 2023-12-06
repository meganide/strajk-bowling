import { RouterProvider } from "react-router-dom";
import router from "../router";
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { populateInputs } from "./Booking.test";

describe("Confirmation", () => {
	beforeEach(() => {
		render(<RouterProvider router={router} />);
	});

	it("should be able to navigate back and forth between booking page and confirmation page", async () => {
		await populateInputs();
		let url = window.location.pathname;
		expect(url).toBe("/confirmation");

		await userEvent.click(screen.getByRole("navigation"));
		await userEvent.click(
			screen.getByRole("link", {
				name: /booking/i
			})
		);
		url = window.location.pathname;

		expect(url).toBe("/");

		await userEvent.click(screen.getByRole("navigation"));
		await userEvent.click(
			screen.getByRole("link", {
				name: /confirmation/i
			})
		);
		url = window.location.pathname;

		expect(url).toBe("/confirmation");
	});
});
