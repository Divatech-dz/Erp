module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.{js,mjs,cjs,tst,ts}', '**/*.test.{js,mjs,cjs,tst,ts}'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
