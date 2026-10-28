import Icon from "./Icon";
import { categoryCards } from "../data/menuData";

const filters = ["All", ...categoryCards.map((c) => c.name), "Favourites"];

function MenuSection({ category, onCategory, children }) {
  return (
    <section className="menu-section" id="menu">
      <div className="section-row">
        <div className="section-title">
          <span className="title-icon"><Icon name="sparkle" size={28} /></span>
          <div>
            <h2>Today&rsquo;s Menu</h2>
            <p>Fresh food &bull; Great taste &bull; Student friendly prices</p>
          </div>
        </div>
        <div className="pills" role="tablist" aria-label="Filter menu">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={category === f}
              className={category === f ? "pill active" : "pill"}
              onClick={() => onCategory(f)}
            >
              {f === "Favourites" ? <>&#9829; {f}</> : f}
            </button>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}

export default MenuSection;
