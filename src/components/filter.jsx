import { FaStar } from "react-icons/fa";

const categories = ["Skin Care", "Make up", "Hair Care", "Body Care", "Nail Care"];
const skinTypes = ["Oily", "Dry", "Combination", "Sensitive"];
const promotions = ["Best Sellers", "New Arrival"];
const availability = ["In Stock", "Out of Stock"];

function Filter() {
  return (
    <section className="px-7 py-3 bg-white shadow rounded-2xl mr-3 w-auto flex flex-col gap-5">
      <h2 className="font-bold text-2xl">Filter Options</h2>

      {/* Categories */}
      <FilterGroup title="By Categories" items={categories} />

      {/* Skin Type */}
      <FilterGroup title="By Skin Type" items={skinTypes} />

      {/* Price */}
      <div>
        <h3 className="font-bold text-xl mb-2">Price</h3>
        <input type="range" className="accent-green-700 w-full" />
      </div>

      {/* Review */}
      <div>
        <h3 className="font-bold text-xl mb-2">Review</h3>
        {[1, 2, 3, 4, 5].map((count) => (
          <p
            key={count}
            className="text-amber-300 flex gap-1 hover:cursor-pointer my-1"
          >
            {Array.from({ length: count }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </p>
        ))}
      </div>

      {/* Promotions */}
      <CheckboxGroup title="By Promotions" options={promotions} />

      {/* Availability */}
      <CheckboxGroup title="Availability" options={availability} />
    </section>
  );
}

/* --- Reusable Sub-Components --- */
function FilterGroup({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {items.map((item) => (
        <p
          key={item}
          className="cursor-pointer hover:text-green-700 my-1"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

function CheckboxGroup({ title, options }) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 my-1 cursor-pointer">
          <input type="checkbox" className="accent-green-700" />
          <span className="hover:text-green-700">{option}</span>
        </label>
      ))}
    </div>
  );
}

export default Filter;
