const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

Given("que estou na página de login", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When(
  "faço login com usuário {string} e senha {string}",
  async function (usuario, senha) {
    await this.loginPage.login(usuario, senha);
  }
);

Then("devo visualizar a página de produtos", async function () {
  await expect(this.page).toHaveURL(/inventory/);
  await expect(this.page.locator(".title")).toHaveText("Products");
});

Then("devo visualizar a mensagem de erro de login", async function () {
  await expect(this.loginPage.errorMessage).toBeVisible();
  await expect(this.loginPage.errorMessage).toContainText(
    "Username and password do not match"
  );
});
