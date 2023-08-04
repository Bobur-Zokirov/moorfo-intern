import { Hero, Trip } from "../components";
import AboutImg from "../assets/3.jpg";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation("global");
  return (
    <>
      <Hero
        cName={"hero-mid"}
        image={AboutImg}
        title={t("hero.title.service")}
      />
      <Trip />
    </>
  );
}

export default Service;
