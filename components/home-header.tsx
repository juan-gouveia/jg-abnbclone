import { Search, UserRound } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";

interface HomeHeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const HomeHeader = ({ query, onQueryChange }: HomeHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 md:px-8">
      <SiteLogo />
      <label className="relative mx-auto hidden w-full max-w-md sm:block">
        <span className="sr-only">Search stays</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search stays" className="h-11 w-full rounded-full border border-zinc-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-zinc-900" />
      </label>
      <button type="button" aria-label="Open user menu" className="grid size-10 place-items-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-950">
        <UserRound className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
};