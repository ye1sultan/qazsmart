import { useTranslation } from "react-i18next";
import { At, Heart } from "../assets/icons/icons";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 items-center text-neutral-950 py-6">
      <div className="justify-self-center xs:justify-self-start flex justify-center items-center gap-x-2 text-lg">
        Kazakhstan
        <Heart className="w-5 h-5 fill-red-500 stroke-none" />
      </div>
      <nav className="hidden lg:flex justify-self-center space-x-16 capitalize font-medium">
        <a href="/#activities">{t("header.activities")}</a>
        <a href="/#reviews">{t("header.reviews")}</a>
        <a className="flex-shrink-0" href="/#footer">
          {t("header.contactUs")}
        </a>
      </nav>
      <p className="justify-self-center xs:justify-self-end flex justify-center items-center gap-x-2 text-lg">
        <At />
        qazsmart@gmail.com
      </p>
    </div>
  );
}
