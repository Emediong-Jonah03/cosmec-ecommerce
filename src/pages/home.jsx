import { useState } from "react";
import Hero from "../components/hero";
import Content from "../components/content";
import Filter from "../components/filter";
import Product from "../components/products";
import productData from "../database/productData";

export default function Home({ addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(productData);

  /** Filter products by name or category */
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
     
        <Hero page="Shop" handleSearch={handleSearch} />


  
      <Content filteredProducts={filteredProducts} />

      {/* ✅ Filter + Products Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-slate-50">
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    {...product}
                    addToCart={() => addToCart(product)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-8">
                No products found
              </p>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
