/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

const path = require("path");

module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/vue-neekahin-new/'
    : '/',

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/main.scss")]
    }
  },

  // Remove moment.js from chart.js
  configureWebpack: config => {
    return {
      externals: {
        moment: 'moment'
      }
    }
  }
}
