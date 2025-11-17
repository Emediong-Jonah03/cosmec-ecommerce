function Content() {

  return (
    <main className="bg-zinc-50">
      <div >
        <div className="flex flex-col sm:flex-row justify-around items-start py-2 gap-2 px-3">
          <p>Showiing 1 - 12 of 1560 results</p>
          <p>Sort by:</p>
          <p>Default sorting</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly items-center py-2 gap-2 overflow-x-auto text-sm">
          <p className="text-xl">Active filter:</p>
          <div className="bg-zinc-50 text-black font-bold shadow rounded-2xl px-2 py-1">
           <p className="inline text-red-500 rounded-full px-1 font-normal bg-zinc-300 hover:cursor-pointer hover:font-bold">x</p> Price: $10.00 - $100.00 
          </div>
          <div className="bg-zinc-50 text-black font-bold shadow rounded-2xl px-2 py-1">
           <p className="inline text-red-500 rounded-full px-1 font-normal bg-zinc-300 hover:cursor-pointer hover:font-bold">x</p> Best Seller 
          </div>
          <div className="bg-zinc-50 text-black font-bold shadow rounded-2xl px-2 py-1">
           <p className="inline text-red-500 rounded-full px-1 font-normal bg-zinc-300 hover:cursor-pointer hover:font-bold">x</p> In Stock
          </div>
          <p className="text-orange-400 underline cursor-pointer hover:text-orange-600">Clear all</p>
        </div>
      </div>
    </main>
  );
}

export default Content;