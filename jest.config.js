module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // ✅ Ensures Jest sets up properly
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
