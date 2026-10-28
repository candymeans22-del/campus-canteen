import Icon from "./Icon";
import Cart from "./Cart";
import { useShop } from "../context/ShopContext";

const quick = [
  ["Home", "#home", "home"],
  ["Menu", "#menu", "menu"],
  ["About Us", "#about", "info"],
  ["Contact", "#contact", "mail"],
];

function OrderPanel() {
  const { cart, cartCount, total, increaseQty, decreaseQty, clearCart, placeOrder } = useShop();

  return (
    <aside className="order-panel" aria-label="Your order">
      <div className="order-card">
        <div className="order-head">
          <span className="order-icon"><Icon name="cart" size={28} /></span>
          <h2>Your Order</h2>
          <span className="order-count">{cartCount}</span>
        </div>
        <Cart
          items={cart}
          total={total}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onClear={clearCart}
          onPlace={placeOrder}
        />
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        {quick.map(([label, href, icon]) => (
          <a key={label} href={href}>
            <Icon name={icon} size={22} /> {label}
          </a>
        ))}
      </div>

      <div className="quote-card">
        <p>Good Food<br />Builds Great<br />Memories!</p>
      </div>
    </aside>
  );
}

export default OrderPanel;
