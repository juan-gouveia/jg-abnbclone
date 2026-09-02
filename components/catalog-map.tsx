"use client";

import { MapPinned } from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import type { Room } from "@/types/room";

interface CatalogMapProps {
  rooms: Room[];
}

const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const CatalogMap = ({ rooms }: CatalogMapProps) => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markers = useRef<google.maps.Marker[]>([]);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    if (!isApiLoaded || !mapElement.current || !window.google) return;

    if (!mapInstance.current) {
      mapInstance.current = new google.maps.Map(mapElement.current, {
        center: { lat: 25.77, lng: -80.19 },
        disableDefaultUI: true,
        zoom: 11,
      });
    }

    markers.current.forEach((marker) => marker.setMap(null));
    const bounds = new google.maps.LatLngBounds();
    markers.current = rooms.map((room) => {
      const position = { lat: room.coordinates.latitude, lng: room.coordinates.longitude };
      bounds.extend(position);
      return new google.maps.Marker({ map: mapInstance.current, position, title: room.title });
    });

    if (rooms.length > 0) mapInstance.current.fitBounds(bounds, 48);
  }, [isApiLoaded, rooms]);

  if (!googleMapsKey) {
    return <div className="flex h-80 items-center justify-center rounded-lg bg-zinc-100 text-center md:h-[calc(100vh-8rem)]"><div><MapPinned className="mx-auto size-8 text-rose-500" aria-hidden="true" /><p className="mt-3 font-semibold">Map unavailable</p><p className="mt-1 max-w-52 text-sm text-zinc-600">Add a Google Maps API key to view stay locations.</p></div></div>;
  }

  return <div className="relative h-80 overflow-hidden rounded-lg bg-zinc-100 md:h-[calc(100vh-8rem)]"><Script src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}`} strategy="afterInteractive" onLoad={() => setIsApiLoaded(true)} onError={() => setIsApiLoaded(false)} /><div ref={mapElement} className="size-full" aria-label="Map of stay locations" role="region" /></div>;
};