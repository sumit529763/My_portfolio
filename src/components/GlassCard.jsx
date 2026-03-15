import { motion } from 'framer-motion';

export const GlassCard = ({ title, description, tech, link }) => {
  return (
    <motion.div
      // Framer Motion magic: Starts invisible and 50px lower
      initial={{ opacity: 0, y: 50 }}
      // Animates to visible and original position when scrolled into view
      whileInView={{ opacity: 1, y: 0 }}
      // Only triggers once, and waits until the card is a bit higher on the screen
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 flex flex-col h-full group transition-colors duration-300"
    >
      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium">
            {item}
          </span>
        ))}
      </div>
      <a href={link} className="inline-block px-6 py-2 bg-white/10 hover:bg-accent hover:text-white text-gray-200 rounded-lg transition-colors font-medium text-center w-max cursor-pointer">
        View Project
      </a>
    </motion.div>
  );
};