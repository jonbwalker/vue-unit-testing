module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    roots: ["<rootDir>/src", "<rootDir>/tests"],
    testMatch: [
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
};
