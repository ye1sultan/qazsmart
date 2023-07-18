import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import News from "./sections/News";
import MapContainer from "./sections/map/MapContainer";
import AllTours from "./sections/tours/AllTours";

const App = () => {
	return (
		<div className="w-full overflow-x-hidden bg-[#fff]">
			<Hero />
			<MapContainer />
			<Tours />
			<Reviews />
			<News />
			<Footer />
			{/* <AllTours /> */}
		</div>
	);
}

export default App;