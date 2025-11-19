import backgroundImage from "../assets/background.jpeg";

export default function Hero({ page, handleSearch }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[70vh] w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center font-bold text-zinc-100">
        <div className="w-600">
          <input
            type="search"
            placeholder="Search for products"
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black shadow-sm 
                                         focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <h1 className="text-4xl mb-5">{page}</h1>
        <p className="text-2xl">Home / {page}</p>
      </div>
    </section>
  );
}
