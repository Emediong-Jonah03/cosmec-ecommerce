import { useState } from "react";
import Hero from "../components/hero";
import Content from "../components/content";
import Filter from "../components/filter";
import Product from "../components/products";
import productData from "../database/productData";

export default function Home({ search, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(productData);

  /** 🔍 Filter products by name or category */
  function handleSearch(event) {
    const term = event.target.value.toLowerCase();
    const results = productData.filter(
      (p) =>
        p.productName.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
    setFilteredProducts(results);
  }

  return (
    <>
      {/* ✅ Hero + Search Bar */}
      <div className="relative">
        <Hero page="Shop" />
        {search && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 w-11/12 sm:w-3/4 md:w-1/2">
            <input
              type="search"
              placeholder="Search for products"
              onChange={handleSearch}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        )}
      </div>

      {/* ✅ Optional Content Section */}
      <Content />

      {/* ✅ Filter + Products Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Sidebar Filter */}
          <aside className="lg:w-1/4 w-full lg:sticky lg:top-20 h-fit">
            <Filter />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Product key={product.id} {...product}  addToCart={() => addToCart(product)} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-8">No products found</p>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
