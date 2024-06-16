import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchActivityById } from "src/redux/slices/activities";

import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import ActivityInfo from "./activity-info";
import PageMap from "./page-map";

const ActivityPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item: activity, status } = useSelector(
    (state) => state.activities.selectedActivity
  );

  useEffect(() => {
    dispatch(fetchActivityById(id));
  }, [id, dispatch]);

  if (status === "error") {
    return <div>Error loading activity.</div>;
  }

  if (!activity) {
    return null;
  }

  return (
    <>
      <div className="max-w-[1526px] w-full h-full mx-auto flex flex-col gap-y-10 px-4">
        <Header />
        {status === "loading" ? (
          <div>...Loading</div>
        ) : (
          <>
            <ActivityInfo activity={activity} />
            <PageMap coord={activity.coordinates} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ActivityPage;
