const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");
const { CartPage } = require("../pages/CartPage");

Given("que estou logado na aplicação", async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);

  await this.loginPage.open();
  await this.loginPage.login("standard_user", "secret_sauce");

  await expect(await this.productsPage.getTitle()).toHaveText("Products");
});

When("adiciono o produto Sauce Labs Backpack ao carrinho", async function () {
  await this.productsPage.addBackpackToCart();

  await expect(await this.productsPage.getCartBadge()).toHaveText("1");

  await this.productsPage.openCart();
});

Then("devo visualizar o produto no carrinho", async function () {
  this.cartPage = new CartPage(this.page);

  await expect(await this.cartPage.getCartItem()).toBeVisible();
  await expect(await this.cartPage.getBackpackItemName()).toHaveText(
    "Sauce Labs Backpack"
  );
});

When("removo o produto Sauce Labs Backpack do carrinho", async function () {
  this.cartPage = new CartPage(this.page);

  await this.cartPage.removeBackpackFromCart();
});

Then("o carrinho deve ficar vazio", async function () {
  const itemsCount = await this.cartPage.getCartItemsCount();

  expect(itemsCount).toBe(0);
});
