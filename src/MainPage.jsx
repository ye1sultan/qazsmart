import Activities from "./sections/activities/activities";
import Footer from "./sections/components/footer";
import Hero from "./sections/hero/hero";
import Map from "./sections/map";
import Reviews from "./sections/reviews/reviews";

const MainPage = () => {
  document.title = "QazSmart - Home";

  return (
    <div className="max-w-[1526px] w-full mx-auto">
      <Hero />
      <Activities />
      <Map />
      <Reviews />
      <Footer />
    </div>
  );
};

export default MainPage;
