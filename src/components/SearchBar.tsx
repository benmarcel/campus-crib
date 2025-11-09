export const SearchBar = () => {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-sm mb-8 max-w-3xl mx-auto  self-center">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="&#x1F50E; Enter location"
          className="border p-2 rounded-md flex-1 min-w-[200px] block w-full mb-4"
        />
        <div className="flex gap-4 w-full flex-wrap items-end max-sm:flex-col max-sm:items-center max-sm:space-y-4">
          <span className="max-sm:w-full">
            <label htmlFor="" className="font-bold block">
              School
            </label>
            <select className="border p-2 rounded-md w-full">
              <option>Select a school</option>
              <option>AAU</option>
              <option>UNIBEN</option>
              <option>DELSU</option>
            </select>
          </span>
          <span className="max-sm:w-full">
            <label htmlFor="" className="font-bold block">
              Price
            </label>
            <select className="border p-2 rounded-md w-full">
              <option>Any range</option>
              <option>₦100k - ₦150k</option>
              <option>₦150k - ₦200k</option>
              <option>₦200k - ₦300k</option>
            </select>
          </span>
          <span className="max-sm:w-full">
            <label htmlFor="" className="font-bold block">
              Room Type
            </label>
            <select className="border p-2 rounded-md w-full">
              <option>Single room</option>
              <option>1 Bedroom</option>
              <option>2 Bedroom</option>
              <option>3 Bedroom</option>
              <option>4 Bedroom</option>
            </select>
          </span>
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-800  h-1/2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
