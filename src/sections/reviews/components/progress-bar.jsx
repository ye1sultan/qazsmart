import clsx from "clsx";
import { Star } from "src/sections/assets/icons/icons";
import { ProgressBarFill } from "./progress-bar-fill";

export const ProgressBar = ({ count, reviews }) => {
  return (
    <div key={count.rating} className="flex items-center text-sm">
      <dt className="flex-1 flex items-center">
        <p className="w-3 font-medium text-neutral-900">{count.rating}</p>
        <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
          <Star
            className={clsx(
              reviews.length > 0 ? "fill-yellow-400" : "fill-neutral-300",
              "h-6 w-6 flex-shrink-0"
            )}
          />

          <div className="ml-3 relative flex-1">
            <div className="h-3 bg-neutral-100 border border-neutral-200 rounded-full" />
            {count.count > 0 ? (
              <ProgressBarFill count={count} reviews={reviews} />
            ) : null}
          </div>
        </div>
      </dt>
      <dd className="ml-3 w-10 text-right tabular-nums text-sm text-neutral-900">
        {Math.round((count.count / reviews.length) * 100) || 0}%
      </dd>
    </div>
  );
};
