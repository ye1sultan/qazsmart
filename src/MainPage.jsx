import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Footer from "./sections/Footer";
import Reviews from "./sections/Reviews";
import Map from "./sections/Map";

const MainPage = ({ data }) => {
    document.title = "QazSmart - Home";

    return (
        < div >
            <Hero />
            <Tours data={data} />
            <Map />
            <Reviews />
            <Footer />
        </div >
    );
}

export default MainPage;