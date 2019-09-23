module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.js']
};
