import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchReviews } from "../../redux/slices/reviews";
import { EmptyIcon } from "../assets/icons/icons";
import Empty from "../components/empty";
import Review from "../components/review";
import Title from "../components/title";
import clsx from "clsx";

const Reviews = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const reviews = useSelector((state) => state.reviews.reviews.items);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const calculateAverageStars = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalStars = reviews.reduce((sum, review) => {
      return sum + parseFloat(review.stars);
    }, 0);

    const averageStars = totalStars / reviews.length;

    return averageStars.toFixed(1);
  };

  const starCounts = {};

  reviews.forEach((review) => {
    const stars = review.stars;
    if (starCounts[stars]) {
      starCounts[stars]++;
    } else {
      starCounts[stars] = 1;
    }
  });

  const possibleRatings = [5, 4, 3, 2, 1];

  const counts = possibleRatings.map((rating) => ({
    rating,
    count: starCounts[rating] || 0,
  }));

  return (
    <div
      id="reviews"
      className="container mx-auto flex flex-col justify-center gap-y-12 sm:gap-y-14 py-8"
    >
      <Title name={`${t("reviews.title")}`} />
      {reviews && reviews.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      key={rating}
                      className={clsx(
                        calculateAverageStars(reviews) > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="sr-only">
                  {calculateAverageStars(reviews)} out of 5 stars
                </p>
              </div>
              <p className="ml-2 text-sm text-gray-900">
                {t("reviews.basedOn")} {reviews.length} {t("reviews.reviews")}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>
              <dl className="space-y-3">
                {counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex-1 flex items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div
                        aria-hidden="true"
                        className="ml-1 flex-1 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={clsx(
                            reviews.length > 0
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <div className="ml-3 relative flex-1">
                          <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                          {count.count > 0 ? (
                            <div
                              className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                              style={{
                                width: `calc(${count.count} / ${reviews.length} * 100%)`,
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                      {Math.round((count.count / reviews.length) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                {t("reviews.thoughtsText")}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {t("reviews.thoughtsSubText")}
              </p>
              <Link
                to="/write-review"
                className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full
                            "
              >
                {t("reviews.btnText")}
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="-my-12 divide-y divide-gray-200">
                {reviews.slice(-3).map((review) => (
                  <Review
                    key={review._id}
                    name={review.name}
                    date={review.date}
                    stars={review.stars}
                    comment={review.comment}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-20">
          <Empty
            text={"No reviews"}
            subText={"Write your first review!"}
            btnText={t("reviews.btnText")}
            href="/write-review"
            svg={<EmptyIcon />}
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
