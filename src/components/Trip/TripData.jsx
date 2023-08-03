import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
