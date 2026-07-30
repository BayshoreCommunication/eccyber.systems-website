import About from "components/About";
import Contact from "components/Contact";
import FeaturedProducts from "components/FeaturedProducts";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <FeaturedProducts />
      <Contact />
    </>
  );
}
