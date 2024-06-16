import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/@/components/ui/button";

export const Languages = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleLanguageClick = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <div className="justify-self-center flex justify-center items-center gap-4">
      <Button
        onClick={() => handleLanguageClick("ru")}
        variant="ghost"
        className="bg-transparent text-lg hover:bg-transparent"
      >
        Russian
      </Button>
      <Button
        onClick={() => handleLanguageClick("en")}
        variant="ghost"
        className="bg-transparent text-lg hover:bg-transparent"
      >
        English
      </Button>
    </div>
  );
};
