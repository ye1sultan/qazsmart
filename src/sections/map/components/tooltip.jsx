import { useTranslation } from "react-i18next";
import { Button } from "src/@/components/ui/button";
import { ArrowCircleRight } from "src/sections/assets/icons/icons";

export const MarkerCard = ({ activity }) => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const handleSeeMoreClick = () => {
    console.log(activity._id);
  };

  return (
    <div className="max-w-[300px] flex justify-between items-center gap-8">
      <div className="text-xl font-medium">
        {activity.name[selectedLanguage]}
      </div>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleSeeMoreClick}
        className="self-end"
      >
        <ArrowCircleRight className="w-8 h-8" />
      </Button>
    </div>
  );
};
