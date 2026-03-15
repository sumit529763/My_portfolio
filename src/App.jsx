import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { HeroNode } from './canvas/HeroNode';
import { Lights } from './canvas/Lights';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Navbar } from './components/Navbar';

// Imported icons for buttons and the new floating sidebar
import { Github, Linkedin, Instagram, Facebook, Download, ArrowRight } from 'lucide-react';

import heroImg from './assets/hero.png';

function App() {
  return (
    <div className="w-screen h-screen bg-darkBg relative selection:bg-accent selection:text-white">
      
      {/* --- 3D ENVIRONMENT --- */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <Lights />
          <HeroNode />
        </Canvas>
      </div>

      {/* --- THE FLOATING DOCK NAVBAR --- */}
      <Navbar />

      {/* --- NEW: FLOATING LEFT SOCIAL BAR --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50"
      >
        <a href="https://github.com/sumit529763" target="_blank" rel="noreferrer" className="text-textSub hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/sumitnaik52/" target="_blank" rel="noreferrer" className="text-textSub hover:text-[#0A66C2] hover:scale-110 hover:-translate-y-1 transition-all duration-300">
          <Linkedin size={22} />
        </a>
        <a href="https://www.instagram.com/syntax.of.sumit/" target="_blank" rel="noreferrer" className="text-textSub hover:text-[#E1306C] hover:scale-110 hover:-translate-y-1 transition-all duration-300">
          <Instagram size={22} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100051440592382" target="_blank" rel="noreferrer" className="text-textSub hover:text-[#1877F2] hover:scale-110 hover:-translate-y-1 transition-all duration-300">
          <Facebook size={22} />
        </a>
        {/* Decorative Line */}
        <div className="w-[1px] h-24 bg-gradient-to-b from-textSub to-transparent mx-auto mt-4"></div>
      </motion.div>


      {/* --- 2D UI OVERLAY --- */}
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-y-auto scroll-smooth">
        
        {/* 🔥 REDESIGNED PREMIUM HERO 🔥 */}
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative pointer-events-none">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-accent/10 blur-[150px] rounded-full z-[-1]"></div>

          {/* Added -mt-16 to pull everything UP and away from the dock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center pointer-events-auto -mt-16 md:-mt-24" 
          >
            
            {/* 1. THE NEW "GLASS PILL" AVATAR */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-8 rounded-full mb-8 shadow-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-accent/50">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-darkBg shadow-[0_0_15px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all duration-500">
                <img 
                  src={heroImg} 
                  alt="Sumit" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase">Welcome to my space</span>
                <span className="text-textMain text-sm md:text-base font-medium tracking-wide">Hi, I'm Sumit 👋</span>
              </div>
            </div>

            {/* 2. MASSIVE TYPOGRAPHY */}
            <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-none mb-4 bg-gradient-to-b from-white via-textMain to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
              SUMIT
            </h1>
            
            {/* 3. SUBTITLE */}
            <p className="text-sm md:text-xl text-textSub font-light tracking-[0.3em] uppercase mb-12 pointer-events-none">
              Full Stack <span className="text-accent font-bold drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]">&</span> 3D Developer
            </p>

            {/* 4. REDESIGNED ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-accent/20 border border-accent/50 text-accent rounded-full font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] flex items-center justify-center gap-3"
              >
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-3"
              >
                <Download size={18} /> Resume
              </a>
            </div>

          </motion.div>

          {/* Animated Scroll Mouse safely locked high above the dock */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none"
          >
            <div className="w-[24px] h-[40px] border-2 border-textSub rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-textSub rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* The Content Sections */}
        <About />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <div className="h-[25vh] flex items-center justify-center text-white/30 text-sm pb-8 pointer-events-none relative z-10">
          <p>© 2026 Sumit. Built with React Three Fiber.</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;