module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx'],
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testMatch: ['**/testing/**/*.test.js?(x)'],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '**/testing/**/*.test.node.js?(x)',
      ],
    },
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '\\.jsx$': 'babel-jest',
  },
};
