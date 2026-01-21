import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <div className="border-t-4 border-blue-500">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}