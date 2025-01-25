import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Best Societal Relevant Project",
      project: "Aadhaar-Enabled Missing Persons Tracker",
      organization: "Presidency University, Bangalore",
      year: "2024"
    },
    {
      title: "First Prize",
      project: "Bengaluru Eco Summit Model Presentation",
      organization: "Yuvaka Sangha",
      year: "2024"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Awards & Recognition
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 mr-3 text-yellow-500" />
                <h3 className="text-xl font-bold">{award.title}</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">{award.project}</p>
                <p>{award.organization}</p>
                <p className="text-sm text-gray-400">{award.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;