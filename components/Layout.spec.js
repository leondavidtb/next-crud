import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout component", () => {
	test("renders children components", () => {
		const { getByText } = render(
			<Layout>
				<div>Test Child Component</div>
			</Layout>
		);

		expect(getByText("Test Child Component")).toBeInTheDocument();
	});
});
