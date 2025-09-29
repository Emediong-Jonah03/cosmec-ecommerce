import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Product from "./components/products";
import productData from "./database/productData";
import Layout from "./components/Layout/layout";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";

import Home from "./pages/home";
import Cart from "./pages/Cart";

function App() {
  const [search, setSearch] = useState(false);

  function toggleSearch() {
    setSearch((prev) => !prev);
  }

  const productsElement = productData.map((product) => (
    <Product
      key={product.id}
      {...product}
      addToCart={() => addToCart(product)}
    />
  ));

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(productToAdd) {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        return prevItem.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItem, { ...productToAdd, quantity: 1 }];
      }
    });
  }

  function increaseQty(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeItem(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  const itemsNumber = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shipping = subTotal > 30 ? 0 : 5;
  const taxes = parseFloat((subTotal * 0.05).toFixed(2));
  const discount =
    subTotal > 300 ? parseFloat((subTotal * 0.03).toFixed(2)) : 0;
  const total = subTotal + shipping + taxes - discount;

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout Parent Route */}
        <Route
          element={
            <Layout toggleSearch={toggleSearch} itemsNumber={itemsNumber} />
          }
        >
          <Route
            index
            element={
              <Home
                search={search}
                productsElement={productsElement}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                decreaseQty={decreaseQty}
                increaseQty={increaseQty}
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

        {/* ✅ Standalone Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* ✅ Catch-All */}
        <Route
          path="*"
          element={
            <div className="flex align-center justify-center flex-col gap-4 mt-20 px-5">
              <h1 className=" text-3xl font-bold text-orange-500">
                404 Page is not yet available it is still in development by the
                developers
              </h1>
              <button className="bg-green-500 cursor-pointer hover:bg-green-400 rounded text-white px-3 py-2 mx-37">
                <Link to="/">Back to Home</Link>
              </button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
