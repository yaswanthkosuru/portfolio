import React from "react";
import {
  IconCode,
  IconLayout,
  IconServer,
  IconRobot,
  IconSettings,
  IconCloud,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandAws,
  IconBrandAzure,
  IconDatabase,
  IconBrandDocker,
  IconBrandGit,
  IconGitBranch,
  IconTerminal2,
  IconBrain,
  IconGraph,
} from "@tabler/icons-react";

const Skills = () => {
  const skills = {
    basic: [
      { name: "C", icon: <IconTerminal2 className="w-5 h-5 mr-2" /> },
      { name: "Java (Beginner)", icon: <IconCode className="w-5 h-5 mr-2" /> },
      { name: "Python", icon: <IconBrandPython className="w-5 h-5 mr-2" /> },
      {
        name: "Data Structures and Algorithms (Python)",
        icon: <IconGraph className="w-5 h-5 mr-2" />,
      },
      { name: "AWS", icon: <IconBrandAws className="w-5 h-5 mr-2" /> },
      { name: "Azure", icon: <IconBrandAzure className="w-5 h-5 mr-2" /> },
    ],
    frontend: [
      { name: "HTML", icon: <IconBrandHtml5 className="w-5 h-5 mr-2" /> },
      { name: "CSS", icon: <IconBrandCss3 className="w-5 h-5 mr-2" /> },
      {
        name: "JavaScript",
        icon: <IconBrandJavascript className="w-5 h-5 mr-2" />,
      },
      { name: "React JS", icon: <IconBrandReact className="w-5 h-5 mr-2" /> },
      { name: "Next.js", icon: <IconBrandNextjs className="w-5 h-5 mr-2" /> },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript className="w-5 h-5 mr-2" />,
      },
    ],
    backend: [
      { name: "Node.js", icon: <IconServer className="w-5 h-5 mr-2" /> },
      { name: "MongoDB", icon: <IconDatabase className="w-5 h-5 mr-2" /> },
      { name: "SQL", icon: <IconDatabase className="w-5 h-5 mr-2" /> },
      {
        name: "Django Framework",
        icon: <IconBrandPython className="w-5 h-5 mr-2" />,
      },
    ],
    automation: [
      { name: "Git", icon: <IconBrandGit className="w-5 h-5 mr-2" /> },
      { name: "Docker", icon: <IconBrandDocker className="w-5 h-5 mr-2" /> },
      { name: "Kubernetes", icon: <IconCloud className="w-5 h-5 mr-2" /> },
      {
        name: "GitLab CI/CD",
        icon: <IconGitBranch className="w-5 h-5 mr-2" />,
      },
    ],
    ai: [
      {
        name: "Machine Learning",
        icon: <IconBrain className="w-5 h-5 mr-2" />,
      },
      { name: "Deep Learning", icon: <IconRobot className="w-5 h-5 mr-2" /> },
      { name: "Pandas", icon: <IconBrandPython className="w-5 h-5 mr-2" /> },
      { name: "NumPy", icon: <IconBrandPython className="w-5 h-5 mr-2" /> },
      {
        name: "Matplotlib",
        icon: <IconBrandPython className="w-5 h-5 mr-2" />,
      },
      {
        name: "Scikit-Learn Basics",
        icon: <IconGraph className="w-5 h-5 mr-2" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <IconCode className="text-indigo-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Basic Skills</h2>
          </div>
          <ul className="space-y-2">
            {skills.basic.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-400">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Frontend Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <IconLayout className="text-green-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Frontend</h2>
          </div>
          <ul className="space-y-2">
            {skills.frontend.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-400">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <IconServer className="text-red-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Backend</h2>
          </div>
          <ul className="space-y-2">
            {skills.backend.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-400">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Automation Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <IconSettings className="text-yellow-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Automation</h2>
          </div>
          <ul className="space-y-2">
            {skills.automation.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-400">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <IconRobot className="text-blue-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Artificial Intelligence</h2>
          </div>
          <ul className="space-y-2">
            {skills.ai.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-400">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
