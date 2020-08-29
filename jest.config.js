module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!**/node_modules/**'
    ],
    transformIgnorePatterns: ['/node_modules/'],
    roots: ["<rootDir>/src", "<rootDir>/tests"],
    testMatch: [
        '**/tests/unit/**/*.spec.[jt]s?(x)',
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
};
