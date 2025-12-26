import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Layout from "./components/Layout/layout";
import IntroLoader from "./components/introLoader";

// Lazy pages
const Login = lazy(() => import("./pages/auth/login"));
const SignUp = lazy(() => import("./pages/auth/signup"));
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

const PRODUCTS_API =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

function App() {
  // Product state
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(PRODUCTS_API);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Cart state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Cart totals
  const itemsNumber = cart.reduce((s, i) => s + i.quantity, 0);
  const subTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subTotal > 30 ? 0 : 5;
  const taxes = +(subTotal * 0.03).toFixed(2);
  const discount = subTotal > 300 ? +(subTotal * 0.03).toFixed(2) : 0;
  const total = subTotal + shipping + taxes - discount;

  return (
    <BrowserRouter>
      <Suspense fallback={<IntroLoader />}>
        <Routes>
          <Route element={<Layout itemsNumber={itemsNumber} />}>
            <Route
              index
              element={
                <Home
                  products={products}
                  filteredProducts={filteredProducts}
                  setFilteredProducts={setFilteredProducts}
                  loading={loading}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeItem={removeItem}
                  clearCart={clearCart}
                  itemsNumber={itemsNumber}
                  subTotal={subTotal}
                  shipping={shipping}
                  taxes={taxes}
                  discount={discount}
                  total={total}
                />
              }
            />
          </Route>

          <Route
            path="/checkout"
            element={
              <Checkout
                subTotal={subTotal}
                shipping={shipping}
                taxes={taxes}
                total={total}
                itemsNumber={itemsNumber}
              />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="*"
            element={
              <div className="flex flex-col items-center mt-24 gap-6 text-center">
                <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
                <Link
                  to="/"
                  className="bg-green-400 text-white px-6 py-3 rounded-full"
                >
                  Back Home
                </Link>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;