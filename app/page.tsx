import Hero from "components/Hero";
import FeaturedProducts from "components/FeaturedProducts";
import About from "components/About";
import FreeResources from "components/FreeResources";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <FreeResources />
      <Testimonials />
      <Contact />
    </>
  );
}
