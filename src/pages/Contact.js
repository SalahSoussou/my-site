import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Ghero from "../components/G-hero";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div>
      <Nav />
      <Ghero title="Contact." text="Some of my work" />
      <Form />
      <Footer />
    </div>
  );
}
