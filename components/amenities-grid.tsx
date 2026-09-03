import { AirVent, CookingPot, Monitor, ParkingCircle, Wifi, BriefcaseBusiness } from "lucide-react";
import type { Amenity } from "@/types/room";

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const amenityIcons = { wifi: Wifi, kitchen: CookingPot, parking: ParkingCircle, "air-conditioning": AirVent, workspace: BriefcaseBusiness, tv: Monitor };

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="border-b border-zinc-200 py-6">
      <h2 className="text-xl font-semibold">Amenities</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {amenities.map((amenity) => {
          const Icon = amenityIcons[amenity.id];
          return <li key={amenity.id} className="flex items-center gap-3 text-sm"><Icon className="size-5 text-zinc-700" aria-hidden="true" />{amenity.label}</li>;
        })}
      </ul>
    </section>
  );
};