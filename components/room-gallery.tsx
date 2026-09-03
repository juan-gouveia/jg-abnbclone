"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { RoomImage } from "@/types/room";

interface RoomGalleryProps {
  images: RoomImage[];
}

export const RoomGallery = ({ images }: RoomGalleryProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const image = images[imageIndex];

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-zinc-100 md:aspect-16/9">
      <Image src={image.url} alt={image.alt} fill sizes="(min-width: 768px) 70vw, 100vw" className="object-cover" priority />
      <button type="button" onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)} aria-label="Previous image" title="Previous image" className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-sm transition hover:bg-white">
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button type="button" onClick={() => setImageIndex((imageIndex + 1) % images.length)} aria-label="Next image" title="Next image" className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-sm transition hover:bg-white">
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
      <span className="absolute bottom-3 right-3 rounded-full bg-zinc-950/80 px-3 py-1 text-sm font-medium text-white">{imageIndex + 1}/{images.length}</span>
    </div>
  );
};