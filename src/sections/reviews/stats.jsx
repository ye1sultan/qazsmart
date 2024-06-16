import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { calculateAverageStars } from "src/utils/calculateAverageStar";
import { Star } from "../assets/icons/icons";
import { ProgressBar } from "./components/progress-bar";

export const Stats = ({ reviews }) => {
  const { t } = useTranslation();
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
    <div className="lg:col-span-4">
      <div className="mt-3 flex items-center">
        <div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating, index) => (
              <Star
                key={index}
                className={clsx(
                  calculateAverageStars(reviews) > rating
                    ? "fill-yellow-400"
                    : "fill-neutral-300",
                  "h-6 w-6 flex-shrink-0"
                )}
              />
            ))}
          </div>
        </div>
        <p className="ml-2 text-sm text-neutral-900">
          {t("reviews.basedOn")} {reviews.length} {t("reviews.reviews")}
        </p>
      </div>

      <div className="mt-6">
        <dl className="space-y-3">
          {counts.map((count, index) => (
            <ProgressBar key={index} count={count} reviews={reviews} />
          ))}
        </dl>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-medium text-neutral-900">
          {t("reviews.thoughtsText")}
        </h3>
        <p className="mt-1 text-sm text-neutral-600">
          {t("reviews.thoughtsSubText")}
        </p>
        <Link
          to="/write-review"
          className="mt-6 inline-flex w-full bg-transparent border border-neutral-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-neutral-900 hover:bg-neutral-50 sm:w-auto lg:w-full"
        >
          {t("reviews.btnText")}
        </Link>
      </div>
    </div>
  );
};
