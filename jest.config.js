module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.js'],
  roots: ['./'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/*.tsx', 'src/**/*.tsx'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@screens': '<rootDir>/src/screens',
    '@store/slice': '<rootDir>/src/store/slice',
    '@store': '<rootDir>/src/store',
    '@components': '<rootDir>/src/components',
    '@selectors': '<rootDir>/src/store/selectors',
    '@localization': '<rootDir>/src/localization',
    '@providers': '<rootDir>/src/providers',
    '@router': '<rootDir>/src/router',
  },
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: -10,
  //   },
  // },
};
