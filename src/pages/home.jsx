import { useState, useEffect } from "react";
import Hero from "../components/hero";
import SearchInput from "../components/searchInput";
import Product from "../components/products";
import ProductSkeleton from "../components/ProductSkeleton";
import React from "react"

export default function Home({ products, loading, addToCart,filteredProducts, setFilteredProducts }) {
 

 const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const results = products.filter(
      (pr) =>
        pr.name.toLowerCase().includes(term) 
    );
    setFilteredProducts(results);
  };

  return (
    <>
      <Hero page="Shop" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <SearchInput handleSearch={handleSearch} />
      </div>

      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-slate-50">
        {filteredProducts.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-20">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => <ProductSkeleton key={i} />)
              : filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    {...product}
                    addToCart={() => addToCart(product)}
                  />
                ))}
          </div>
        )}
      </section>
    </>
  );
}
