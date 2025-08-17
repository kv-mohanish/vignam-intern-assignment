// File: app/page.tsx
// This file orchestrates the page layout by importing and composing components.

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import PopularDetails from "@/components/PopularDetails";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <VideoSection />
      <Services />
      <PopularDetails />
      <Footer />
    </main>
  );
};

export default Page;