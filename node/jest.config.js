const fullCoverageOptions = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/src/main.ts'
  ]
}

const isVerbose = process.env.VERBOSE === 'true'
const mainConfig = {
  silent: !isVerbose,
  verbose: isVerbose,
  transformIgnorePatterns: [],
  moduleNameMapper: {
    // order matters, the more specific remaps go first
    '^@test/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/test/**/*.spec.(js|jsx|ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/babel.config.js',
      tsconfig: '<rootDir>/tsconfig.test.json'
    }
  },
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/test',
    '/dist',
    '/report',
    '.d.ts$'
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  cacheDirectory: '<rootDir>/.jest_cache'
}

let fullCoverage = false

try {
  fullCoverage = JSON.parse(process.env.FULL_COVERAGE)
} catch (_) {}

module.exports = fullCoverage
  ? { ...mainConfig, ...fullCoverageOptions }
  : mainConfig
