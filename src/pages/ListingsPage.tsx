import { ListingCard } from "../components/ListingCard";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

import { listings } from "../listings";

export const ListingsPage = () => {
//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     school: "",
//     price: "",
//     roomType: "",
//   });
// implement pagination
const [currentPage, setCurrentPage] = useState(1);
const limit = 6;
const offset = (currentPage - 1) * limit;
const paginatedListings = listings.slice(offset, offset + limit);

const handleNextPage = (page: number) => {
  setCurrentPage(page + 1);
}

const handlePrevPage = (page: number) => {
  if (page > 1) {
    setCurrentPage(page - 1);
  }
}

const numberOfPages = Math.ceil(listings.length / limit);
const listOfPages = [];
for (let i = 1; i <= numberOfPages; i++) {
  listOfPages.push(i);
}
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-2 border-b-2 border-t-2 border-accent inline-block w-fit">
        Find your own place
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Search for affordable student accommodations near your campus.
      </p>

      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedListings.map((item) => (
          <ListingCard key={item.id} listing={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        <button className="px-3 py-1 border rounded-md hover:bg-blue-600 hover:text-white" onClick={() => handlePrevPage(currentPage)}>&lt;</button>
        {listOfPages.map((p) => (
          <button
            key={p}
            className="px-3 py-1 border rounded-md hover:bg-blue-600 hover:text-white"
          >
            {p}
          </button>
        ))}
        <button className="px-3 py-1 border rounded-md hover:bg-blue-600 hover:text-white" onClick={() => handleNextPage(currentPage)}>&gt;</button>
      </div>
     
    </div>
  );
};
export default ListingsPage;