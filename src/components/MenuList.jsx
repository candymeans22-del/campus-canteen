import ItemCard from "./ItemCard";

function MenuList({ items, favourites, onToggleFavourite, onAdd }) {
  if (items.length === 0) {
    return <p className="empty-note">No items match your search or filter. Try another word or pick All.</p>;
  }
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default MenuList;
