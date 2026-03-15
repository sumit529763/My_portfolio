import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    // Added pb-32 (Padding Bottom) to push the form up and away from the floating dock!
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-6 pb-32 md:pb-40 relative z-10 pointer-events-auto mt-20">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 tracking-wider drop-shadow-lg text-center"
      >
        INITIATE <span className="text-accent">CONTACT</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
      >
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-sm tracking-widest uppercase">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-sm tracking-widest uppercase">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm tracking-widest uppercase">Message</label>
            <textarea 
              rows="5"
              placeholder="How can we work together?"
              className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-4 w-full bg-accent/20 hover:bg-accent text-accent hover:text-white border border-accent/50 hover:border-accent rounded-xl py-4 font-bold tracking-widest uppercase transition-all duration-300"
          >
            Send Message
          </button>
          
        </form>
      </motion.div>
    </section>
  );
};