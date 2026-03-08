import React, { useState, useEffect } from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import MagazineBookSection from '@/components/MagazineBookSection';
import ScrollFloat from '@/components/ScrollFloat';

// Assets
import logo from '@/assets/logo.png'; // Added for preloader
import img25 from '@/assets/25.png';
import img30 from '@/assets/ens.png';
import img35 from '@/assets/ead_png.png';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show branding/logo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0c10]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Pulsing Glow behind logo */}
              <div className="absolute inset-0 bg-[#2C6EA1] blur-3xl opacity-20 animate-pulse" />
              <img 
                src={logo} 
                alt="V-EDC Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="min-h-screen text-[#D6D6DB]"
        style={{ backgroundColor: '#0a0c10' }}
      >
        <Navbar />

        <main>
          {/* Hero */}
          <HeroSection />

          {/* Vision, Mission, Objectives */}
          <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              {/* Header */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[#D6D6DB]"
                >
                  Vision, Mission & Objectives
                </ScrollFloat>
                <p className="mt-4 text-base md:text-lg text-[#AFB7C7] max-w-2xl mx-auto">
                  What drives V-EDC: our long-term vision, our core mission, and the outcomes we pursue.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <FeatureCard
                  icon={<Target size={32} />}
                  title="Our Vision"
                  desc="To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures."
                />
                <FeatureCard
                  icon={<Lightbulb size={32} />}
                  title="Our Mission"
                  desc="Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders."
                />
                <FeatureCard
                  icon={<Users size={32} />}
                  title="Our Objectives"
                  desc="Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives."
                />
              </div>
            </div>
          </section>

          {/* Events & Campaigns */}
          <section
            id="events-campaigns"
            className="py-20"
            style={{ backgroundColor: '#060b14' }}
          >
            <div className="container mx-auto px-4 mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.05}
                  textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[#D6D6DB]"
                >
                  Events & Campaigns
                </ScrollFloat>
                <p className="mt-4 text-base md:text-lg text-[#AFB7C7]">
                  Discover our signature events and impactful campaigns designed to inspire innovation.
                </p>
              </div>
            </div>

            <LaserFlowBox />
          </section>

          {/* Magazines */}
          <div className="py-16">
            <MagazineBookSection />
          </div>
        </main>
      </div>
    </>
  );
};

/* ================= FEATURE CARD ================= */

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="group p-8 rounded-3xl bg-white/[0.02] border border-[#8A9BB4]/20 hover:border-[#2C6EA1]/60 hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-center text-center">
    <div className="w-16 h-16 mb-6 rounded-2xl bg-[#2C6EA1]/10 border border-[#2C6EA1]/30 flex items-center justify-center group-hover:scale-110 group-hover:text-[#2C6EA1] transition-all duration-500">
      {icon}
    </div>
    <h3 className="font-heading text-2xl font-bold text-[#D6D6DB] mb-4">
      {title}
    </h3>
    <p className="text-sm md:text-base leading-relaxed text-[#AFB7C7] group-hover:text-[#D6D6DB] transition-colors">
      {desc}
    </p>
  </div>
);

/* ================= LASER FLOW ================= */

function LaserFlowBox() {
  return (
    <div className="w-full h-[60vh] md:h-[75vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="relative w-full max-w-6xl h-4/5 rounded-[2rem] p-6 flex items-center justify-center gap-6 border border-[#2C6EA1]/30 bg-[#16212e]/40 backdrop-blur-xl">
        {/* Glow */}
        <div className="absolute inset-0 bg-[#2C6EA1]/10 blur-3xl rounded-full" />

        <img
          src={img30}
          alt="Event Side"
          className="hidden md:block w-[30%] aspect-[8/5] object-cover rounded-2xl opacity-40 border border-[#8A9BB4]/30 grayscale hover:grayscale-0 transition-all duration-700"
        />

        <img
          src={img25}
          alt="E-Summit"
          className="w-full md:w-[36%] aspect-[7/5] object-cover rounded-2xl border-2 border-[#2C6EA1] shadow-[0_0_50px_-12px_rgba(44,110,161,0.6)] z-10 scale-105"
        />

        <img
          src={img35}
          alt="Event Side"
          className="hidden md:block w-[30%] aspect-[8/5] object-cover rounded-2xl opacity-40 border border-[#8A9BB4]/30 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  );
}

export default Home;