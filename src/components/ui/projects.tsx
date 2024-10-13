import React from "react";
import { CardSpotlightDemo } from "@components/cardSpotlight";

const projects = () => {
  const details = [
    {
      title: "Lushy - Online Vegetable Selling App",
      points: [
        "Developed mobile-responsive application.",
        "Implemented server-side rendering with Next.js.",
        "Integrated secure login with NextAuth.",
        "Used Redux for state management.",
        "Stored data in MongoDB.",
        "Technologies: Next.js, NextAuth, Tailwind, MongoDB, Redux.",
      ],
    },
    {
      title: "Study Buddy - Connecting Professionals and Learners",
      points: [
        "Enabled real-time messaging with Django Channels.",
        "Built secure backend with Django.",
        "Used MySQL for data management.",
        "Frontend designed using Bootstrap.",
        "Platform connects professionals and learners.",
        "Technologies: Django, Bootstrap, Channels, MySQL.",
      ],
    },
    {
      title: "Employee Promotion Prediction Model",
      points: [
        "Applied machine learning algorithms.",
        "Achieved 91% prediction accuracy.",
        "Used Scikit-learn for models.",
        "Analyzed data using Pandas, NumPy.",
        "Optimized models through preprocessing.",
        "Technologies: Scikit-learn, Pandas, NumPy.",
      ],
    },
  ];

  const projects = details.map((project, index) => {
    return (
      <div className="flex" key={index}>
        <CardSpotlightDemo project={project} />
      </div>
    );
  });
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className=" mt-10 grid grid-cols-3 gap-3">{projects}</div>
    </>
  );
};

export default projects;
