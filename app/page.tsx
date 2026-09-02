import { HomeListings } from "@/components/home-listings";
import { rooms } from "@/data/rooms";

const Home = () => {
  return (
    <main>
      <HomeListings rooms={rooms} />
    </main>
  );
};

export default Home;
