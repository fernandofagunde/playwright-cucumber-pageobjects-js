const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(30 * 1000);

Before(async function () {
  const headless = process.env.HEADLESS !== "false";

  this.browser = await chromium.launch({
    headless,
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
