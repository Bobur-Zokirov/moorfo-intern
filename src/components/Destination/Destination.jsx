import { useTranslation } from "react-i18next";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  const { t } = useTranslation("global");
  return (
    <div className="destination">
      <h1>{t("destinations.title")}</h1>
      <p>{t("destinations.subtitle")}</p>

      <DestinationData
        className={"first-des"}
        title={t("destinations.heading.des1")}
        text={t("destinations.text.des1")}
        img1={Mountain1}
        img2={Mountain2}
      />

      <br />
      <br />

      <DestinationData
        className={"first-des-reverse"}
        title={t("destinations.heading.des2")}
        text={t("destinations.text.des2")}
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
