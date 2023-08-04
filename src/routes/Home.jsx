import { Hero, Destination, Trip } from "../components";

import HeroImg from "../assets/12.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <Hero
        cName={"hero"}
        image={HeroImg}
        title={t("hero.title.home")}
        text={t("hero.text")}
        buttonText={t("hero.btnText")}
        btnClass={"show"}
      />
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
