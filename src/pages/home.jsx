import Header from "../components/header";
import Hero from "../components/hero";
import productData from "../database/productData";
import Product from "../components/products"
import Content from "../components/content";
import Filter from "../components/filter";

import { useState, useMemo } from "react";

export default function Home({search}) {

  const [productFilter, setProductFilter] = useState(productData)

  function productSearch(searchTerm) {

    const lower = searchTerm.target.value.toLowerCase();
    const filterdProducts = productData.filter((products) =>
        products.productName.toLowerCase().includes(lower) ||
        products.category.includes(lower) 
    );
    setProductFilter(filterdProducts)
  }

  const productsElement = productData.map((product) => {
    return <Product key={product.id} {...product} />;
  });


  return (
    <>
      <div className="relative">
        <Hero page={"Shop"} />
        <div className=" absolute top-15 left-128  z-10">
          {search &&(
            <input
              type="search"
              className="px-3 py-2 rounded text-black border-solid border-2 bg-white w-full"
              placeholder="Search for products"
              onChange={productSearch}
            />
          )}
        </div>
      </div>
      <Content />
      <div className="flex items-stretch justify-center">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {productsElement.length > 0 ? (productsElement)
            : (<p>No products found</p>
          )}
        </div>
      </div>
    </>
  );
}
