import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHaN9Tu3-Ou4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725493143423?e=1735171200&v=beta&t=xfhSQTchHDh1-F-mny5dSbFUtpbXZ74ctkC_QU7ACZU"
            alt="Chitrangi Bhatnagar"
            className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8 border-4 border-gold-500"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gold-500">Chitrangi Bhatnagar</h1>
            <p className="text-xl mb-4 text-gold-300">3rd-year Software Engineering Student</p>
            <p className="mb-4 text-gray-300">
              I'm passionate about AI/ML, with a focus on Large Language Models (LLMs) and Computer Vision. My goal is to become an LLM specialist and work on projects that leverage these technologies to make society a better place to live in.
            </p>
            <p className="text-gray-300">
              Currently, I'm expanding my skills in cutting-edge AI technologies and seeking opportunities to contribute to impactful projects that can be deployed to benefit society.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
};

export default About;