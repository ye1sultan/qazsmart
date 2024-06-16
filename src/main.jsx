import Activities from "./sections/activities/activities";
import Footer from "./sections/components/footer/footer";
import Hero from "./sections/hero/hero";
import Map from "./sections/map/map";
import Reviews from "./sections/reviews/reviews";

const MainPage = () => {
  document.title = "QazSmart - Home";

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-16">
      <Hero />
      <Activities />
      <Map />
      <Reviews />
      <Footer />
    </div>
  );
};

export default MainPage;
