import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "src/redux/slices/activities";
import { LongBento } from "./components/bentos/long-bento";
import { RegularBento } from "./components/bentos/regular-bento";
import { WideBento } from "./components/bentos/wide-bento";

export const Bento = ({ showAll }) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities.items);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const displayedActivities = showAll ? activities : activities.slice(0, 6);

  return (
    displayedActivities && (
      <>
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-4 h-full">
          <WideBento activity={displayedActivities[0]} index={0} />
          <RegularBento activity={displayedActivities[1]} index={1} />
          <LongBento activity={displayedActivities[2]} index={2} />
          <WideBento activity={displayedActivities[3]} index={3} />
          <RegularBento activity={displayedActivities[4]} index={4} />
          <RegularBento activity={displayedActivities[5]} index={5} />
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center gap-4 h-full w-full">
          <WideBento activity={displayedActivities[0]} index={0} />
          <WideBento activity={displayedActivities[1]} index={1} />
          <WideBento activity={displayedActivities[2]} index={2} />
        </div>
      </>
    )
  );
};
