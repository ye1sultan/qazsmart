import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "src/@/components/ui/button";
import { ArrowCircleRight } from "../assets/icons/icons";
import Title from "../components/title";
import { Bento } from "./bento";

const Activities = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/activities");
  };

  return (
    <div
      id="activities"
      className="max-w-[1526px] w-full h-full mx-auto flex flex-col gap-y-10 px-4"
    >
      <div className="flex justify-between items-center mr-4">
        <Title name={`${t("activities.title")}`} />
        <Button onClick={handleClick} size="icon" variant="ghost">
          <ArrowCircleRight className="w-8 h-8 md:w-12 md:h-12" />
        </Button>
      </div>
      <Bento />
    </div>
  );
};

export default Activities;
