import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;
        const exists = cart.find((item) => item.id === product.id);

        if (exists) {
          const updated = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ cart: updated });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (id) =>
        set({
          cart: get().cart.filter((item) => item.id !== id),
        }),

      clearCart: () => set({ cart: [] }),

      increaseQty: (id) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),

      decreaseQty: (id) =>
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        }),

      cartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "motherland-cart",
    }
  )
);
