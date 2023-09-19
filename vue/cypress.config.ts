import { defineConfig } from 'cypress'
import { setupNodeEvents } from './test/e2e/plugins'

export default defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  fileServerFolder: '.',
  fixturesFolder: 'test/e2e/fixtures',
  experimentalFetchPolyfill: true,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1440,
  viewportHeight: 990,
  env: {
    CYPRESS_COVERAGE: 'true',
    TAGS: 'not @ignore',
    BASE_URL: 'http://localhost:3000'
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    specPattern: 'test/e2e/specs/**/*.{feature,features}',
    supportFile: 'test/e2e/support/index.ts',
    excludeSpecPattern: ['*.{ts,tsx,js,jsx}']
  }
})
