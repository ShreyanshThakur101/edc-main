import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Target, Eye, Rocket, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import clg from '../assets/clg.jpg'
import Starfield from '../components/ui/Starfield'; // Using your updated Grid/Starfield file
import { Link } from 'react-router-dom';

// Glacier Palette Constants
const COLORS = {
  frost: '#D6D6DB',    // Lightest
  silver: '#AFB7C7',   // Soft Gray
  steel: '#8A9BB4',    // Border/Muted
  medium: '#667B98',   // Accent
  glacier: '#2C6EA1',  // Primary Blue
  deep: '#0a0c10',     // Background
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Depth effects
  const scale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const rotate = useTransform(smoothProgress, [0, 0.2], [0, -5]);
  const opacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#0a0c10] text-[#D6D6DB] selection:bg-[#2C6EA1] selection:text-white">
      <Navbar />

      {/* FIXED BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        {/* <Starfield gridColor="#8A9BB4" speed={0.2} /> */}
      </div>

      {/* HERO SECTION: The "Diving" Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, rotate, opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#2C6EA1] font-bold tracking-[0.5em] uppercase text-xs mb-4 block"
          >
            Established 2013
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D6D6DB] to-[#8A9BB4]">
            OUR STORY.
          </h1>
          <p className="text-[#AFB7C7] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We Are More Than a Cell; We Are An Ecosystem Designed to Freeze Doubt And Ignite Innovation.
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex justify-center"
          >
            <ArrowDown className="text-[#2C6EA1]" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION: Translucent Floating Numbers */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years of Legacy', val: '12+' },
            { label: 'Startups Connected', val: '100+' },
            { label: 'Annual Events', val: '5+' },
            { label: 'Student Reach', val: '5000+' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#2C6EA1]/5 border border-[#8A9BB4]/10 text-center backdrop-blur-sm"
            >
              <h4 className="text-4xl font-black text-[#2C6EA1] mb-2">{stat.val}</h4>
              <p className="text-xs uppercase tracking-widest text-[#8A9BB4]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTENT BLOCK: The "Split Glacier" Layout */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Image with Masking */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#2C6EA1]/20 blur-3xl rounded-full" />
              <div className="relative rounded-[40px] overflow-hidden border border-[#8A9BB4]/30">
                 <img 
                  src={clg}
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Team" 
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl font-black text-[#D6D6DB]">About <span className="text-[#2C6EA1]">VIT Pune.</span></h2>
              <div className="space-y-6 text-[#AFB7C7] text-lg leading-relaxed">
                <p>
                  Vishwakarma Institute of Technology (VIT) Pune stands as a hub for nurturing future leaders. With over four decades of excellence, we provide a foundation where engineering meets intuition.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border-l-4 border-[#2C6EA1]">
                  <Zap className="text-[#2C6EA1]" />
                  <p className="text-sm font-medium italic">"Innovation is not a destination, it is our default state."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CARDS: Blue Card Logic */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Vision", icon: Eye, text: "To foster a culture of cold-blooded innovation and relentless entrepreneurship.", color: COLORS.glacier },
              { title: "Mission", icon: Target, text: "Empowering students through real-world exposure and elite mentorship programs.", color: COLORS.medium },
              { title: "Objectives", icon: Rocket, text: "Connecting aspiring founders with a global network of industry pioneers.", color: COLORS.steel }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[35px] overflow-hidden transition-all"
              >
                {/* Blue Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#16212e] to-[#0a0c10] border border-[#2C6EA1]/30 z-0" />
                <div className="absolute inset-0 bg-[#2C6EA1]/0 group-hover:bg-[#2C6EA1]/5 transition-colors z-0" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#2C6EA1]/20 flex items-center justify-center mb-8 border border-[#2C6EA1]/40">
                    <item.icon className="text-[#2C6EA1]" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#D6D6DB] mb-4">{item.title}</h3>
                  <p className="text-[#AFB7C7] leading-relaxed text-sm">{item.text}</p>
                </div>
                
                {/* Decorative Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#2C6EA1]/10 blur-2xl group-hover:bg-[#2C6EA1]/20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA / FOOTER ACCENT */}
      <footer className="py-20 border-t border-[#8A9BB4]/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2C6EA1] to-transparent opacity-50" />
        <h2 className="text-[#D6D6DB] font-black text-2xl mb-4">READY TO BREAK THE ICE?</h2>
        <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-[#2C6EA1] text-white rounded-full font-bold shadow-[0_0_30px_rgba(44,110,161,0.4)]"
  >
    Join V-EDC
  </motion.button>
</Link>
        <p className="mt-12 text-[#8A9BB4] text-[10px] tracking-[0.4em] uppercase">VIT Pune • Innovate. Empower. Lead.</p>
      </footer>
    </div>
  );
}