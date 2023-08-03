import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, About, Service, Contact } from "./routes";

const App = () => {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
