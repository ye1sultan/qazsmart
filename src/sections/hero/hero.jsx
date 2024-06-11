import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "src/hooks/useScrollPosition";
import Header from "../components/header";
import backgroundImage from "./assets/kz.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y >= 0;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <main className="w-full min-h-screen flex flex-col gap-y-4 lg:gap-y-10 relative">
      <Header />
      <div className="w-full h-full flex flex-col justify-start items-center gap-y-12 px-4">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center font-georgia gap-x-16 gap-y-8">
          <h1 className="text-4xl lg:text-7xl font-medium tracking-tight">
            {t("main.hero.title")}
          </h1>
          <p className="w-full lg:max-w-[500px] text-lg lg:text-2xl tracking-wide text-neutral-500">
            {t("main.hero.subtitle")}
          </p>
        </div>
        <img
          src={backgroundImage}
          alt="els"
          className="w-full h-[60vh] rounded object-cover"
        />
      </div>
      <div
        className={clsx(
          "w-full flex justify-center absolute bottom-4 transition-opacity duration-300",
          hideOnScroll ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="mouse w-[40px] h-[60px] border-[3px] border-neutral-300 rounded-full relative"></div>
      </div>
    </main>
  );
};

export default Hero;
