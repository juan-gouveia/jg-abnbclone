"use client";

import { useState } from "react";
import { CatalogHeader, type PriceOrder } from "@/components/catalog-header";
import { CatalogMap } from "@/components/catalog-map";
import { RoomCard } from "@/components/room-card";
import { SiteLogo } from "@/components/site-logo";
import type { Room } from "@/types/room";

interface CatalogListingsProps {
  rooms: Room[];
  query: string;
}

export const CatalogListings = ({ rooms, query }: CatalogListingsProps) => {
  const [priceOrder, setPriceOrder] = useState<PriceOrder>("ascending");
  const orderedRooms = [...rooms].sort((firstRoom, secondRoom) => priceOrder === "ascending" ? firstRoom.price - secondRoom.price : secondRoom.price - firstRoom.price);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200"><div className="mx-auto max-w-7xl px-4 py-4 md:px-8"><SiteLogo /></div></header>
      <main className="mx-auto max-w-7xl px-4 py-7 md:px-8">
        <CatalogHeader resultCount={orderedRooms.length} query={query} priceOrder={priceOrder} onPriceOrderChange={setPriceOrder} />
        <div className="mt-7 grid gap-7 md:grid-cols-[minmax(0,1fr)_22rem] md:items-start">
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">{orderedRooms.map((room) => <RoomCard key={room.id} room={room} />)}</div>
          <aside className="md:sticky md:top-6"><CatalogMap rooms={orderedRooms} /></aside>
        </div>
      </main>
    </div>
  );
};