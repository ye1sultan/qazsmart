import Hero from "./sections/Hero";
import Tours from "./sections/Tours";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import News from "./sections/News";

const App = () => {
	return (
		<div className="w-full">
			<Hero />
			<Tours />
			<Reviews />
			<News />
			<Footer />
		</div>
	);
}

export default App;