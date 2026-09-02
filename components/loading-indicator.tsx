import { LoaderCircle } from "lucide-react";

export const LoadingIndicator = () => {
  return (
    <div className="flex min-h-72 items-center justify-center" role="status">
      <LoaderCircle className="size-8 animate-spin text-rose-500" aria-hidden="true" />
      <span className="sr-only">Loading stays</span>
    </div>
  );
};