"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const RoomBackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    const referrer = document.referrer;
    const isInternalReferrer = referrer.startsWith(window.location.origin);

    if (isInternalReferrer) {
      router.back();
      return;
    }

    router.push("/catalog");
  };

  return (
    <button type="button" onClick={handleBack} className="flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-950">
      <ArrowLeft className="size-4" aria-hidden="true" />
      Back to stays
    </button>
  );
};