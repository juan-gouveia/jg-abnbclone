export const roomCategories = ["Beach", "Apartment", "Room", "Mountain"] as const;

export type RoomCategory = (typeof roomCategories)[number];

export interface RoomImage {
  url: string;
  alt: string;
}

export interface Amenity {
  id: "wifi" | "kitchen" | "parking" | "air-conditioning" | "workspace" | "tv";
  label: string;
}

export interface HostCard {
  id: string;
  name: string;
  yearsAsHost: number;
  avatarUrl: string;
  avatarAlt: string;
}

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
  location: string;
  reviewCount: number;
  hostId: string;
  gallery: RoomImage[];
  amenities: Amenity[];
  imageUrl: string;
  imageAlt: string;
}