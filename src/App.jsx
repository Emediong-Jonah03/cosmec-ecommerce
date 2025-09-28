import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout/layout";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";

import Home from "./pages/home";
import Cart from "./pages/Cart";


function App() {

    const [search, setSearch] = useState(false)

   function toggleSearch() {
    setSearch(prev => !prev)
   }

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout Parent Route */}
        <Route element={<Layout toggleSearch={toggleSearch} />}>
          <Route index element={<Home  search={search}/>} />      {/* default child = "/" */}
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* ✅ Standalone Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* ✅ Catch-All */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;