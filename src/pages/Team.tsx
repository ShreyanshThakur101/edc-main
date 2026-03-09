import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Shield, Activity, ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';

/* ================= ASSETS ================= */
import logo from '../assets/logo.png';

import gayatriPhoto from '../assets/team/gayatri.png';
import sanskritiPhoto from '../assets/team/sanskriti.png';
import akshatPhoto from '../assets/team/akshat.png';
import yashPhoto from '../assets/team/yash.png';
import pujanPhoto from '../assets/team/pujan.png';
import adityaPhoto from '../assets/team/aditya.png';
import ayushPhoto from '../assets/team/Ayush_G.png';
import sanikaPhoto from '../assets/team/Sanika_Piraji.png';
import utkarshPhoto from '../assets/team/we.png';
import sayaliPhoto from '../assets/team/Sayali_Mashale.png';
import finance from '../assets/team/fianance.png';
import jiyaPhoto from '../assets/team/Jiya_Rathod-removebg-preview.png';
import ritikaPhoto from '../assets/team/IMG-20251001-WA0010-removebg-preview.png';
import aditiPhoto from '../assets/team/aditi.png';
import madhuraPhoto from '../assets/team/Madhura_Veer-removebg-preview.png';
import utPhoto from '../assets/team/Utkarsh_Sisodiya_-removebg-preview.png';
import rajveePhoto from '../assets/team/rajvee.png';
import siddhiPhoto from '../assets/team/siddhi.png';
import ishPhoto from '../assets/team/ish.png';
import ashPhoto from '../assets/team/ash.png';
import rohitPhoto from '../assets/team/rohit.png';
import praPhoto from '../assets/team/pra.png';
import rushabhPhoto from '../assets/team/RushabhMane.png';
import atharvaPhoto from '../assets/team/AtharvaKhode.png';

/* ================= CARD COMPONENT ================= */


