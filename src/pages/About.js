import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Ghero from "../components/G-hero";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div>
      <Nav />
      <Ghero title="About." text="Some of my work" />
      <AboutContent />
      <Footer />
    </div>
  );
}
