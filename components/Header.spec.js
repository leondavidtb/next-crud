import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Header } from "./Header";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Header component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	test("renders header with correct text", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		expect(getByText("Manage", "Employees")).toBeInTheDocument();
		expect(getByText("Add new")).toBeInTheDocument();
	});

	test("dispatches action when add button is clicked", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		fireEvent.click(getByText("Add new"));

		expect(store.getActions()).toEqual([{ type: "MODAL_OPEN", payload: true }]);
	});
});
