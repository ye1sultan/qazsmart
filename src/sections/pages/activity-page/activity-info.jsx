import { useTranslation } from "react-i18next";
import Info from "../../components/info";
import { Description } from "./components/description";

export default function ActivityInfo({ activity }) {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <div className="grid items-start grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
      <div>
        <h2 className="font-medium text-neutral-500 italic">{`${activity.place[selectedLanguage]} / ${activity.category[selectedLanguage]}`}</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl capitalize">
          {activity.name[selectedLanguage]}
        </p>
        <Info
          price={activity.price}
          date={activity.date}
          weather={activity.weather}
        />
        <dl className="mt-10 space-y-10">
          {activity.descriptions.map((feature) => (
            <Description
              key={feature.name.en}
              feature={feature}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </dl>
      </div>
      <div>
        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-neutral-100 overflow-hidden">
          <img
            src={`${process.env.REACT_APP_BASE_API}${activity.imageUrl}`}
            alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-neutral-100 overflow-hidden">
            <img
              src={`${process.env.REACT_APP_BASE_API}${activity.imageUrl}`}
              alt="Detail of temperature setting button on kettle bass with digital degree readout."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-neutral-100 overflow-hidden">
            <img
              src={`${process.env.REACT_APP_BASE_API}${activity.imageUrl}`}
              alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
