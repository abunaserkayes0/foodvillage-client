import Carousel from "../Molecules/Carousel";
import ContactInfo from "../Molecules/ContactInfo";
import About from "../Organisms/About";
import Features from "../Organisms/Features";
import Products from "../Organisms/Products";
import Services from "../Organisms/Services";
import Teams from "../Organisms/Teams";
import Testimonials from "../Organisms/Testmonials";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <ContactInfo />
      <Products />
      <Teams />
      <Features />
      <Testimonials />
    </>
  );
}
