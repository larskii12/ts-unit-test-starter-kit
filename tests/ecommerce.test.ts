import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  calculateTotal,
  clearCart,
  applyShippingDiscount
} from "../src/ecommerce";

describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    // Act
    const sum = calculateTotal();

    // Assert
    expect(sum).toBe(600);
  });

  it("should add items to cart", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 2);

    // Assert
    expect(cart["Soap"]).toBe(2);
  })

  it("should apply $10 shopping discount", () => {
    // Arrange
    addToCart("Soap", 1);
    addToCart("Shampoo", 2);
    const sum = calculateTotal();

    // Act
    const discounted_sum = applyShippingDiscount(sum);

    // Assert
    expect(discounted_sum).toBe(490);
  })

  it("should ", () => {
    // Arrange
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);
    const sum = calculateTotal();

    // Act
    const discounted_sum = applyShippingDiscount(sum);

    // Assert
    expect(discounted_sum).toBe(300);
  })

  it("should not apply $10 shopping discount", () => {
    // Arrange
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);
    const sum = calculateTotal();

    // Act
    const discounted_sum = applyShippingDiscount(sum);

    // Assert
    expect(discounted_sum).toBe(300);
  })
});
