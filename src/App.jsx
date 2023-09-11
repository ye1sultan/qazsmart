import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTours from "./sections/tours/AllTours";
import MainPage from './MainPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/all-tours" element={<AllTours />} />
			</Routes>
		</Router>
	);
}

export default App;