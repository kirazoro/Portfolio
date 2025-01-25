import React from 'react';
import { Code, Database, Server, Brain, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code className="w-6 h-6 text-gold-500" />,
    items: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: ['Flask', 'FastAPI', 'RESTful APIs'],
  },
  {
    name: 'Databases',
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    items: ['MongoDB', 'MySQL'],
  },
  {
    name: 'AI/ML',
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'TensorFlow',
      'PyTorch',
    ],
  },
  {
    name: 'Tools & Others',
    icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    items: [
      'Git',
      'Docker',
      'AWS',
      'Agile Methodologies',
      'Data Structures & Algorithms',
    ],
  },
];

const SkillCard: React.FC<Skill> = ({ name, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className="bg-white text-black rounded-lg shadow-md border border-gold-500 p-6 hover:shadow-lg hover:border-gold-300 transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-2 text-black">{name}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center text-black"
        >
          <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-[#6B705C] text-[#F5F5F5]" // Muted Olive Green background and Ivory White text
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-[#CB997E] text-center" // Terracotta color for header
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
