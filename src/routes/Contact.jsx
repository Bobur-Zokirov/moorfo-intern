import { Hero, ContactForm } from "../components";

import AboutImg from "../assets/2.jpg";

function Contact() {
  return (
    <>
      <Hero cName={"hero-mid"} image={AboutImg} title={"Contact"} />
      <ContactForm />
    </>
  );
}

export default Contact;
