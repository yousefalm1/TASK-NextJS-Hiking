import Navbar from "@/components/Navbar";
import TripDetail from "@/components/TripDetail";
import TripsList from "@/components/TripsList";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <TripsList />
      <TripDetail />
    </div>
  );
}
