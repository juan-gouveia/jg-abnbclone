import { CatalogListings } from "@/components/catalog-listings";
import { rooms } from "@/data/rooms";

const CatalogPage = async (props: PageProps<"/catalog">) => {
  const { category, query } = await props.searchParams;
  const normalizedQuery = typeof query === "string" ? query.trim() : "";
  const normalizedCategory = typeof category === "string" ? category : "";
  const matchingRooms = rooms.filter((room) => {
    const matchesQuery = room.title.toLowerCase().includes(normalizedQuery.toLowerCase());
    return matchesQuery && (!normalizedCategory || room.category === normalizedCategory);
  });

  return <CatalogListings rooms={matchingRooms} query={normalizedQuery} />;
};

export default CatalogPage;