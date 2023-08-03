import { Hero, Navbar, Footer, AboutUs } from "../components";
import AboutImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Hero cName={"hero-mid"} image={AboutImg} title={"About"} />
      <AboutUs />
    </>
  );
}

export default About;
