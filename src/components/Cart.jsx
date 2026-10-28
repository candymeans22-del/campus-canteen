import { Link } from "react-router-dom";
import Icon from "./Icon";

function Cart({ items, total, onIncrease, onDecrease, onClear, onPlace }) {
  if (items.length === 0) {
    return (
      <div className="order-empty">
        <span className="empty-cart"><Icon name="cart" size={56} /></span>
        <strong>Nothing here yet.</strong>
        <p>Add an item from the menu<br />to get started.</p>
        <Link to="/" className="pill-btn">Browse menu</Link>
      </div>
    );
  }

  return (
    <>
      <ul className="order-list">
        {items.map((i) => (
          <li key={i.id}>
            <div>
              <strong>{i.name}</strong>
              <small>Rs. {i.price} &times; {i.qty} = Rs. {i.price * i.qty}</small>
            </div>
            <div className="qty">
              <button onClick={() => onDecrease(i.id)} aria-label={`Remove one ${i.name}`}>&minus;</button>
              <span>{i.qty}</span>
              <button onClick={() => onIncrease(i.id)} aria-label={`Add one ${i.name}`}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="order-total">
        <span>Total</span>
        <strong>Rs. {total}</strong>
      </div>
      <button className="pill-btn full" onClick={onPlace}>Place order</button>
      <button className="clear-btn" onClick={onClear}>Clear order</button>
    </>
  );
}

export default Cart;
