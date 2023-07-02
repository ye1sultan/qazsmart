import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<div className="w-full">
			<Hero />
			<Tours />
			<Reviews />
			<Footer />
		</div>
	);
}

export default App;