import "./DestinationStyles.css";

const DestinationData = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>

        <div className="image">
          <img src={props.img1} alt="mountain1" />
          <img src={props.img2} alt="mountain2" />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
