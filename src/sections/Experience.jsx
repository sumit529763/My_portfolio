import { motion } from 'framer-motion';

export const Experience = () => {
  const timeline = [
    {
      role: "Lead Full Stack Developer",
      company: "CSA Department Portal (GIETU)",
      date: "Late 2025 - Present",
      details: [
        "Spearheading a 3-person development team to architect the official department platform.",
        "Engineering secure database management and scalable routing with the MERN stack.",
        "Deploying and maintaining the production environment via Vercel."
      ]
    },
    {
      role: "BCA Candidate & MCA Aspirant",
      company: "GIET University",
      date: "Graduating 2026",
      details: [
        "Mastering core computer science concepts, Java programming, and full-stack web development.",
        "Actively preparing for rigorous MCA entrance exams, including NIMCET and CUET PG.",
        "Consistently expanding technical arsenal with cutting-edge tools like React Three Fiber and Tailwind v4."
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 pointer-events-auto mt-20">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-16 tracking-wider drop-shadow-lg"
      >
        MY <span className="text-accent">JOURNEY</span>
      </motion.h2>

      <div className="max-w-4xl w-full space-y-12">
        {timeline.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            {/* The Timeline Line & Glowing Dot (Hidden on mobile, side-by-side on desktop) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10"></div>
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_#0ea5e9] z-10"></div>

            {/* The Content Card */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                <h4 className="text-accent font-medium mb-2 tracking-wide">{item.company}</h4>
                <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-widest">{item.date}</p>
                <ul className={`space-y-2 text-textSub ${index % 2 === 0 ? 'md:list-none' : 'list-disc list-inside md:list-none'}`}>
                  {item.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};