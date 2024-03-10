export default {
    preset: "ts-jest",
    testEnvironment: "node",
    resetMocks: true,
    rootDir: "./",
    moduleNameMapper: {
        "~/(.*)": "<rootDir>/app/$1"
    },
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"]
};
