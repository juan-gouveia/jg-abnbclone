import Link from "next/link";

export const SiteLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Staybnb home"
      className="text-xl font-bold text-rose-500 transition-colors hover:text-rose-600"
    >
      staybnb
    </Link>
  );
};