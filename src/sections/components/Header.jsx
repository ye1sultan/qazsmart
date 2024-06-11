import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "src/@/components/ui/sheet";

import russian from "../assets/imgs/russia.png";
import english from "../assets/imgs/united-kingdom.png";

import { Globe, Hamburger } from "../hero/assets/icons";

const flags = [
  { name: "English", src: english, lng: "en" },
  { name: "Русский", src: russian, lng: "ru" },
];

export default function Header() {
  const { t, i18n } = useTranslation();

  const storedFlag = localStorage.getItem("selectedFlag");
  const [selectedFlag, setSelectedFlag] = useState(
    storedFlag ? JSON.parse(storedFlag) : flags[0]
  );

  const [sheet, setSheet] = useState(false);

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    i18n.changeLanguage(flag.lng);
  };

  useEffect(() => {
    localStorage.setItem("selectedFlag", JSON.stringify(selectedFlag));
  }, [selectedFlag]);

  const handleSheetClick = (e) => {
    e.preventDefault();
    setSheet(false);
  };
  return (
    <div className="flex justify-between items-center text-neutral-950 px-4">
      <a href="/" className="text-[50px]">
        🇰🇿
      </a>
      <nav className="hidden md:flex space-x-16 capitalize text-base font-medium">
        <a href="/#activities">{t("header.activities")}</a>
        <a href="/#reviews">{t("header.reviews")}</a>
        <a href="/#footer">{t("header.contactUs")}</a>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Globe className="w-6 h-6 text-neutral-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          {flags.map((flag) => (
            <DropdownMenuItem
              key={flag.lng}
              onClick={() => handleFlagClick(flag)}
            >
              <img src={flag.src} alt={flag.name} className="w-5 h-5 mr-2" />
              {flag.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
