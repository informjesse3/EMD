// App.jsx
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Facilities from "./components/Facilities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Elmadel Coffee Gardens - Farm Stay in Machakos</title>
        <meta
          name="description"
          content="Stay at Elmadel Coffee Gardens – spacious rustic chalet in Machakos with modern amenities, breakfast, free WiFi, and scenic views."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Facilities />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
