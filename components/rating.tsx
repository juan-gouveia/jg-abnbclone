import { Star } from "lucide-react";

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  return (
    <span className="flex items-center gap-1 text-sm font-medium" aria-label={`${value} out of 5 stars`}>
      <Star className="size-4 fill-rose-500 text-rose-500" aria-hidden="true" />
      {value.toFixed(1)}
    </span>
  );
};