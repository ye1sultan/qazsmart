import { useTranslation } from "react-i18next";
import { LearnMore } from "./learn-more";

export const DummyContent = ({ dummy }) => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <div className="p-4 flex flex-col justify-between items-start">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-500">
          More tours are yet to come, but did you know?
        </p>
        <h3 className="text-2xl font-bold">{dummy.name[selectedLanguage]}</h3>
        <p>{dummy.text[selectedLanguage]}</p>
      </div>
      <LearnMore className="text-neutral-950" />
    </div>
  );
};
