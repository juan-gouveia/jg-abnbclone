import { Building2, Mountain, UserRound, Waves } from "lucide-react";
import { roomCategories, type RoomCategory } from "@/types/room";

interface CategoryFilterProps {
  activeCategory: RoomCategory | null;
  onCategoryChange: (category: RoomCategory | null) => void;
}

const categoryIcons = { Beach: Waves, Apartment: Building2, Room: UserRound, Mountain };

export const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <nav aria-label="Stay categories" className="overflow-x-auto px-4 pb-3 md:px-8">
      <div className="mx-auto flex w-max min-w-full snap-x gap-2 md:max-w-7xl md:justify-center">
        {roomCategories.map((category) => {
          const Icon = categoryIcons[category];
          const isActive = activeCategory === category;

          return (
            <button key={category} type="button" onClick={() => onCategoryChange(isActive ? null : category)} aria-pressed={isActive} className={`flex shrink-0 snap-start items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
              <Icon className="size-4" aria-hidden="true" />
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
};