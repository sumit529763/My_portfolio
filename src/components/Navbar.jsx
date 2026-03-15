import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export const Navbar = () => {
  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      // Fixed at the bottom, centered, with an extremely high z-index so it's always on top
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <nav className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-accent transition-all duration-300"
          >
            {item.icon}
            
            {/* The Tooltip that appears on hover */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-darkBg/90 backdrop-blur-sm border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-wider shadow-lg">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};