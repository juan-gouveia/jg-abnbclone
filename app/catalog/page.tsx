import { CatalogListings } from "@/components/catalog-listings";
import { rooms } from "@/data/rooms";
import { roomCategories } from "@/types/room";

const CatalogPage = async (props: PageProps<"/catalog">) => {
  const { category, query } = await props.searchParams;
  const normalizedQuery = typeof query === "string" ? query.trim() : "";
  const normalizedCategory = typeof category === "string" && roomCategories.includes(category as (typeof roomCategories)[number]) ? category : "";
  const matchingRooms = rooms.filter((room) => {
    const matchesQuery = room.title.toLowerCase().includes(normalizedQuery.toLowerCase());
    return matchesQuery && (!normalizedCategory || room.category === normalizedCategory);
  });

  return <CatalogListings rooms={matchingRooms} query={normalizedQuery} category={normalizedCategory} />;
};

export default CatalogPage;