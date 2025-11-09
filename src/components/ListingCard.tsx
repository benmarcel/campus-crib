import type { Listing } from "../types";

interface Props {
  listing: Listing;
}

export const ListingCard = ({ listing }: Props) => {
  return (
    <div className="rounded-xl shadow-md p-3 bg-white hover:shadow-lg transition">
      <img
        src={listing.image}
        alt={listing.title}
        className="rounded-xl mb-2 h-48 w-full object-cover"
      />
      <h3 className="text-sm font-semibold">{listing.title}</h3>
      <p className="text-xs text-gray-600">{listing.location}</p>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-bold">{listing.price}/Yr</p>
        <p className="text-xs text-gray-500">{listing.reviews} Reviews</p>
      </div>
    </div>
  );
};
export default ListingCard;