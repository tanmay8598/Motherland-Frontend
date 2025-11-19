"use client";
import { useCartStore } from "@/stores/cartStore";

export default function Page() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.cartTotal());

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between p-4 border-b">
            <p>{item.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>₹ {item.price * item.quantity}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2 className="font-bold text-xl mt-6">Total: ₹{total}</h2>
    </div>
  );
}
