import { motion } from 'framer-motion';
import { ExternalLink, Megaphone, ShoppingBag, Users as UsersIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import DarkVeil from '@/components/DarkVeil';

// Event Images
import img25 from '@/assets/esumspeak.png';
import img30 from '@/assets/ensspeak.jpg';
import img35 from '@/assets/eadspeak.jpg';
import intro from '@/assets/introspeak.png'

// Glacier Palette Constants
const COLORS = {
  frost: '#D6D6DB',
  silver: '#AFB7C7',
  steel: '#8A9BB4',
  glacier: '#2C6EA1',
  deep: '#0a0c10',
  cardBg: '#16212e'
};

// Map images to events
const EVENT_IMAGES = {
  esummit: img25,
  'earn-sell': img30,
  awareness: img35,
  'intro-meet': intro, // replace later if needed
};

const Events = () => {
  const events = [
    {
      id: 'esummit',
      title: 'E-Summit Pune',
      icon: ExternalLink,
      tagline: 'The Premier Entrepreneurship Summit',
      description:
        'E-Summit Pune is the flagship annual event of V-EDC, bringing together industry leaders, successful entrepreneurs, investors, and aspiring founders.',
      highlights: [
        'Keynote sessions from renowned entrepreneurs',
        'Startup pitch competitions with prize money',
        'Investor networking and mentorship opportunities',
        'Interactive workshops on business strategy',
        'Panel discussions on emerging trends',
      ],
      link: 'https://esummit.ecellvitpune.in/',
    },
    {
      id: 'earn-sell',
      title: 'Earn & Sell',
      icon: ShoppingBag,
      tagline: 'Learn Business by Doing Business',
      description:
        'A hands-on marketplace event where students set up stalls and sell products or services, gaining real-world entrepreneurial experience.',
      highlights: [
        'Real-world marketplace experience',
        'Direct interaction with customers',
        'Learning pricing and marketing strategies',
        'Building confidence in sales',
        'Networking with fellow student entrepreneurs',
      ],
    },
    {
      id: 'awareness',
      title: 'Entrepreneurship Awareness Drive',
      icon: Megaphone,
      tagline: 'Igniting the Entrepreneurial Spirit',
      description:
        'An initiative focused on spreading awareness about startups and innovation through workshops, seminars, and guest lectures.',
      highlights: [
        'Introductory workshops for beginners',
        'Success stories from alumni entrepreneurs',
        'Sessions on ideation and problem-solving',
        'Career guidance in entrepreneurship',
        'Campus-wide awareness campaigns',
      ],
    },
    {
      id: 'intro-meet',
      title: 'Intro Meet',
      icon: UsersIcon,
      tagline: 'Welcome to the V-EDC Family',
      description:
        'An annual orientation event introducing new members to the vision, mission, and structure of V-EDC.',
      highlights: [
        'Introduction to V-EDC vision and mission',
        'Meet the core team',
        'Overview of upcoming initiatives',
        'Networking with peers',
        'How to get involved',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-[#D6D6DB] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0c10] via-[#16212e] to-[#0a0c10]">
        <div className="absolute inset-0 opacity-[0.35]">
          <DarkVeil speed={0.4} hueShift={210} noiseIntensity={0.02} warpAmount={0.8} />
        </div>
      </div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_65%)]" />

      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 font-heading">Our Events</h1>
          <p className="text-xl text-[#AFB7C7] max-w-2xl mx-auto">
            Empowering students through impactful entrepreneurial experiences
          </p>
        </div>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.section
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#2C6EA1]/10 border border-[#2C6EA1]/30 flex items-center justify-center shadow-[0_0_30px_rgba(44,110,161,0.2)]">
                    <event.icon className="text-[#2C6EA1]" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold">
                      {event.title}
                    </h2>
                    <p className="text-[#8A9BB4] text-sm font-medium mt-2 uppercase tracking-wider">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-[#AFB7C7] text-lg leading-relaxed">
                  {event.description}
                </p>

                <ul className="space-y-3">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#AFB7C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C6EA1] mt-2.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#2C6EA1] hover:bg-[#667B98] text-white shadow-lg shadow-[#2C6EA1]/30">
                      Visit Website
                      <ExternalLink className="ml-2" size={18} />
                    </Button>
                  </a>
                )}
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <div className="relative rounded-[3rem] border border-[#8A9BB4]/20 bg-[#0a0c10]/60 backdrop-blur-xl p-6 flex items-center justify-center min-h-[400px] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C6EA1]/10 blur-[120px]" />

                  <motion.img
                    src={EVENT_IMAGES[event.id]}
                    alt={event.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-h-[320px] w-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-10 border-t border-[#8A9BB4]/10 relative z-10">
        <p className="text-[#8A9BB4] font-medium tracking-wide">
  <span className="text-lg md:text-xl font-semibold">
    Contact
  </span>
  <br />
  Chief Of Relations <br />
  <span className="text-[#D6D6DB] font-bold">
    Rajvee Pardeshi :
  </span>{' '}
  <span className="text-[#2C6EA1]">
    +91 7218122005
  </span>
</p>
      </div>
    </div>
  );
};

export default Events;
