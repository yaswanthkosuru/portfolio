import { BackgroundBoxesDemo } from "@components/Hero";
const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];
import { FloatingNav } from "@components/ui/floatingNavbar";
import { Spotlight } from "@components/ui/spotLight";
import { useEffect, useState } from "react";
import Projects from "@components/ui/projects";
import { TimelineDemo } from "@components/experience";
import ContactForm from "@components/contactForm";
import Skills from "@components/Skills";
export default function Home() {
  return (
    <div className="bg-background relative text-white">
      <div className="w-1/2"></div>
      <div className="">
        <BackgroundBoxesDemo />
      </div>
      <div className="mx-2 md:mx-20">
        <div className="border-black">
          <FloatingNav navItems={navItems} />
        </div>
        <section id="about">
          <TimelineDemo />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
