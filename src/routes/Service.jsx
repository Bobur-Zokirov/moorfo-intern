import { Hero, Trip } from "../components";
import AboutImg from "../assets/9.jpg";

function Service() {
  return (
    <>
      <Hero cName={"hero-mid"} image={AboutImg} title={"Services"} />
      <Trip />
    </>
  );
}

export default Service;
