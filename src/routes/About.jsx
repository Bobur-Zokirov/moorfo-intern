import { Hero, AboutUs } from "../components";
import AboutImg from "../assets/night.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("global");
  return (
    <>
      <Hero cName={"hero-mid"} image={AboutImg} title={t("hero.title.about")} />
      <AboutUs />
    </>
  );
}

export default About;
