import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className={"first-des"}
        title={"Taal Volcano, Batangas"}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. PageMaker including versions of Lorem Ipsum.`}
        img1={Mountain1}
        img2={Mountain2}
      />

      <br />
      <br />

      <DestinationData
        className={"first-des-reverse"}
        title={"What is Lorem Ipsum!"}
        text={`It is a long established fact that a reader will 
        be distracted by the readable content of a page when looking 
        at its layout. The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution of letters, as opposed to using 
        'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum 
        as their default model text, and a search for 'lorem ipsum' will uncover many 
        web sites still in their infancy.`}
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
