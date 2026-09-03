"use client";

import { useEffect, useState } from "react";
import { AmenitiesGrid } from "@/components/amenities-grid";
import { HostCard } from "@/components/host-card";
import { LoadingIndicator } from "@/components/loading-indicator";
import { ReservationCard } from "@/components/reservation-card";
import { RoomBackButton } from "@/components/room-back-button";
import { RoomGallery } from "@/components/room-gallery";
import { RoomHeading } from "@/components/room-heading";
import { SiteLogo } from "@/components/site-logo";
import { hosts } from "@/data/hosts";
import { rooms } from "@/data/rooms";
import type { Room } from "@/types/room";

interface RoomDetailProps {
  roomId: string;
  returnHref: string;
}

export const RoomDetail = ({ roomId, returnHref }: RoomDetailProps) => {
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setRoom(rooms.find((item) => item.id === roomId) ?? null), 1200);
    return () => window.clearTimeout(timer);
  }, [roomId]);

  if (room?.id !== roomId) return <LoadingIndicator />;

  const host = hosts.find((item) => item.id === room.hostId);
  if (!host) return null;

  return (
    <div className="min-h-screen bg-white pb-80 md:pb-12">
      <header className="border-b border-zinc-200"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8"><RoomBackButton returnHref={returnHref} /><SiteLogo /></div></header>
      <main className="mx-auto max-w-6xl px-4 py-6 md:grid md:grid-cols-[minmax(0,1fr)_22rem] md:gap-10 md:px-8 md:py-8"><div><RoomGallery images={room.gallery} /><RoomHeading room={room} /><HostCard host={host} /><AmenitiesGrid amenities={room.amenities} /></div><div className="hidden md:block md:sticky md:top-6 md:self-start"><ReservationCard price={room.price} /></div></main>
      <div className="fixed inset-x-0 bottom-0 z-10 md:hidden"><ReservationCard price={room.price} /></div>
    </div>
  );
};