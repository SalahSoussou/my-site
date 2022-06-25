import React from "react";
import Footer from "../components/Footer";
import Ghero from "../components/G-hero";
import Nav from "../components/Nav";
import ProjectsCard from "../components/ProjectsCard";

export default function Projects() {
  return (
    <div>
      <Nav />
      <Ghero title="Projects." text="Some of my work" />
      <ProjectsCard />

      <Footer />
    </div>
  );
}
