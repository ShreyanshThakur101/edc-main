import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

/* ===== IMPORT LOGOS ===== */
import sponsor1 from '@/assets/sponsors/1.png';
import sponsor2 from '@/assets/sponsors/2.png';
import sponsor3 from '@/assets/sponsors/3.png';
import sponsor4 from '@/assets/sponsors/4.png';
import sponsor5 from '@/assets/sponsors/5.png';
import sponsor6 from '@/assets/sponsors/6.png';
import sponsor7 from '@/assets/sponsors/7.png';
import sponsor8 from '@/assets/sponsors/8.png';
import sponsor9 from '@/assets/sponsors/9.png';
import sponsor10 from '@/assets/sponsors/10.png';
import sponsor11 from '@/assets/sponsors/11.png';
import sponsor12 from '@/assets/sponsors/12.png';
import sponsor13 from '@/assets/sponsors/13.png';
import sponsor14 from '@/assets/sponsors/14.png';
import sponsor15 from '@/assets/sponsors/15.png';

/* ===== SPONSOR DATA ===== */
const previousSponsors = [
  { id: 1, logo: sponsor1, alt: 'Sponsor 1' },
  { id: 2, logo: sponsor2, alt: 'Sponsor 2' },
  { id: 3, logo: sponsor3, alt: 'Sponsor 3' },
  { id: 4, logo: sponsor4, alt: 'Sponsor 4' },
  { id: 5, logo: sponsor5, alt: 'Sponsor 5' },
  { id: 6, logo: sponsor6, alt: 'Sponsor 6' },
  { id: 7, logo: sponsor7, alt: 'Sponsor 7' },
  { id: 8, logo: sponsor8, alt: 'Sponsor 8' },
  { id: 9, logo: sponsor9, alt: 'Sponsor 9' },
  { id: 10, logo: sponsor10, alt: 'Sponsor 10' },
  { id: 11, logo: sponsor11, alt: 'Sponsor 11' },
  { id: 12, logo: sponsor12, alt: 'Sponsor 12' },
  { id: 13, logo: sponsor13, alt: 'Sponsor 13' },
  { id: 14, logo: sponsor14, alt: 'Sponsor 14' },
  { id: 15, logo: sponsor15, alt: 'Sponsor 15' },
];

/* ===== COMPONENT: ANIMATED LOGO CIRCLE ===== */
const LogoCircle = ({ logo, alt }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.05 }}
    className="flex flex-col items-center group"
  >
    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center p-6 shadow-[0_0_20px_rgba(44,110,161,0.1)] group-hover:shadow-[0_0_40px_rgba(44,110,161,0.3)] transition-all duration-500 border-4 border-transparent group-hover:border-[#2C6EA1]/20">
      <img
        src={logo}
        alt={alt}
        className="max-w-full max-h-full object-contain filter group-hover:contrast-110 transition-all"
      />
      {/* Subtle Ring Decor */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#2C6EA1]/0 group-hover:border-[#2C6EA1]/40 group-hover:rotate-45 transition-all duration-1000" />
    </div>
    <span className="mt-4 text-[10px] font-bold tracking-[0.2em] text-[#8A9BB4] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
      Verified Partner
    </span>
  </motion.div>
);

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#D6D6DB] overflow-x-hidden selection:bg-[#2C6EA1]">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-24 text-center overflow-hidden px-6">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2C6EA1]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#2C6EA1] font-bold tracking-[0.5em] uppercase text-xs mb-4 block"
        >
          Our Global Network
        </motion.span>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D6D6DB] to-[#8A9BB4] uppercase">
          TRUSTED BY.
        </h1>
        
        <p className="text-[#AFB7C7] max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
          Connecting visionary brands with the next generation of <span className="text-white font-medium text-nowrap">high-impact founders.</span>
        </p>
      </section>

      {/* 2. PREVIOUS SPONSORS GRID */}
      <section className="pb-32 relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2C6EA1]/40 to-transparent" />
            <h2 className="text-sm font-bold text-[#8A9BB4] uppercase tracking-[0.4em]">Previous Portfolio</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2C6EA1]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 justify-items-center">
            {previousSponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <LogoCircle logo={sponsor.logo} alt={sponsor.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BECOME A SPONSOR PARTNERSHIP BOX */}
      <section className="pb-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* Outer Border Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2C6EA1]/0 via-[#2C6EA1]/20 to-[#2C6EA1]/0 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative rounded-[40px] border border-[#2C6EA1]/30 bg-[#0d1117] p-8 md:p-20 overflow-hidden shadow-2xl">
            {/* Background Decorative Shield */}
            <ShieldCheck className="absolute -right-12 -bottom-12 w-80 h-80 text-[#2C6EA1]/5 rotate-12" />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C6EA1]/10 border border-[#2C6EA1]/20 text-[#2C6EA1] text-xs font-bold uppercase tracking-tighter">
                  <Zap size={14} /> Partnership 2026
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-none">
                  JOIN THE <br /><span className="text-[#2C6EA1]">INITIATIVE.</span>
                </h2>
                <p className="text-[#AFB7C7] text-lg font-light leading-relaxed">
                  Gain direct access to 5000+ students, recruit elite talent, and cement your brand in the Pune startup ecosystem.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1zqqhPmEQIg70d6NVbUCCGfAhbh-QwmER/view?usp=sharing" target='_blank'
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#2C6EA1] text-white font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(44,110,161,0.4)]"
                  >
                    Request Brochure <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-[#8A9BB4] uppercase tracking-widest font-bold">Direct Line</span>
                    <span className="text-sm font-mono text-[#D6D6DB]">edc@vit.edu</span>
                  </div>
                </div>
              </div>

              {/* Stats/Benefits Cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Globe, label: "Brand Reach", val: "50+ Monthly" },
                  { icon: Zap, label: "Flagship Events", val: "5 Annual" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-[#2C6EA1]/20 flex items-center justify-center">
                      <stat.icon className="text-[#2C6EA1]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A9BB4] uppercase font-bold tracking-widest">{stat.label}</p>
                      <p className="text-xl font-bold text-white">{stat.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER ACCENT */}
      <footer className="py-12 border-t border-[#8A9BB4]/10 text-center relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#2C6EA1] to-transparent opacity-30" />
         <p className="text-[#8A9BB4] text-[10px] tracking-[0.4em] uppercase">V-EDC • Strategic Innovation Council</p>
      </footer>
    </div>
  );
}