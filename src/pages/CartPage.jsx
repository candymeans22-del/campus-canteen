import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import Cart from "../components/Cart";

function CartPage() {
  const { cart, cartCount, total, increaseQty, decreaseQty, clearCart, placeOrder } = useShop();

  return (
    <section className="page">
      <h1>Your cart ({cartCount})</h1>
      <div className="cart-page-card">
        <Cart
          items={cart}
          total={total}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onClear={clearCart}
          onPlace={placeOrder}
        />
      </div>
      <Link to="/" className="back-link">&larr; Keep browsing</Link>
    </section>
  );
}

export default CartPage;
