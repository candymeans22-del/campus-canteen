import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import Photo from "../components/Photo";

function ItemDetails() {
  const { id } = useParams();
  const { menu, loading, error, favourites, toggleFavourite, addToCart } = useShop();
  const [qty, setQty] = useState(1);

  if (loading) {
    return <section className="page"><div className="status-msg" role="status"><div className="loader" aria-hidden="true" /><p>Loading item&hellip;</p></div></section>;
  }
  if (error) {
    return <section className="page"><div className="status-msg error" role="alert"><p>{error}</p><Link to="/" className="pill-btn">Back to menu</Link></div></section>;
  }

  const item = menu.find((i) => String(i.id) === id);
  if (!item) {
    return (
      <section className="page">
        <h1>Item not found</h1>
        <Link to="/" className="back-link">&larr; Back to menu</Link>
      </section>
    );
  }

  const isFav = favourites.includes(item.id);

  return (
    <section className="page">
      <Link to="/" className="back-link">&larr; Back to menu</Link>
      <div className="details-grid">
        <div className="details-photo">
          <Photo src={item.image} emoji={item.emoji} alt={item.name} />
        </div>
        <div className="details-info">
          <span className="tag">{item.category}</span>
          <span className={item.veg ? "tag veg" : "tag nonveg"}>{item.veg ? "Vegetarian" : "Non-veg"}</span>
          <h1>{item.name}</h1>
          <p className="details-desc">{item.desc}</p>
          <p className="details-price">Rs. {item.price}</p>
          <span className={item.available ? "status-pill ok" : "status-pill no"}>
            {item.available ? "Available today" : "Not available today"}
          </span>

          <div className="details-actions">
            <div className="qty-box">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">&minus;</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button className="pill-btn" disabled={!item.available} onClick={() => addToCart(item, qty)}>
              Add {qty} to cart
            </button>
            <button
              className={isFav ? "fav-btn big on" : "fav-btn big"}
              onClick={() => toggleFavourite(item.id)}
              aria-pressed={isFav}
            >
              {isFav ? <>&#9829; Favourite</> : <>&#9825; Add to favourites</>}
            </button>
          </div>
          <Link to="/cart" className="back-link">View cart &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetails;
