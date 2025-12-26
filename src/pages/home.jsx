import Hero from "../components/hero";
import SearchInput from "../components/searchInput";
import Product from "../components/products";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Home({
  products,
  filteredProducts,
  setFilteredProducts,
  loading,
  addToCart,
}) {
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();

    const results = products.filter((p) =>
      p.name?.toLowerCase().includes(term)
    );

    setFilteredProducts(results);
  };

  return (
    <>
      <Hero page="Shop" />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchInput handleSearch={handleSearch} />
      </div>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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