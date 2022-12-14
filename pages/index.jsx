import Directions from "../components/Directions";
import FollowUs from "../components/FollowUs";
import Gallery from "../components/Gallery";
import Home from "../components/Home";

export default function MainPage() {
  return (
    <div className="font-workSans text-white scroll-smooth">
      <Home />
      <FollowUs />
      <Gallery />
      <Directions />
    </div>
  );
}
