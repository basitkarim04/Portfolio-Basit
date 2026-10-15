"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useReveal();
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="[overflow-x:clip]">
      <Loader done={loaded} />
      <Header />
      <Hero loaded={loaded} />
      <About />
      <Work />
      {/* <Testimonials /> — hidden for now */}
      <Process />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
