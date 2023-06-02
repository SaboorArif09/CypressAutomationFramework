const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qgpyx5",
  e2e: {
    pageLoadTimeout: 30000, 
    defaultCommandTimeout: 10000,
    baseUrl: "http://www.webdriveruniversity.com",
    
    env : {
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    },

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
  },

    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },
  },
});
