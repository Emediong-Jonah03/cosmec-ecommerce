import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Layout from "./components/Layout/layout";
import IntroLoader from "./components/introLoader";

// Lazy-loaded pages
const Login = lazy(() => import("./pages/auth/login"));
const SignUp = lazy(() => import("./pages/auth/signup"));
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
const PRODUCTS_API =
  "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  // Products fetched from API
 const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch(PRODUCTS_API);
      const data = await res.json();

      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
  // Cart state
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart helper functions
  const addToCart = (productToAdd) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === productToAdd.id);
      if (existing) {
        return prev.map((p) =>
          p.id === productToAdd.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...productToAdd, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    updateCartItem(id, (item) => ({ ...item, quantity: item.quantity + 1 }));
  };

  const decreaseQty = (id) => {
    updateCartItem(id, (item) => ({
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : 1,
    }));
  };

  const updateCartItem = (id, modifierFn) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? modifierFn(item) : item))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Cart calculations
  const itemsNumber = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shipping = subTotal > 30 ? 0 : 5;
  const taxes = parseFloat((subTotal * 0.03).toFixed(2));
  const discount =
    subTotal > 300 ? parseFloat((subTotal * 0.03).toFixed(2)) : 0;
  const total = subTotal + shipping + taxes - discount;

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <IntroLoader />
        }
      >
        <Routes>
          {/* Layout with nested routes */}
          <Route element={<Layout itemsNumber={itemsNumber} />}>
            <Route
              index
              element={
                <Home
                  products={products}
filteredProducts={filteredProducts}
                  loading={loadingProducts}
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
                  addToCart={addToCart}
                  updateCartItem={updateCartItem}
                  removeItem={removeItem}
                  clearCart={clearCart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
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
                total={total}
                taxes={taxes}
                itemsNumber={itemsNumber}
              />
            }
          />
          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center gap-6 mt-20 px-5 text-center">
                <h1 className="text-3xl font-bold text-black/80">
                  404 — Page Not Found
                </h1>
                <p className="text-black/50 max-w-md">
                  The page you are looking for does not exist. It might still be
                  under development.
                </p>
                <Link
                  to="/"
                  className="bg-green-400 hover:bg-green-300 transition text-white rounded-full px-6 py-3"
                >
                  Back to Home
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
