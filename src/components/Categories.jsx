import { categoryCards } from "../data/menuData";
import Photo from "./Photo";
import Icon from "./Icon";

function Categories({ onPick, vegOnly, onVeg }) {
  return (
    <section className="categories-section">
      <div className="section-row">
        <div className="section-title">
          <span className="title-icon"><Icon name="leaf" size={30} /></span>
          <div>
            <h2>Food Categories</h2>
            <p>Choose your favorite category</p>
          </div>
        </div>
        <label className="veg-toggle">
          <span>Vegetarian only</span>
          <input type="checkbox" checked={vegOnly} onChange={(e) => onVeg(e.target.checked)} />
          <span className="switch" aria-hidden="true" />
        </label>
      </div>

      <div className="category-cards">
        {categoryCards.map((c) => (
          <button key={c.name} className={`category-card ${c.tone}`} onClick={() => onPick(c.name)}>
            <Photo src={c.image} emoji={c.emoji} alt={c.name} className="category-photo" />
            <span className="category-text">
              <strong>{c.name}</strong>
              <small>{c.sub}</small>
            </span>
            <span className="category-go"><Icon name="arrow" size={16} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
