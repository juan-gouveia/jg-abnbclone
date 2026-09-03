"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { HomeHeader } from "@/components/home-header";
import { LoadingIndicator } from "@/components/loading-indicator";
import { RoomCard } from "@/components/room-card";
import type { Room, RoomCategory } from "@/types/room";

interface HomeListingsProps {
  rooms: Room[];
}

export const HomeListings = ({ rooms: allRooms }: HomeListingsProps) => {
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<RoomCategory | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRooms(allRooms);
      setIsLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [allRooms]);

  const visibleRooms = rooms.filter((room) => {
    const matchesQuery = room.title.toLowerCase().includes(query.trim().toLowerCase());
    return matchesQuery && (!activeCategory || room.category === activeCategory);
  });

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery) searchParams.set("query", trimmedQuery);
    if (activeCategory) searchParams.set("category", activeCategory);
    router.push(`/catalog${searchParams.size ? `?${searchParams}` : ""}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <HomeHeader query={query} onQueryChange={setQuery} onSearchSubmit={handleSearchSubmit} />
        <form onSubmit={handleSearchSubmit} className="relative mx-4 mb-3 block sm:hidden">
          <span className="sr-only">Search stays</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stays" className="h-11 w-full rounded-full border border-zinc-300 bg-white px-4 text-sm outline-none transition focus:border-zinc-900" />
        </form>
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </header>
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        {isLoading ? <LoadingIndicator /> : visibleRooms.length > 0 ? <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visibleRooms.map((room) => <RoomCard key={room.id} room={room} sourceHref="/" />)}</div> : <p className="py-20 text-center text-zinc-600">No stays match your search.</p>}
      </section>
    </div>
  );
};