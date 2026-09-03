import Image from "next/image";
import type { HostCard as Host } from "@/types/room";

interface HostCardProps {
  host: Host;
}

export const HostCard = ({ host }: HostCardProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-zinc-200 py-6">
      <Image src={host.avatarUrl} alt={host.avatarAlt} width={56} height={56} className="size-14 rounded-full object-cover" />
      <div><h2 className="font-semibold">Hosted by {host.name}</h2><p className="mt-1 text-sm text-zinc-600">{host.yearsAsHost} years hosting</p></div>
    </section>
  );
};