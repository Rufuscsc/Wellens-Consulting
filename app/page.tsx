import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Price } from "@/components/Price";
import Service from "@/components/Service";
import Testimony from "@/components/Testimony";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <About />
    <Price />
    <Testimony />
    <Contact isDarkMode={false} />
    <Footer/>
    </>
  );
}
