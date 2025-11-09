export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  reviews: number;
    type?: string;
}

export interface SearchParams {
  location: string;
  school: string;
  price: string;
  roomType: string;
}