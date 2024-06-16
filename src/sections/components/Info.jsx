import { useTranslation } from "react-i18next";

export default function Info({ price, date, weather }) {
  const { t } = useTranslation();

  const stats = [
    { name: t("actInfo.price"), stat: `From ${price}` },
    { name: t("actInfo.date"), stat: date },
    { name: t("actInfo.weather"), stat: weather },
  ];

  return (
    <dl className="grid grid-cols-1 gap-5 mt-10">
      {stats.map((item) => (
        <div
          key={item.name}
          className="px-4 py-5 bg-transparent border border-neutral-300 rounded-lg overflow-hidden sm:p-6"
        >
          <dt className="text-sm font-medium text-neutral-500 truncate">
            {item.name}
          </dt>
          <dd className="mt-1 text-2xl md:text-3xl font-semibold text-neutral-900">
            {item.stat}
          </dd>
        </div>
      ))}
    </dl>
  );
}
