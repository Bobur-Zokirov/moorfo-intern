import { Hero, Destination, Trip } from "../components";

import HeroImg from "../assets/12.jpg";

const Home = () => {
  return (
    <>
      <Hero
        cName={"hero"}
        image={HeroImg}
        title={"Your journey your life"}
        text={"Choose your favourite destination"}
        buttonText={"Travel plan"}
        btnClass={"show"}
      />
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
