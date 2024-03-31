import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { fireEvent, render } from "@testing-library/react";
import { Table } from "./index";

const mockStore = configureStore([]);

describe("Table component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			employee: {
				employeeList: [
					{
						_id: "1",
						name: "John Doe",
						email: "john@example.com",
						address: "123 Main St",
						phone: "555-1234",
					},
				],
			},
		});
	});

	test("renders table with correct data", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Table />
			</Provider>
		);

		expect(getByText("John Doe")).toBeInTheDocument();
		expect(getByText("john@example.com")).toBeInTheDocument();
		expect(getByText("123 Main St")).toBeInTheDocument();
		expect(getByText("555-1234")).toBeInTheDocument();
	});

	test("dispatches action when edit button is clicked", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Table />
			</Provider>
		);

		fireEvent.click(getByText("Edit"));

		expect(store.getActions()).toContainEqual({
			type: "EMPLOYEE_FETCH_REQUESTED",
		});
		expect(store.getActions()).toContainEqual({
			payload: "1",
			type: "EMPLOYEE_SELECTED",
		});
		expect(store.getActions()).toContainEqual({
			payload: true,
			type: "MODAL_OPEN",
		});
	});

	test("dispatches action when delete button is clicked", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Table />
			</Provider>
		);

		fireEvent.click(getByText("Delete"));

		expect(store.getActions()).toContainEqual({
			type: "EMPLOYEE_FETCH_REQUESTED",
		});
		expect(store.getActions()).toContainEqual({
			payload: "1",
			type: "EMPLOYEE_DELETE_REQUESTED",
		});
	});
});
