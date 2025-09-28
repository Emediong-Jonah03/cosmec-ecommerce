import { FaStar } from "react-icons/fa";
function Filter() {

    return(
        <section className="px-7 py-3 bg-white shadow rounded-2xl mr-3 w-auto justify-evenly flex flex-col">
            <h2 className="font-bold text-2xl">Filter options</h2>
            <div>
                <h3 className="font-bold text-xl">By Categories</h3>
                <p className="cursor-pointer hover:text-green-700">Skin Care</p>
                <p className="cursor-pointer hover:text-green-700">Make up</p>
                <p className="cursor-pointer hover:text-green-700">Hair Care</p>
                <p className="cursor-pointer hover:text-green-700">Body Care</p>
                <p className="cursor-pointer hover:text-green-700">Nail Care</p>
            </div>
            <div>
                <h3 className="font-bold text-xl">By skin Type</h3>
                <p className="cursor-pointer hover:text-green-700">Oily</p>
                <p className="cursor-pointer hover:text-green-700">Dry</p>
                <p className="cursor-pointer hover:text-green-700">Combination</p>
                <p className="cursor-pointer hover:text-green-700">Sensitive</p>
                
            </div>
            <div>
                <h3 className="font-bold text-xl">Price</h3>
                <input type="range" name="" id="" className="text-green-700"/>
            </div>
            <div>
                <h3 className="font-bold text-xl">Review</h3>
                <p className="text-amber-300 flex gap-2 hover:cursor-pointer my-2"><FaStar /></p>
                <p className="text-amber-300 flex gap-2 hover:cursor-pointer my-2"><FaStar /><FaStar /></p>
                <p className="text-amber-300 flex gap-2 hover:cursor-pointer my-2"><FaStar /><FaStar /><FaStar /></p>
                <p className="text-amber-300 flex gap-2 hover:cursor-pointer my-2"><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className="text-amber-300 flex gap-2 hover:cursor-pointer my-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>
            <div>
                <h3 className="font-bold text-xl">By Promotions</h3>
                <div>
                    <input type="checkbox" name="best-seller" id="" />
                    <p className="inline hover:text-green-700">Best Sellers</p>
                </div>
                <div>
                     <input type="checkbox" name="new-arrival" id="" />
                     <p  className="inline hover:text-green-700">New arrival</p>
                </div>

            </div>
            <div>
                <h3 className="font-bold text-xl">Availability</h3>
                <div>
                     <input type="checkbox" name="" id="" />
                     <p  className="inline hover:text-green-700">In Stock</p>
                </div>
                <div>
                     <input type="checkbox" name="" id="" />
                     <p  className="inline hover:text-green-700">Out of Stock</p>
                </div>
            </div>
        </section>
    )
}
export default Filter