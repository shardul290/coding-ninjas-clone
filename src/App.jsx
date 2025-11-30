import React from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import Advantages from "./components/Advantages";
import Placements from "./components/Placements";
import Footer from "./components/Footer";
import HighlightText from "./components/Highlight";
import TestimonialsAndTrusted from "./components/TestimonialsAndTrusted"; // <-- Ab ye Learning Model ko bhi handle karega

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 overflow-x-hidden">
      <Navbar />

      <main className="w-full pt-16">

        {/* HERO — full width */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <Hero />
        </div>

        {/* COURSES — container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Courses />
        </section>

        {/* STATS — full width */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <Stats />
        </div>

        {/* WHY US — full width */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <WhyUs />
        </div>

        {/* ADVANTAGES — full width */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <Advantages />
        </div>

        {/* PLACEMENTS (Ninja Gallery) — container */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Placements />
        </section>
        
        {/* === TESTIMONIALS & TRUSTED + LEARNING MODEL === */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <TestimonialsAndTrusted />
        </div>
        {/* ============================================== */}


      </main>

      {/* MOUNTAIN DIVIDER — full width, NO MARGIN */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-20">
        <img
          src="https://files.codingninjas.com/frame-1000003621-1-32257.webp"
          className="w-full object-cover"
          alt="divider"
        />
      </div>

      <Footer />

      {/* HIGHLIGHT TEXT — full width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <HighlightText />
      </div>
    </div>
  );
}