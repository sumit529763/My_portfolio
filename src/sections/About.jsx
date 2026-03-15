import { motion } from 'framer-motion';

export const About = () => {
  // Your core tech stack
  const skills = [
    "Java","C","React.js", "Node.js", "Express","My_SQL",
    "MongoDB", "Three.js", "Tailwind CSS", "Git","Firebase"
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 pointer-events-auto mt-20">
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-8 tracking-wider drop-shadow-lg"
        >
          ABOUT <span className="text-accent">ME</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 leading-relaxed space-y-5 text-lg"
          >
            <p>
              I'm a full-stack developer currently wrapping up my BCA at GIET University and actively gearing up for my MCA journey. 
            </p>
            <p>
              My focus is on bridging the gap between robust backend architecture and immersive frontend experiences. Whether I'm architecting scalable MERN applications, writing logic in Java, or engineering interactive 3D web environments, I love pushing the boundaries of what the modern web can do.
            </p>
            <p>
              When I'm not debugging code or preparing for exams, you can usually find me analyzing my next move in a game of Chess or dropping into a BGMI match.
            </p>
          </motion.div>

          {/* Right Column: The Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">CORE ARSENAL</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-accent font-medium hover:bg-accent/20 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};