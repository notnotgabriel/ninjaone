export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        diagnostics: false
      }
    ]
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['./src/test/setupTest.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/']
}
