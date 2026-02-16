import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Price  from "@/components/Price";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimony";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <About />
    <Price />
    <Testimonials />
    <Contact isDarkMode={false} />
    <Footer/>
    </>
  );
}
