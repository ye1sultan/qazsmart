import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Tours from "./sections/Tours";

const App = () => {
	return (
		<div className="w-full">
			<Hero />
			<Tours />
			<Reviews />
		</div>
	);
}

export default App;