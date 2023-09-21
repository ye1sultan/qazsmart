import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Activities from './admin/app/pages/activities/Activities';
import CreateActivity from './admin/app/pages/activities/CreateActivity';
import EditActivity from './admin/app/pages/activities/EditActivity';
import Reviews from './admin/app/pages/reviews/Reviews';
import Login from './admin/auth/Login';
import AllActivities from './sections/AllActivities';
import TourPage from './sections/tours/TourPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
			//test
const App = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<div className='bg-white font-mont'>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/all-activities" element={<AllActivities />} />
					<Route path="/activities/:id" element={<TourPage />} />
					<Route path="/admin/auth" element={<Login />} />
					<Route path="/admin/activities" element={<Activities />} />
					<Route path="/admin/reviews" element={<Reviews />} />
					<Route path="/admin/create-activity" element={<CreateActivity />} />
					{isAuth ? <Route path="/admin/edit-activity" element={<EditActivity />} /> : ''}
				</Routes>
			</Router>
		</div>
	);
}

export default App;