import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";

export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome />
      <TripsList />
      <TripDetail />
    </div>
  );
}
