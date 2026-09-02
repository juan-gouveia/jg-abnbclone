export const roomCategories = ["Beach", "Apartment", "Room", "Mountain"] as const;

export type RoomCategory = (typeof roomCategories)[number];

export interface Room {
  id: string;
  title: string;
  category: RoomCategory;
  price: number;
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  imageUrl: string;
  imageAlt: string;
}