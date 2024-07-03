
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SpecialThanks from "../components/SpecialThanks";

export default function Home() {
  return (
   <main className="relative bg-black-100 w-full h-max flex item-center justify-center overflow-hidden">
    <div className="w-full">
      <Hero/>
      <Projects/>
      <About/>
      {/* <SpecialThanks/> */}
      <Contact/>
    </div>
   </main>
  );
}
