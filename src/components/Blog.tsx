import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  // ... (previous blogPosts array remains unchanged)
];

const BlogPost: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
  >
    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{post.date}</span>
      <a href={post.url} className="text-blue-500 hover:text-blue-600 flex items-center">
        Read more <BookOpen className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;