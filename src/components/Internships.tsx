import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Internships
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Software Developer Intern at Houzee</h3>
          </div>
          <p className="mb-4">
            During my internship at Houzee, I had the opportunity to work on cutting-edge technologies and contribute to impactful projects:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Developed fast APIs using FastAPI and PostgreSQL, improving response times by 30%</li>
            <li>Implemented chatbots using Retrieval-Augmented Generation (RAG) techniques, enhancing customer support efficiency</li>
            <li>Collaborated with cross-functional teams to design and implement new features for the Houzee platform</li>
            <li>Optimized database queries, resulting in a 25% reduction in overall application load time</li>
          </ul>
          <p className="mb-4">
            <strong>Technologies used:</strong> Python, FastAPI, PostgreSQL, React, TypeScript, Docker, AWS
          </p>
          <p>
            This internship provided invaluable experience in full-stack development, AI/ML integration, and working in an agile environment. It reinforced my passion for creating innovative solutions and working with emerging technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;