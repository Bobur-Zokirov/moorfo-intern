import { useTranslation } from "react-i18next";
import "./AboutUsStyles.css";

function AboutUs() {
  const { t } = useTranslation("global");
  return (
    <div className="about-container">
      <h1>{t("about.history.title")}</h1>
      <p>{t("about.history.text")}</p>
      <h1>{t("about.mission.title")}</h1>
      <p>{t("about.mission.text")}</p>
      <h1>{t("about.vision.title")}</h1>
      <p>{t("about.vision.text")}</p>
    </div>
  );
}

export default AboutUs;
