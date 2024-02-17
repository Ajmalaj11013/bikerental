
const CardComponent = ({ person }) => {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="higness.png" alt="Bike image"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Available</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black mt-3">1200/day (300 KM included)</p>
            <p class="mt-3 text-slate-500">6 Rs for each additional KM.</p>
          </div>
          <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:mt-32">
            Book Now    
            </button>
          </div>
        </div>
      </div>
         
    );
  };
  
  export default CardComponent;