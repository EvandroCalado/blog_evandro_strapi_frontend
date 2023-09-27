import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/app/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/lib/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/icons/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/context/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/graphql/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/hooks/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/types/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/About/index.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Shared/index.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Blog/index.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Blog/Comments/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
};

export default createJestConfig(config);
