const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  projectId: "qgpyx5",
  e2e: {
    pageLoadTimeout: 30000, 
    defaultCommandTimeout: 10000,
    baseUrl: "http://www.webdriveruniversity.com",
    specPattern: 'cypress/e2e/**/*.{js,feature}',
    
    env : {
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    },

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
  },

    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
    specPattern: '**/*.{js,feature}',
  },
});
