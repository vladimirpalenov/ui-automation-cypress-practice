const {defineConfig} = require('cypress')
require('dotenv/config')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    excludeSpecPattern: ['cypress/e2e/examples/**/*.cy.js'],
    video: true,
    screenshotOnRunFailure: true,
  },
  projectId: process.env.PROJECT_ID,
})
