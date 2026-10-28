import { useState } from "react";
import { useShop } from "../context/ShopContext";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import MenuSection from "../components/MenuSection";
import MenuList from "../components/MenuList";
import About from "../components/About";
import OrderPanel from "../components/OrderPanel";

function MenuPage() {
  const { menu, loading, error, retry, query, favourites, toggleFavourite, addToCart } = useShop();
  const [category, setCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);

  const visibleItems = menu.filter((i) => {
    const inCategory =
      category === "All" ||
      (category === "Favourites" ? favourites.includes(i.id) : i.category === category);
    const matchesVeg = !vegOnly || i.veg;
    const matchesSearch = i.name.toLowerCase().includes(query.trim().toLowerCase());
    return inCategory && matchesVeg && matchesSearch;
  });

  const pickCategory = (name) => {
    setCategory(name);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layout">
      <main className="main">
        <Hero />
        <Categories onPick={pickCategory} vegOnly={vegOnly} onVeg={setVegOnly} />
        <MenuSection category={category} onCategory={setCategory}>
          {loading ? (
            <div className="status-msg" role="status">
              <div className="loader" aria-hidden="true" />
              <p>Loading today&rsquo;s menu&hellip;</p>
            </div>
          ) : error ? (
            <div className="status-msg error" role="alert">
              <p>{error}</p>
              <button className="pill-btn" onClick={retry}>Try again</button>
            </div>
          ) : (
            <MenuList
              items={visibleItems}
              favourites={favourites}
              onToggleFavourite={toggleFavourite}
              onAdd={addToCart}
            />
          )}
        </MenuSection>
        <About />
      </main>
      <OrderPanel />
    </div>
  );
}

export default MenuPage;
