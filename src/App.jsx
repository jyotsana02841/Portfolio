import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-8 text-center">
        <motion.h1
          className="text-4xl font-extrabold text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          JYOTSANA
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Web Developer
        </motion.p>
      </header>

      {/* About Section */}
      <section className="p-8" id="about">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I'm a Computer Science student passionate about building web
          applications with clean and scalable code. My focus is on the MERN
          stack, and I enjoy designing intuitive interfaces and solving complex
          logic. I'm always eager to learn new technologies and contribute to
          meaningful projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-8 bg-white shadow-inner" id="skills">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Skills</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Programming Languages
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Frameworks & Libraries
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
              <li>ReactJS</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Databases</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8" id="projects">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-indigo-800">
               Virtual Meeting Platform (Next.js, WebRTC, Stream, Clerk, Tailwind CSS)
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Developed a scalable virtual meeting platform that allows real-time video/audio conferencing using WebRTC
 and Stream, supporting up to X users per session.giImplemented a dynamic user interface with responsive video grids, chat functionality, and screen sharing,
 ensuring a seamless user experience across devices.
            </p>
            <a
              href="https://github.com/jyotsana02841/NextCollab.git"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              GitHub
            </a>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-indigo-800">
              e-Commerce (React, Node.js, Express, MongoDB, Python, Flask)
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Built a feature-rich e-commerce site that boosted daily visits by
              over 500, enhancing user experience with intuitive navigation and
              secure Stripe checkout. Developed a product suggestion algorithm
              that improved usability and addressed key checkout friction
              points. Optimized the database architecture, reducing data
              retrieval times by 30%, resulting in a smoother user experience
              for over 500 daily visitors.
            </p>
            <a
              href="https://github.com/jyotsana02841/ShopEasy"
              target="_blank"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 bg-white shadow-inner flex" id="contact">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4 justify-center">
          Contact Me
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow max-w-md mx-auto text-center">
          <p className="mb-4 text-gray-700">
            Feel free to connect with me through the following platforms:
          </p>
          <div className="flex justify-center gap-6 text-blue-600 text-lg">
            <a
              href="https://www.linkedin.com/in/jyotsana-joshi-569607253/"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jyotsana02841"
              className="hover:underline"
            >
              GitHub
            </a>
            <a href="#" className="hover:underline">
              joshijyotsana82@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-600 mt-8">
        © JYOTSANA {new Date().getFullYear()} | Built with React & Tailwind
        CSS
      </footer>
    </div>
  );
}
