const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

 // return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
        includeShadowDom: true,
        chromeWebSecurity: true,
        viewportHeight: 1080,
        viewportWidth: 1920,
        video: false,
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
          configFile: 'reporter-config.json',
        },
        reporterEnabled: 'mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
          mochaFile: 'cypress/results/junit/results-[hash].xml',
        },
        
        e2e: {
          baseUrl: "https://automationpractice.com/",
          setupNodeEvents(on, config) {
            const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")
            on("before:browser:launch", (browser = {}, launchOptions) => {
              prepareAudit(launchOptions)
            })
            on("task", {
              lighthouse: lighthouse(), // calling the function is important
              })
              const file = config.env.configFile || 'development'
              

              return getConfigurationByFile(file)
            }
          }
        })
  
