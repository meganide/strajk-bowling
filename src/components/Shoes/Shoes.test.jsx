import { render, screen } from "@testing-library/react";
import Shoes from "./Shoes";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";

describe("Shoes", () => {
	it("should render add shoe button", () => {
		const updateSize = vi.fn();
		const addShoe = vi.fn();
		const removeShoe = vi.fn();
		const shoes = [];

		render(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);
		const addShoeButton = screen.getByRole("button", { name: "+" });

		expect(addShoeButton).toBeInTheDocument();
	});

	it("should render shoe size input when add button is clicked", async () => {
		const updateSize = vi.fn();
		const addShoe = vi.fn();
		const removeShoe = vi.fn();
		const shoes = [];

		const { rerender } = render(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);
		const addShoeButton = screen.getByRole("button", { name: "+" });

		await userEvent.click(addShoeButton);
		shoes.push({ id: "1", size: "" });
		rerender(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);
		const shoeSizeInput = screen.getByRole("textbox");

		expect(addShoe).toHaveBeenCalledWith(expect.any(String));
		expect(shoeSizeInput).toBeInTheDocument();
	});

	it("should update shoe size", async () => {
		const updateSize = vi.fn();
		const addShoe = vi.fn();
		const removeShoe = vi.fn();
		const shoes = [{ id: "1", size: "40" }];

		render(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);
		const shoeSizeInput = screen.getByRole("textbox");

		await userEvent.type(shoeSizeInput, "43");

		expect(updateSize).toHaveBeenCalledTimes(2);
		expect(shoeSizeInput).toHaveValue("43");
	});

	it("should remove shoe size input when remove button is clicked", async () => {
		const updateSize = vi.fn();
		const addShoe = vi.fn();
		const removeShoe = vi.fn();
		const shoes = [{ id: "1", size: "40" }];

		const { rerender } = render(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);
		const shoeSizeInput = screen.getByRole("textbox");
		const removeShoeButton = screen.getByRole("button", { name: "-" });

		await userEvent.click(removeShoeButton);
		shoes.pop();
		rerender(
			<Shoes
				updateSize={updateSize}
				addShoe={addShoe}
				removeShoe={removeShoe}
				shoes={shoes}
			/>
		);

		expect(removeShoe).toHaveBeenCalledWith("1");
		expect(shoes).toHaveLength(0);
		expect(shoeSizeInput).not.toBeInTheDocument();
	});
});
