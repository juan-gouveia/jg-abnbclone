import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/room-detail";
import { rooms } from "@/data/rooms";

interface RoomPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string | string[] }>;
}

const getReturnHref = (value: string | string[] | undefined) => {
  if (typeof value !== "string") return "/catalog";

  const url = new URL(value, "https://staybnb.local");
  const allowedPath = url.pathname === "/" || url.pathname === "/catalog";
  const allowedParams = [...url.searchParams.keys()].every((key) => key === "query" || key === "category");

  return url.origin === "https://staybnb.local" && allowedPath && allowedParams ? `${url.pathname}${url.search}` : "/catalog";
};

const RoomPage = async ({ params, searchParams }: RoomPageProps) => {
  const { id } = await params;
  const { from } = await searchParams;

  if (!rooms.some((room) => room.id === id)) notFound();

  return <RoomDetail roomId={id} returnHref={getReturnHref(from)} />;
};

export default RoomPage;