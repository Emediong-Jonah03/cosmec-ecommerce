export default function SearchInput({handleSearch}) {
  return (
    <div className="w-600">
      <input
        type="search"
        placeholder="Search for products"
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black shadow-md 
                                         focus:outline-none focus:ring-1 focus:ring-green-400"
      />
    </div>
  );
}
