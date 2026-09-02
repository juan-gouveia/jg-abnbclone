import { ArrowDownUp } from "lucide-react";

export type PriceOrder = "ascending" | "descending";

interface CatalogHeaderProps {
  resultCount: number;
  query: string;
  priceOrder: PriceOrder;
  onPriceOrderChange: (priceOrder: PriceOrder) => void;
}

export const CatalogHeader = ({ resultCount, query, priceOrder, onPriceOrderChange }: CatalogHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm text-zinc-500">{query ? `Search results for "${query}"` : "Stays in Miami"}</p>
        <h1 className="text-2xl font-semibold">{resultCount} {resultCount === 1 ? "stay" : "stays"} available</h1>
      </div>
      <label className="flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-2 text-sm font-medium">
        <ArrowDownUp className="size-4 text-zinc-600" aria-hidden="true" />
        <span className="sr-only">Order results by price</span>
        <select value={priceOrder} onChange={(event) => onPriceOrderChange(event.target.value as PriceOrder)} className="bg-transparent outline-none">
          <option value="ascending">Price: low to high</option>
          <option value="descending">Price: high to low</option>
        </select>
      </label>
    </div>
  );
};