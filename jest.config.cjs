module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.mjs',
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
            '<rootDir>/__mocks__/fileMock.mjs',
        '^@/(.*)$': '<rootDir>/$1',
        'query-string': '<rootDir>/__mocks__/query-string.mjs',
        'next/image': '<rootDir>/__mocks__/next/image.js',
    },
    transform: {
        '^.+\\.(js|jsx|mjs|tsx|ts|cjs)$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testMatch: ['<rootDir>/test/**/*.test.mjs'],
    transformIgnorePatterns: ['/node_modules/(?!query-string)'],
};
