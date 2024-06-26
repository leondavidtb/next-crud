module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["components/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	coveragePathIgnorePatterns: ["/components/index.js"],
};
