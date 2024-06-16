import { useTranslation } from "react-i18next";

import Footer from "../components/footer/footer";
import Header from "../components/header";
import Title from "../components/title";

import { Form } from "./form";

const WriteReview = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="max-w-[1526px] w-full h-full mx-auto flex flex-col gap-y-10 px-4">
        <Header />
        <Title name={t("writeReview.title")} />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default WriteReview;
