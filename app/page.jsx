import About from "./components/About";
import BackgroundSection from "./components/Background";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { HeroImage } from "./components/HeroImage";
import ProjectGallery from "./components/ProjectGallery";
import Testimonials from "./components/Testimotionials";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <HeroImage /> */}
      <About />
      <BackgroundSection />
      <ProjectGallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
