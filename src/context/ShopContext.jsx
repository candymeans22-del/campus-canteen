import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);
  const [toast, setToast] = useState(null);

  // Load the menu from the local JSON file
  useEffect(() => {
    async function loadMenu() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/menu.json");
        if (!res.ok) throw new Error(`Could not load the menu (status ${res.status}).`);
        const data = await res.json();
        setMenu(data);
      } catch (err) {
        setError(
          err instanceof SyntaxError
            ? "menu.json is missing or is not valid JSON."
            : err.message || "Something went wrong while loading the menu."
        );
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, [reloadKey]);

  // Hide the small "added to cart" message after a moment
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1600);
    return () => clearTimeout(t);
  }, [toast]);

  const retry = () => setReloadKey((k) => k + 1);

  const addToCart = (item, qty = 1) => {
    if (!item.available) return;
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { ...item, qty }];
    });
    setToast({ id: Date.now(), text: `${item.name} added to cart` });
  };

  const increaseQty = (id) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    );

  const clearCart = () => setCart([]);

  const toggleFavourite = (id) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrder({ id: Math.floor(1000 + Math.random() * 9000), items: cart, total });
    setCart([]);
  };

  const closeOrder = () => setOrder(null);

  const value = {
    menu, loading, error, retry,
    query, setQuery,
    favourites, toggleFavourite,
    cart, cartCount, total,
    addToCart, increaseQty, decreaseQty, clearCart,
    order, placeOrder, closeOrder,
    toast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}
