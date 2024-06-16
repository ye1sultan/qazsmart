import { useTranslation } from "react-i18next";
import { Bento } from "src/sections/activities/bento";
import Title from "src/sections/components/title";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";

const AllActivities = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="max-w-[1526px] w-full h-full mx-auto flex flex-col gap-y-10 px-4 mb-8">
        <Header />
        <Title name={`${t("actPage.title")}`} />
        <Bento showAll={true} />
      </div>
      <Footer />
    </div>
  );
};

export default AllActivities;
