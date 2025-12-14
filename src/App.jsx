import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ResponsiveGallery from "./sections/ResponsiveGallery";
import Hero from "./sections/Hero";
import MotivationalSection from "./sections/MotivationalSection";
import ButtonWhatsapp from "./components/ButtonWhatsApp";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MotivationalSection />
        <ResponsiveGallery />
        <Form />
      </main>
      <Footer />
      <ButtonWhatsapp />
    </>
  );
}

export default App;
