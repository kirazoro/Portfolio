import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "LLM-Powered Educational Assistant",
    description:
      "An AI-driven educational assistant that uses Large Language Models to provide personalized learning experiences and answer complex questions across various subjects.",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "React"],
    role: "LLM Specialist",
    github: "https://github.com/chitrangibhatnagar/llm-educational-assistant",
    demo: "https://llm-edu-assistant-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Computer Vision for Accessibility",
    description:
      "A mobile application using computer vision to assist visually impaired individuals in navigating their environment and recognizing objects and text.",
    technologies: ["Python", "TensorFlow", "OpenCV", "React Native", "Azure Cognitive Services"],
    role: "Computer Vision Developer",
    github: "https://github.com/chitrangibhatnagar/cv-accessibility-app",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "NLP-Powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing to provide customer support and answer queries.",
    technologies: ["Python", "FastAPI", "React", "NLTK", "TensorFlow"],
    role: "AI/ML Developer",
    github: "https://github.com/chitrangibhatnagar/nlp-chatbot",
    demo: "https://nlp-chatbot-demo.herokuapp.com",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, technologies, role, github, demo, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className="rounded-lg shadow-lg overflow-hidden border border-gray-700"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 bg-pale-beige text-charcoal-black">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="mb-2">
        <strong>Role:</strong> {role}
      </p>
      <p className="mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      <div className="flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-terra-cotta hover:text-gray-900 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-1" /> GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-terra-cotta hover:text-gray-900 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-ivory-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "bg-muted-olive" : "bg-pale-beige"}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
