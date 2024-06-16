import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../redux/slices/reviews";

import Title from "../components/title";
import Empty from "./components/empty";

import { ReviewsPart } from "./reviews-part";
import { Stats } from "./stats";

const Reviews = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const reviews = useSelector((state) => state.reviews.reviews.items);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div
      id="reviews"
      className="max-w-[1526px] w-full mx-auto px-4 flex flex-col gap-y-12 sm:gap-y-14 my-4"
    >
      <Title name={`${t("reviews.title")}`} />
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <Stats reviews={reviews} />

        {reviews && reviews.length > 0 ? (
          <ReviewsPart reviews={reviews} />
        ) : (
          <Empty text={"No reviews"} subText={"Write your first review!"} />
        )}
      </div>
    </div>
  );
};

export default Reviews;
