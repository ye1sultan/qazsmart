import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Activities from "./admin/app/pages/activities/Activities";
import CreateActivity from "./admin/app/pages/activities/CreateActivity";
import EditActivity from "./admin/app/pages/activities/EditActivity";
import Reviews from "./admin/app/pages/reviews/Reviews";
import Login from "./admin/auth/Login";

import MainPage from "./MainPage";
import AllActivities from "./sections/all-activities";
import TourPage from "./sections/tours/TourPage";
import WriteReview from "./sections/create-review";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <div className="bg-neutral-50 text-neutral-950 font-mont">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all-activities" element={<AllActivities />} />
          <Route path="/activities/:id" element={<TourPage />} />
          <Route path="/write-review" element={<WriteReview />} />

          <Route path="/admin/auth" element={<Login />} />
          <Route path="/admin/activities" element={<Activities />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/create-activity" element={<CreateActivity />} />
          {isAuth && (
            <Route path="/admin/edit-activity" element={<EditActivity />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
