"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import Faculty from "./components/Faculty";
import LearningExperience from "./components/LearningExperience";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Batches from "./components/Batches";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Courses />
      <Batches />
      <WhyChooseUs />
      <Results />
      <Faculty />
      <LearningExperience />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}