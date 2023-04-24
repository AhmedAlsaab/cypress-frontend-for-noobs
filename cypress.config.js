const { defineConfig } = require('cypress');
const fs = require('fs-extra');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return fs.readJson(`personal-config.json`);
    },
  },
});
