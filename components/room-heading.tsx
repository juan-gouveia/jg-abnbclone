import { MapPin } from "lucide-react";
import { Rating } from "@/components/rating";
import type { Room } from "@/types/room";

interface RoomHeadingProps {
  room: Room;
}

export const RoomHeading = ({ room }: RoomHeadingProps) => {
  return (
    <section className="border-b border-zinc-200 py-6">
      <h1 className="text-2xl font-semibold md:text-3xl">{room.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <Rating value={room.rating} />
        <span className="text-zinc-600">{room.reviewCount} reviews</span>
        <span className="flex items-center gap-1 text-zinc-600"><MapPin className="size-4" aria-hidden="true" />{room.location}</span>
      </div>
    </section>
  );
};