module.exports = {
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/', '/src/__tests__/assetsTransformer.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/assets/img'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!jest.config.js',
    '!webpack.config.js',
    '!**/src/index.jsx',
    '!**/coverage/**',
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/index.js',
    '!**/dist/**',
    '!**/server/**'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(scss|css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    }
  }
};
