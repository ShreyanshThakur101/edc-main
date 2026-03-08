import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import DarkVeil from '@/components/DarkVeil';
import logo from '@/assets/logo.png';

const LOGO_SIZES = {
  mobile: 'h-20',
  md: 'h-32',
};

const Hero = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.85, y: -30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        buttonsRef.current?.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        '-=0.4'
      );
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Poppins']"
    >
      {/* 🧊 GLACIER BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0c10] via-[#16212e] to-[#0a0c10]">
        <div className="absolute inset-0 opacity-[0.35]">
          <DarkVeil
            speed={0.4}
            hueShift={210}
            noiseIntensity={0.02}
            warpAmount={0.8}
          />
        </div>
      </div>

      {/* ❄️ GLACIER GLOW */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(44,110,161,0.22),transparent_65%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="space-y-8">

          {/* LOGO */}
          <div className="flex justify-center">
            <motion.img
              ref={logoRef}
              src={logo}
              alt="EDC Logo"
              className={`${LOGO_SIZES.mobile} md:${LOGO_SIZES.md} w-auto object-contain drop-shadow-[0_0_30px_rgba(44,110,161,0.45)]`}
              whileHover={{ scale: 1.08 }}
            />
          </div>

          {/* TITLE */}
          <motion.h1
            ref={titleRef}
            className="
              text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-b from-[#D6D6DB] to-[#8A9BB4]
            "
          >
            Inspire. Empower. Innovate.
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            ref={subtitleRef}
            className="text-sm sm:text-lg md:text-xl text-[#AFB7C7] max-w-2xl mx-auto leading-relaxed"
          >
            A community of entrepreneurs, innovators, and dreamers shaping the future of startups.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* PRIMARY */}
            <motion.button
              onClick={() => scrollToSection('#events-campaigns')}
              className="
                group inline-flex items-center gap-2 rounded-xl font-semibold text-white
                bg-[#2C6EA1]
                shadow-[0_0_35px_rgba(44,110,161,0.45)]
                px-7 py-3
                hover:bg-[#667B98]
                transition-colors
              "
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              View Events
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            {/* SECONDARY */}
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="
                rounded-xl px-7 py-3 font-semibold
                text-[#D6D6DB]
                border border-[#8A9BB4]/30
                bg-white/5 backdrop-blur-sm
                hover:bg-white/10
                transition-colors
              "
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
