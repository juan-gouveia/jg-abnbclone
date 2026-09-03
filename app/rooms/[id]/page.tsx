import { notFound } from "next/navigation";
import { RoomDetail } from "@/components/room-detail";
import { rooms } from "@/data/rooms";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = await params;

  if (!rooms.some((room) => room.id === id)) notFound();

  return <RoomDetail roomId={id} />;
};

export default RoomPage;