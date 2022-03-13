import "./App.css";
import Services from "./components/BodySection/Services";
import Hero from "./components/BodySection/Hero";
import NavBar from "./components/NavBar/NavBar";
import "./styles/globals.css";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/BodySection/AboutMe";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
