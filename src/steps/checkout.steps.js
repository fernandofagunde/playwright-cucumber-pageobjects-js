const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { CheckoutPage } = require("../pages/CheckoutPage");

When(
  "finalizo a compra com os dados {string}, {string} e {string}",
  async function (firstName, lastName, postalCode) {
    this.checkoutPage = new CheckoutPage(this.page);

    await this.checkoutPage.startCheckout();
    await this.checkoutPage.fillCustomerInformation(
      firstName,
      lastName,
      postalCode
    );
    await this.checkoutPage.continueCheckout();
    await this.checkoutPage.finishCheckout();
  }
);

Then("devo visualizar a confirmação da compra", async function () {
  await expect(await this.checkoutPage.getCompleteHeader()).toHaveText(
    "Thank you for your order!"
  );
});
