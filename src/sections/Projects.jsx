import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';

export const Projects = () => {
  // Your complete, real-world project arsenal
  const projects = [
    {
      title: "CSA Department Portal",
      description: "The official, comprehensive web platform built for the Computer Science and Application department. Engineered with secure database management, dynamic routing, and a scalable architecture.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://csa-dept-pro.web.app/" 
    },
    {
      title: "Reclaim-It (Lost & Found)",
      description: "A centralized campus utility platform designed to streamline reporting and recovering lost items. Features secure user authentication and real-time database syncing.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      link: "https://reclaim-it-7997e.web.app/"
    },
    {
      title: "Kinetic 3D Portfolio",
      description: "A high-performance personal portfolio utilizing WebGL, React Three Fiber, and mathematical rendering (Lerp) to create a premium, interactive user experience.",
      tech: ["React", "Three.js", "Framer Motion"],
      link: "#"
    },
    {
      title: "Rock Paper Scissors",
      description: "A dynamic, interactive web game focusing on fast DOM manipulation, real-time score tracking, and clean state management.",
      tech: ["JavaScript", "React", "CSS3"],
      link: "https://sumit529763.github.io/R_P_S_Game/"
    },
    {
      title: "Precision Calculator",
      description: "A responsive utility application built to handle complex mathematical logic, edge cases, and continuous state updates flawlessly.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "https://sumit529763.github.io/Calculator/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 pointer-events-auto mt-32">
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 tracking-wider drop-shadow-lg"
      >
        FEATURED <span className="text-accent">PROJECTS</span>
      </motion.h2>
      
      {/* Updated the grid to handle 5 items beautifully (switches to 3 columns on ultra-wide screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {projects.map((proj, index) => (
          <GlassCard key={index} {...proj} />
        ))}
      </div>
      
    </section>
  );
};