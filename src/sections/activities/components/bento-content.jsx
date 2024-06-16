import { useTranslation } from "react-i18next";
import { LearnMore } from "./learn-more";
import { TextWrapper } from "./text-wrapper";

export const BentoContent = ({ activity }) => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      <div className="relative w-full h-full flex flex-col justify-between items-start gap-4 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 gap-x-16 w-full">
          <TextWrapper text={activity?.name[selectedLanguage]} />
          <TextWrapper
            text={`From ${activity?.price}`}
            className="flex-shrink-0"
          />
        </div>
        <div className="w-full flex justify-between items-center text-lg md:text-xl text-neutral-50">
          <h1>
            {activity?.place[selectedLanguage]}
          </h1>
          <LearnMore id={activity?._id} />
        </div>
      </div>
    </>
  );
};
