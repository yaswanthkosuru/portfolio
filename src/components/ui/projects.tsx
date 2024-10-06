import React from "react";
import { CardSpotlightDemo } from "@components/cardSpotlight";

const projects = () => {
  const details = [{}, {}, {}];
  const projects = details.map((project, index) => {
    return (
      <div className="flex" key={index}>
        <CardSpotlightDemo />
      </div>
    );
  });
  return (
    <section id="projects">
      <div>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className=" mt-10 grid grid-cols-3 gap-3">{projects}</div>
    </section>
  );
};

export default projects;
