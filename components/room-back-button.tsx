"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface RoomBackButtonProps {
  returnHref: string;
}

export const RoomBackButton = ({ returnHref }: RoomBackButtonProps) => {
  const router = useRouter();

  const handleBack = () => router.push(returnHref);

  return (
    <button type="button" onClick={handleBack} className="flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-950">
      <ArrowLeft className="size-4" aria-hidden="true" />
      Back to stays
    </button>
  );
};