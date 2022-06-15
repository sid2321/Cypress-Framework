const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    baseUrl: 'http://192.168.0.100:8080/InBetween',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
