import { Link } from "react-router-dom";
import Photo from "./Photo";
import Icon from "./Icon";

function ItemCard({ item, isFavourite, onToggleFavourite, onAdd }) {
  return (
    <article className={item.available ? "menu-card" : "menu-card unavailable"}>
      <div className="menu-photo">
        <Link to={`/item/${item.id}`} aria-label={`View details of ${item.name}`}>
          <Photo src={item.image} emoji={item.emoji} alt={item.name} />
        </Link>
        <span className={item.available ? "status ok" : "status no"}>
          {item.available ? "Available" : "Not Available"}
        </span>
        <button
          className={isFavourite ? "fav-btn on" : "fav-btn"}
          onClick={() => onToggleFavourite(item.id)}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
        >
          {isFavourite ? <>&#9829;</> : <>&#9825;</>}
        </button>
      </div>
      <div className="menu-info">
        <h3><Link to={`/item/${item.id}`}>{item.name}</Link></h3>
        <p>{item.desc}</p>
        <div className="menu-bottom">
          <strong>Rs. {item.price}</strong>
          <button className="add-btn" disabled={!item.available} onClick={() => onAdd(item)}>
            <Icon name="cart" size={15} /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
