import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import News from "./sections/News";
import MapContainer from "./sections/map/MapContainer";

const App = () => {
	return (
		<div className="w-full overflow-x-hidden bg-[#f9f8fd]">
			<Hero />
			<MapContainer />
			<Tours />
			<Reviews />
			<News />
			<Footer />
		</div>
	);
}

export default App;