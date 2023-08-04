import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";
import { useTranslation } from "react-i18next";

function Trip() {
  const { t } = useTranslation("global");
  return (
    <div className="trip">
      <h1>{t("trips.heading")}</h1>
      <p>{t("trips.subheading")}</p>

      <div className="trip-card">
        <TripData
          image={Trip1}
          heading={t("trips.trip1.title")}
          text={t("trips.trip1.text")}
        />
        <TripData
          image={Trip2}
          heading={t("trips.trip2.title")}
          text={t("trips.trip2.text")}
        />
        <TripData
          image={Trip3}
          heading={t("trips.trip3.title")}
          text={t("trips.trip3.text")}
        />
      </div>
    </div>
  );
}

export default Trip;
