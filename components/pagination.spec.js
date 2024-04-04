import React from "react";
import { render } from "@testing-library/react";
import { Pagination } from "./index";

describe("Pagination component", () => {
	test("renders pagination component", () => {
		const { container } = render(<Pagination />);
		const paginationElement = container.querySelector(".pagination");
		expect(paginationElement).toBeInTheDocument();
	});
});
