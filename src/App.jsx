import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ShopProvider, useShop } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import OrderStatus from "./components/OrderStatus";
import MenuPage from "./pages/MenuPage";
import ItemDetails from "./pages/ItemDetails";
import CartPage from "./pages/CartPage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell() {
  const [welcome, setWelcome] = useState(true);
  const { order, closeOrder, toast } = useShop();
  const navigate = useNavigate();

  return (
    <>
      {welcome && <Welcome onEnter={() => setWelcome(false)} />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="*"
          element={
            <section className="page">
              <h1>Page not found</h1>
              <Link to="/" className="back-link">&larr; Back to menu</Link>
            </section>
          }
        />
      </Routes>
      <Footer />
      {order && <OrderStatus order={order} onDone={() => { closeOrder(); navigate("/"); }} />}
      {toast && <div className="toast" role="status" key={toast.id}>{toast.text}</div>}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Shell />
      </ShopProvider>
    </BrowserRouter>
  );
}

export default App;
