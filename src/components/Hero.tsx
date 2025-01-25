import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 relative bg-olive-900">
      <div className="absolute inset-0 bg-gradient-texture" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-accent-light">
            Chitrangi Bhatnagar
          </h1>
          <p className="text-xl md:text-2xl text-accent-DEFAULT mb-12 leading-relaxed">
            Hi, I'm software developer passionate about building innovative, user-centric solutions. From accessibility to sustainability, I aim to create technology that empowers communities and enhances lives. With expertise in AI, full-stack development, and problem-solving, I bring a fresh perspective to every project I work on.
          </p>
          <motion.a
            href="#projects"
            className="inline-flex items-center text-lg border-2 border-accent-light text-accent-light px-6 py-3 hover:bg-accent-light hover:text-olive-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <ArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;