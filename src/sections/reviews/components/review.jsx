import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { translateMonthNames } from "src/utils/translateMonthNames";
import { Star } from "../../assets/icons/icons";

export default function Review({ name, date, stars, comment }) {
  const { i18n } = useTranslation();
  const formattedDate = translateMonthNames(date, i18n);

  return (
    <div className="py-10">
      <div className="flex items-center">
        <img
          src="https://picsum.photos/2000/1000"
          alt={`${name}`}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-base font-semibold text-neutral-900 ml-1">
            {name}
          </h4>
          <div className="mt-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating, index) => (
              <Star
                key={index}
                className={clsx(
                  stars > rating ? "fill-yellow-400" : "fill-neutral-300",
                  "h-6 w-6 flex-shrink-0"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="mt-4 space-y-6 text-base italic text-neutral-600"
        dangerouslySetInnerHTML={{ __html: comment }}
      />
      <div className="mt-4 text-sm text-neutral-600">{formattedDate}</div>
    </div>
  );
}
