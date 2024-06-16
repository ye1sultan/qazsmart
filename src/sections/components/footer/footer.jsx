import { useTranslation } from "react-i18next";
import { ArrowUp, Instagram } from "../../assets/icons/icons";
import { Telegram, Whatsapp, Youtube } from "../../assets/icons/social-media";
import backgroundImage from "../../assets/imgs/footer-bg2.jpg";
import { Languages } from "./languages";

const navigation = [
  {
    name: "Telegram",
    href: "/",
    icon: Telegram,
  },
  {
    name: "Whatsapp",
    href: "/",
    icon: Whatsapp,
  },
  {
    name: "Instagram",
    href: "/",
    icon: Instagram,
  },
  {
    name: "Youtube",
    href: "/",
    icon: Youtube,
  },
];

const footerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "100% 45%",
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="w-full relative z-10" style={footerStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffef7]" />
      <div className="max-w-[1526px] w-full mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 items-center z-10 relative">
        <div className="justify-self-center xs:justify-self-start">
          <p className="text-center font-medium text-lg text-neutral-900">
            {t("footer.copyrightText")} Made{" "}
            <a
              className="underline underline-offset-4 decoration-neutral-950"
              href="https://t.me/yelsultan"
            >
              yels667
            </a>
          </p>
        </div>
        <Languages />
        <div className="flex justify-center items-center gap-x-4 capitalize flex-shrink-0">
          <span className="font-medium text-neutral-900 text-lg flex justify-center items-center gap-x-2">
            {t("footer.contactUsText")}
            <ArrowUp className="stroke-[1.5px] rotate-90" />
          </span>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-900 hover:text-neutral-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
