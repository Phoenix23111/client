import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //   Add the Items to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      if (!Array.isArray(prevItems)) prevItems = []; // Ensure prevItems is an array

      const existingItemIndex = prevItems.findIndex(
        (prod) => prod.P_id === item.P_id
      );

      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        return prevItems.map((prod, index) =>
          index === existingItemIndex
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      } else {
        // If new item, add to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // 🗑️ Function to remove an item from the cart
  const removeFromCart = (P_id) => {
    setCartItems((prevItems) => {
      if (!Array.isArray(prevItems)) return []; // Ensure it's an array

      const updatedCart = prevItems
        .map((prod) =>
          prod.P_id === P_id ? { ...prod, quantity: (prod.quantity = 0) } : prod
        )
        .filter((prod) => prod.quantity > 0); // Remove item if quantity reaches 0

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
      return updatedCart;
    });
  };

  // 🔢 Calculate total number of products in cart
  const totalProducts = cartItems.reduce(
    (total, prod) => total + (prod?.quantity || 0),
    0
  );

  //Increase Quantity of the Product
  const increaseQuantity = (id) => {
    setCartItems((prevProd) => {
      if (!Array.isArray(prevProd)) return []; // Ensure array

      const updatedCart = prevProd.map((prod) =>
        prod.P_id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart

      return updatedCart;
    });
  };

  // Decrease quantity of an item
  const decreaseQuantity = (id) => {
    setCartItems((prevProd) => {
      if (!Array.isArray(prevProd)) return []; // Ensure it's an array

      const updatedCart = prevProd
        .map((prod) => {
          if (prod.P_id === id) {
            if (prod.quantity > 1) {
              return { ...prod, quantity: prod.quantity - 1 }; // Decrease quantity
            }
            return null; // If quantity is 1, mark it for removal
          }
          return prod; // Keep unchanged items
        })
        .filter((prod) => prod !== null); // Remove items with quantity 0

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage

      return updatedCart;
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
