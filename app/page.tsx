import { About } from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Service } from "@/components/Service";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <About />
    </>
  );
}
