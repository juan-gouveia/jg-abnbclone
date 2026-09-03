"use client";

import { Minus, Plus } from "lucide-react";
import { DayPicker, type DateRange } from "react-day-picker";
import { useState } from "react";

interface ReservationCardProps {
  price: number;
}

const formatDate = (date: Date) => new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);

export const ReservationCard = ({ price }: ReservationCardProps) => {
  const [guests, setGuests] = useState(1);
  const [dates, setDates] = useState<DateRange>();
  const nights = dates?.from && dates.to ? Math.max(1, Math.ceil((dates.to.getTime() - dates.from.getTime()) / 86_400_000)) : 1;

  return (
    <aside className="border-t border-zinc-200 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:rounded-lg md:border md:shadow-lg">
      <div className="flex items-baseline justify-between"><p><span className="text-lg font-semibold">${price}</span> night</p><p className="text-sm text-zinc-600">{guests} {guests === 1 ? "guest" : "guests"}</p></div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2"><span className="text-sm font-medium">Guests</span><div className="flex items-center gap-3"><button type="button" onClick={() => setGuests(guests - 1)} disabled={guests === 1} aria-label="Remove guest" className="grid size-7 place-items-center rounded-full border border-zinc-300 disabled:cursor-not-allowed disabled:opacity-40"><Minus className="size-4" aria-hidden="true" /></button><span className="w-3 text-center text-sm">{guests}</span><button type="button" onClick={() => setGuests(guests + 1)} disabled={guests === 4} aria-label="Add guest" className="grid size-7 place-items-center rounded-full border border-zinc-300 disabled:cursor-not-allowed disabled:opacity-40"><Plus className="size-4" aria-hidden="true" /></button></div></div>
      <details className="group mt-3"><summary className="cursor-pointer text-sm font-medium">{dates?.from ? `${formatDate(dates.from)}${dates.to ? ` - ${formatDate(dates.to)}` : ""}` : "Select dates"}</summary><DayPicker mode="range" selected={dates} onSelect={setDates} disabled={{ before: new Date() }} className="mt-3 text-sm" classNames={{ months: "flex", month: "space-y-3", month_caption: "flex justify-center", caption_label: "font-semibold", nav: "flex items-center justify-between", button_previous: "grid size-8 place-items-center rounded-full hover:bg-zinc-100", button_next: "grid size-8 place-items-center rounded-full hover:bg-zinc-100", month_grid: "w-full border-collapse", weekdays: "text-zinc-500", weekday: "p-1 text-center text-xs font-medium", week: "", day: "p-1 text-center", day_button: "grid size-8 place-items-center rounded-full hover:bg-zinc-100 aria-selected:bg-rose-500 aria-selected:text-white", selected: "", range_start: "", range_end: "", range_middle: "bg-rose-50" }} /></details>
      <button type="button" className="mt-4 h-12 w-full rounded-lg bg-rose-500 font-semibold text-white transition hover:bg-rose-600">Reserve</button>
      <p className="mt-3 text-center text-sm text-zinc-600">${price * nights} total for {nights} {nights === 1 ? "night" : "nights"}</p>
    </aside>
  );
};