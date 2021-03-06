const config = {
  preset: 'ts-jest',
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@core(.*)$': '<rootDir>/src/core$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@redux$': '<rootDir>/src/redux',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@tests(.*)$': '<rootDir>/tests$1',
  },
}

module.exports = config
