import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Activities from "./admin/app/pages/activities/Activities";
import CreateActivity from "./admin/app/pages/activities/CreateActivity";
import EditActivity from "./admin/app/pages/activities/EditActivity";
import Reviews from "./admin/app/pages/reviews/Reviews";
import Login from "./admin/auth/Login";

import MainPage from "./main";
import WriteReview from "./sections/create-review/create-review";
import ActivityPage from "./sections/pages/activity-page/activity-page";
import AllActivities from "./sections/pages/all-activities/all-activities";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <div className="bg-[#fffef7] text-neutral-950 font-mont">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/activities" element={<AllActivities />} />
          <Route path="/activity/:id" element={<ActivityPage />} />
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