const AvengersCard = ({
  name,
  role,
  email,
  phone,
  linkedinUrl = "https://linkedin.com",
  image,
  focusY = '20%',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      className="relative group p-[1px] bg-cyan-950/30 rounded-bl-3xl rounded-tr-3xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 h-[460px]"
    >
      <div className="relative z-10 p-5 bg-slate-950/80 backdrop-blur-xl flex flex-col h-full">

        <div className="relative w-full aspect-square mb-4 overflow-hidden border border-cyan-500/30">
          {image ? (
            <>
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover contrast-110"
                style={{ objectPosition: `50% ${focusY}` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0c10]/40" />
            </>
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
              <Shield className="w-12 h-12 text-cyan-900" />
            </div>
          )}
        </div>

        <div className="flex-grow space-y-1">
          <div className="flex items-center gap-2">
            <Activity size={10} className="text-cyan-500 animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-500/70 uppercase">
              link active
            </span>
          </div>

          <h3 className="text-lg font-black uppercase">{name}</h3>

          <span className="inline-block px-2 py-0.5 text-[13px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-wider">
            {role}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-1">
          <a
            href={`mailto:${email}`}
            className="h-8 flex items-center justify-center border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-colors"
          >
            <Mail size={12} />
          </a>

          <a
            href={`tel:${phone}`}
            className="h-8 flex items-center justify-center border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-colors"
          >
            <Phone size={12} />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 h-8 flex items-center justify-center border border-cyan-500/20 hover:bg-cyan-500 hover:text-black text-[8px] font-mono uppercase transition-colors"
          >
            connect
          </a>
        </div>

      </div>
    </motion.div>
  );
};

/* ================= MAIN PAGE ================= */

export default function Team() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const teamSections = [
    {
      title: 'The Leaders',
      members: [
        {
          name: 'Rohit Dane',
          role: 'Convener',
          email: 'rohit.dane23@vit.edu',
          phone: '+918668816853',
          image: rohitPhoto,
          linkedinUrl: "https://www.linkedin.com/in/rohit-dane-01a205288/"
        },
        {
          name: 'Ishawar Borade',
          role: 'Honorary Convener',
          email: 'ishawar.borade22@vit.edu',
          phone: '+919156834407',
          image: ishPhoto
        },
      ],
    },

    {
      title: 'The Advisors',
      members: [
        {
          name: 'Ashlesha Wagh',
          role: 'Chief of Advisor',
          email: 'ashlesha.wagh22@vit.edu',
          phone: '+919422088506',
          image: ashPhoto,
          linkedinUrl: "https://www.linkedin.com/in/ashlesha-wagh-14896125b/"
        },
        {
          name: 'Pratik Jadhav',
          role: 'Chief of Advisor',
          email: 'pratik.jadhav22@vit.edu',
          phone: '+918080897812',
          image: praPhoto,
          linkedinUrl: "https://www.linkedin.com/in/pratik-jadhav-530488258/"
        },
      ],
    },

    {
      title: 'Chief  Of Branding',
      members: [
        {
          name: 'Siddhi Chollangi',
          role: 'Chief of Branding',
          email: 'siddhi.chollangi23@vit.edu',
          phone: '+919226270324',
          image: siddhiPhoto,
          linkedinUrl: "https://www.linkedin.com/in/siddhi-chollangi-70b334288/"
        },
      ],
    },

    {
      title: 'Chief And Liasons Of Management',
      members: [
        {
          name: 'Rushabh Mane',
          role: 'Chief of Management',
          email: 'rushabh.mane23@vit.edu',
          phone: '+919175377652',
          image: rushabhPhoto,
          linkedinUrl: "https://www.linkedin.com/in/rushabh-mane-20601b2a7/"
        },
       {
          name: 'Atharva Khode',
          role: 'Liasons of Management',
          email: 'atharva.khode23@vit.edu',
          phone: '+918624004106',
          image: atharvaPhoto,
          linkedinUrl: "https://www.linkedin.com/in/atharva-khode-261684293/"
        },
      ],
    },

    {
      title: 'Chief Of Relations',
      members: [
        {
          name: 'Rajvee Pardeshi',
          role: 'Chief of Relations',
          email: 'rajvee.pardeshi23@vit.edu',
          phone: '+917218122005',
          image: rajveePhoto,
          linkedinUrl: "https://www.linkedin.com/in/rajveepardeshi/"
        },
      ],
    },

    {
      title: 'The Core Team',
      members: [
        {
          name: 'Sayali Mashale',
          role: 'Aesthetics Secretary',
          email: 'sayali.mashale24@vit.edu',
          phone: '+919970891426',
          image: sayaliPhoto,
          linkedinUrl: "https://www.linkedin.com/in/sayali-mashale-57976a345/"
        },

        {
          name: 'Ayush Deshmukh',
          role: 'Corporate Relations Secretary',
          email: 'ayush.deshmukh24@vit.edu',
          phone: '+919304857932',
          image: utkarshPhoto,
          linkedinUrl: "https://www.linkedin.com/in/ayushdeshmukh43/"
        },

        {
          name: 'Jiya Rathod',
          role: 'Event Execution Secretary',
          email: 'jiya.rathod24@vit.edu',
          phone: '+919272116336',
          image: jiyaPhoto,
          linkedinUrl: "https://www.linkedin.com/in/jiya-rathod-b289bb379/"
        },

        {
          name: 'Gaurang Bagwe',
          role: 'Finance Secretary',
          email: 'gaurang.bagwe24@vit.edu',
          phone: '+918459250314',
          image: finance,
          linkedinUrl: "https://www.linkedin.com/in/gaurang-bagwe-349085327/"
        },

        {
          name: 'Akshat Mutha',
          role: 'Marketing Secretary',
          email: 'akshat.mutha24@vit.edu',
          phone: '+917972108827',
          image: akshatPhoto
        },

        {
          name: 'Gayatri Dhikale',
          role: 'Marketing Secretary',
          email: 'gayatri.dhikale24@vit.edu',
          phone: '+918605573593',
          image: gayatriPhoto
        },

        {
          name: 'Sanskriti Dhakar',
          role: 'Marketing Secretary',
          email: 'sanskriti.dhakar24@vit.edu',
          phone: '+919981949981',
          image: sanskritiPhoto,
          linkedinUrl: "https://www.linkedin.com/in/sanskriti-dhakar/"
        },

        {
          name: 'Aditi Kolhapure',
          role: 'Multimedia and Design Secretary',
          email: 'aditi.kolhapure24@vit.edu',
          phone: '+918484808122',
          image: aditiPhoto,
          linkedinUrl: "https://www.linkedin.com/in/aditi-kolhapure-0a6655284/"
        },

        {
          name: 'Anuj Pol',
          role: 'Multimedia and Design Secretary',
          email: 'anuj.pol24@vit.edu',
          phone: '+917020546889',
          linkedinUrl: "https://www.linkedin.com/in/anuj-pol-b40436326/"
        },

        {
          name: 'Ayush Gurav',
          role: 'Operations Secretary',
          email: 'ayush.gurav23@vit.edu',
          phone: '+918999281762',
          image: ayushPhoto,
          linkedinUrl: "https://www.linkedin.com/in/ayush-gurav-3151bb296/"
        },

        {
          name: 'Sanika Piraji',
          role: 'Public Relations Secretary',
          email: 'sanika.piraji241@vit.edu',
          phone: '+919881616930',
          image: sanikaPhoto
        },

        {
          name: 'Utkarsh Sisodiya',
          role: 'Public Relations Secretary',
          email: 'utkarsh.sisodiya24@vit.edu',
          phone: '+919503326999',
          image: utPhoto,
          linkedinUrl: "https://www.linkedin.com/in/utkarsh-sisodiya-97726a342/"
        },

        {
          name: 'Ritika Navghare',
          role: 'Research and Media Secretary',
          email: 'ritika.navghare24@vit.edu',
          phone: '+919370170173',
          image: ritikaPhoto,
          linkedinUrl: "https://www.linkedin.com/in/ritika-navghare-8b5b9331b/"
        },

        {
          name: 'Manav Sharma',
          role: 'Research and Media Secretary',
          email: '',
          phone: '',
        },

        {
          name: 'Pujan Sonani',
          role: 'Sponsorship Secretary',
          email: 'pujan.sonani24@vit.edu',
          phone: '+919099282768',
          image: pujanPhoto,
          linkedinUrl: "https://www.linkedin.com/in/pujan-sonani-7538a230b/"
        },

        {
          name: 'Yash Nalawade',
          role: 'Sponsorship Secretary',
          email: 'yash.nalawade241@vit.edu',
          phone: '+919607484973',
          image: yashPhoto,
          linkedinUrl: "https://www.linkedin.com/in/yash-nalawade-893313338/"
        },

        {
          name: 'Manas Parikh',
          role: 'Startup Connect Secretary',
          email: 'manas.parikh24@vit.edu',
          phone: '+919529767923',
          linkedinUrl: "https://www.linkedin.com/in/manas-parikh-4252593a8/"
        },

        {
          name: 'Madhura Veer',
          role: 'Startup Connect Secretary',
          email: 'madhura.veer24@vit.edu',
          phone: '+919527963484',
          image: madhuraPhoto,
          linkedinUrl: "https://www.linkedin.com/in/madhura-veer-2184b6372/"
        },
      ],
    },
  ];

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
          >
            <img src={logo} className="w-40" />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="bg-[#020617] text-white min-h-screen">
        <Navbar />

        <section className="h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <span className="text-cyan-500 tracking-[0.5em] uppercase text-xs block mb-4">
              operational command
            </span>

            <h1 className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-800 mb-6">
              OUR TEAM.
            </h1>

            <p className="text-cyan-200/70 max-w-2xl mx-auto">
              the people who turn vision into execution.
            </p>

            <ArrowDown className="mx-auto mt-12 text-cyan-500 animate-bounce" size={32} />
          </div>
        </section>

        <div className="container mx-auto px-4 pb-24 space-y-24">
          {teamSections.map((section) => (
            <section key={section.title} className="flex flex-col items-center">
              <h2 className="text-3xl font-black uppercase text-cyan-400 mb-12">
                {section.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
                {section.members.map((member) => (
                  <div key={member.name} className="w-[320px]">
                    <AvengersCard {...member} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}