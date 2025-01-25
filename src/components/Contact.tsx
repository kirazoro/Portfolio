import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-[#1A1A1A]">
      {/* Charcoal black background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#F5F5F5]">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-[#2a2d34] p-8 rounded-lg shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-[#F5F5F5] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-[#F5F5F5] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-[#F5F5F5] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Links Section */}
          <div className="bg-[#2a2d34] p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#F5F5F5]">
              Connect with me
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:chitrangi.bhatnagar@example.com"
                  className="flex items-center text-[#A5A58D] hover:text-[#F5F5F5] transition-all"
                >
                  <Mail className="w-6 h-6 mr-2" /> chitrangibhatnagar@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chitrangi-bhatnagar-2a591b255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#A5A58D] hover:text-[#F5F5F5] transition-all"
                >
                  <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kirazoro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#A5A58D] hover:text-[#F5F5F5] transition-all"
                >
                  <Github className="w-6 h-6 mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dineandialect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#A5A58D] hover:text-[#F5F5F5] transition-all"
                >
                  <Instagram className="w-6 h-6 mr-2" /> Dine and Dialect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
