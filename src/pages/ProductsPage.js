class ProductsPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator(".title");
    this.backpackAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async getTitle() {
    return this.title;
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }

  async getCartBadge() {
    return this.cartBadge;
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };
