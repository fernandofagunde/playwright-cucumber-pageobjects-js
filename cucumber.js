module.exports = {
  default: {
    require: ["src/support/*.js", "src/steps/*.js"],
    paths: ["features/*.feature"],
    format: ["progress", "allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results",
    },
    publishQuiet: true,
  },
};
