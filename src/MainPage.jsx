import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Footer from "./sections/Footer";
import Reviews from "./sections/Reviews";
import MapContainer from "./sections/map/MapContainer";

const MainPage = () => (
    <div className="bg-white font-mont">
        <Hero />
        <MapContainer />
        <Tours />
        <Reviews />
        <Footer />
    </div>
);

export default MainPage;