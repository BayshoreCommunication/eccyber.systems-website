import About from "components/About";
import Contact from "components/Contact";
import FeaturedProducts from "components/FeaturedProducts";
import FreeResources from "components/FreeResources";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";

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
