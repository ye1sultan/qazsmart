import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../redux/slices/activities";
import Title from "../components/title";
import Activity from "./components/activity";
import { EmptyActivities } from "./empty";

const Activities = () => {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const activities = useSelector((state) => state.activities.activities.items);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div
      id="activities"
      className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8"
    >
      <Title name={`${t("activities.title")}`} />
      {activities && activities.length > 0 ? (
        <>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-wrap gap-y-10 gap-x-20">
            {activities.map((activity) => (
              <Activity
                key={activity._id}
                _id={activity._id}
                name={activity.name[selectedLanguage].toLowerCase()}
                category={activity.category[selectedLanguage]}
                text={activity.text[selectedLanguage]}
                date={activity.date}
                price={activity.price}
                imageUrl={activity.imageUrl}
              />
            ))}
          </div>
          <div className="w-full flex justify-center items-center capitalize mt-10">
            <a
              href="/all-activities"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {t("activities.buttonText")}
            </a>
          </div>
        </>
      ) : (
        <EmptyActivities />
      )}
    </div>
  );
};

export default Activities;
