import Image from "next/image";
import Link from "next/link";
import { Rating } from "@/components/rating";
import type { Room } from "@/types/room";

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Link href={`/rooms/${room.id}`} className="group block">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-zinc-100">
        <Image
          src={room.imageUrl}
          alt={room.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-3 pt-3">
        <h2 className="text-base font-semibold leading-5">{room.title}</h2>
        <Rating value={room.rating} />
      </div>
      <p className="mt-1 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-900">${room.price}</span> night
      </p>
    </Link>
  );
};