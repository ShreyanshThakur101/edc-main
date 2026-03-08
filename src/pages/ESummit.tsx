import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Starfield from '../components/ui/Starfield';

// Glacier Palette Reference
const COLORS = {
  frost: '#D6D6DB',    // Lightest
  silver: '#AFB7C7',   // Soft Gray
  steel: '#8A9BB4',    // Muted Blue
  medium: '#667B98',   // Medium Blue
  glacier: '#2C6EA1',  // Primary Blue
  deep: '#0a0c10',     // Background
  card: '#16212e'      // Card Base
};

const ESummit = () => {
  const features = [
    {
      icon: Users,
      title: 'Industry Leaders',
      description: 'Keynote sessions from successful entrepreneurs and business leaders',
    },
    {
      icon: Trophy,
      title: 'Startup Competitions',
      description: 'Pitch your ideas and compete for exciting prizes and funding opportunities',
    },
    {
      icon: Calendar,
      title: 'Multi-Day Event',
      description: 'Packed schedule of workshops, panels, and networking sessions',
    },
    {
      icon: MapPin,
      title: 'VIT Pune Campus',
      description: 'State-of-the-art venues and facilities for an immersive experience',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#D6D6DB] selection:bg-[#2C6EA1] selection:text-white relative overflow-hidden">
      <Navbar />

      {/* FIXED INFRASTRUCTURE: Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        {/* <Starfield gridColor="#8A9BB4" speed={0.15} /> */}
      </div>

      <div className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C6EA1]/10 border border-[#2C6EA1]/30 rounded-full text-[#2C6EA1] text-xs font-black uppercase tracking-[0.3em] mb-8">
            <Sparkles size={14} />
            Annual Flagship Event
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#D6D6DB] to-[#667B98] mb-8 tracking-tighter">
            E-SUMMIT PUNE
          </h1>
          
          <p className="text-xl md:text-2xl text-[#AFB7C7] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            The Premier Entrepreneurship Summit at VIT Pune — <span className="text-[#2C6EA1] font-bold">The Biggest Summit Of Pune</span>. Where Innovation Meets Opportunity.
          </p>

          <a
            href="https://esummit.ecellvitpune.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="h-14 px-10 bg-[#2C6EA1] hover:bg-[#D6D6DB] hover:text-[#0a0c10] text-white font-black rounded-full transition-all shadow-[0_0_40px_rgba(44,110,161,0.4)] group">
              VISIT E-SUMMIT WEBSITE
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </a>
        </motion.div>

        {/* Overview Block: Glassmorphic Panel */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2C6EA1]/50 to-transparent blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-[#16212e]/80 backdrop-blur-xl rounded-[3rem] p-10 md:p-20 border border-[#8A9BB4]/20 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-black text-[#D6D6DB] mb-4">About the Summit</h2>
                <div className="h-1.5 w-24 bg-[#2C6EA1] mx-auto rounded-full" />
              </div>

              <div className="space-y-8 text-[#AFB7C7] leading-relaxed text-lg md:text-xl font-light">
                <p>
                  E-Summit Pune is the flagship annual event organized by V-EDC, standing as the biggest summit of Pune. 
                  It brings together the brightest minds in entrepreneurship, innovation, and business. This multi-day 
                  summit serves as a platform for aspiring entrepreneurs to learn, network, and showcase their ideas.
                </p>
                <p>
                  With keynote speeches from renowned entrepreneurs, interactive workshops, and investor pitching sessions, 
                  E-Summit Pune provides comprehensive exposure to the startup ecosystem, attracting participation from 
                  professionals and students across the nation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features: The "Glacier" Cards */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#D6D6DB] mb-4 uppercase tracking-tight">What to Expect</h2>
            <p className="text-[#8A9BB4] tracking-widest text-xs font-bold uppercase">Key highlights of E-Summit Pune</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-[#16212e] rounded-[2.5rem] p-10 border border-[#8A9BB4]/10 hover:border-[#2C6EA1]/50 transition-all duration-500 overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C6EA1]/5 blur-3xl group-hover:bg-[#2C6EA1]/15 transition-all" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#0a0c10] border border-[#2C6EA1]/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                    <feature.icon className="text-[#2C6EA1]" size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-[#D6D6DB] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#AFB7C7] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section: High Contrast Glacier Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-gradient-to-br from-[#16212e] via-[#0a0c10] to-[#16212e] border border-[#2C6EA1]/30 p-16 md:p-24 text-center shadow-[0_0_100px_rgba(44,110,161,0.15)] overflow-hidden"
        >
          {/* Decorative Frost Light */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#2C6EA1]/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#D6D6DB] mb-8 tracking-tighter">
              READY TO JOIN THE <br/><span className="text-[#2C6EA1]">BIGGEST SUMMIT?</span>
            </h2>
            <p className="text-[#AFB7C7] text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Visit the official E-Summit Pune website for event schedules, registration, and speaker lineups.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://esummit.ecellvitpune.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-12 bg-[#2C6EA1] hover:bg-[#D6D6DB] hover:text-[#0a0c10] text-white font-black rounded-full shadow-2xl transition-all">
                  VISIT WEBSITE
                  <ExternalLink className="ml-2" size={18} />
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" className="h-14 px-12 bg-white/5 border border-[#8A9BB4]/30 text-[#D6D6DB] hover:bg-white/10 rounded-full font-black transition-all">
                  CONTACT US
                </Button>
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer Branding Accent */}
      <footer className="py-20 text-center opacity-40">
        <p className="text-[#8A9BB4] text-[10px] tracking-[0.5em] font-black uppercase">
          E-SUMMIT PUNE • VIT PUNE • ESTD 1983
        </p>
      </footer>
    </div>
  );
};

export default ESummit;