class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItem = page.locator('[data-test="inventory-item"]');
    this.backpackItemName = page.locator('[data-test="inventory-item-name"]');
    this.removeBackpackButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
  }

  async getCartItem() {
    return this.cartItem;
  }

  async getBackpackItemName() {
    return this.backpackItemName;
  }

  async removeBackpackFromCart() {
    await this.removeBackpackButton.click();
  }

  async getCartItemsCount() {
    return this.cartItem.count();
  }
}

module.exports = { CartPage };
