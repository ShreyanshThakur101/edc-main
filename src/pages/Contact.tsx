import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, Send, Youtube, Twitter } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Starfield from '../components/ui/Starfield';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Glacier Palette Reference
const COLORS = {
  frost: '#D6D6DB',
  silver: '#AFB7C7',
  steel: '#8A9BB4',
  glacier: '#2C6EA1',
  deep: '#0a0c10',
  card: '#16212e'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our team will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'edc@vit.edu',
      link: 'mailto:vedc@vitpune.edu.in',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'VIT Pune Campus, Maharashtra, India',
    },
  ];

  const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com', // Update with your actual handle
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://youtube.com', // Update with your actual channel
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
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 font-heading text-[#D6D6DB] tracking-tighter uppercase"
          >
            Get in <span className="text-[#2C6EA1]">Touch</span>
          </motion.h1>
          <p className="text-xl text-[#AFB7C7] max-w-2xl mx-auto font-light">
            Have questions or want to join the V-EDC family? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form: Blue Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#16212e]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-[#8A9BB4]/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C6EA1]/10 blur-3xl group-hover:bg-[#2C6EA1]/20 transition-all" />
              
              <h2 className="text-3xl font-black text-[#D6D6DB] mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#8A9BB4] uppercase tracking-widest mb-3">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-[#0a0c10]/50 border-[#8A9BB4]/20 text-[#D6D6DB] focus:border-[#2C6EA1] focus:ring-[#2C6EA1]/20 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#8A9BB4] uppercase tracking-widest mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-[#0a0c10]/50 border-[#8A9BB4]/20 text-[#D6D6DB] focus:border-[#2C6EA1] focus:ring-[#2C6EA1]/20 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#8A9BB4] uppercase tracking-widest mb-3">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-[#0a0c10]/50 border-[#8A9BB4]/20 text-[#D6D6DB] focus:border-[#2C6EA1] focus:ring-[#2C6EA1]/20 rounded-xl resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 bg-[#2C6EA1] hover:bg-[#D6D6DB] hover:text-[#0a0c10] text-white font-black rounded-xl transition-all shadow-[0_10px_30px_rgba(44,110,161,0.3)] group">
                  SEND MESSAGE
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
            <div className="text-center py-10 px-6 mt-10 border-t border-[#8A9BB4]/10 relative z-10">
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
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-[#16212e]/50 backdrop-blur-sm rounded-3xl p-6 border border-[#8A9BB4]/10 hover:border-[#2C6EA1]/50 transition-all duration-500 shadow-xl group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0a0c10] border border-[#2C6EA1]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="text-[#2C6EA1]" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#8A9BB4] uppercase tracking-widest mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-bold text-[#D6D6DB] hover:text-[#2C6EA1] transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-[#D6D6DB]">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media: Glacier Hub */}
            <div className="bg-[#16212e]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#8A9BB4]/10">
              <h3 className="text-xs font-bold text-[#8A9BB4] uppercase tracking-widest mb-6">
                Follow the Journey
              </h3>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-[#0a0c10] border border-[#8A9BB4]/20 flex items-center justify-center transition-all duration-300 text-[#AFB7C7] hover:border-[#2C6EA1] hover:text-[#2C6EA1] hover:shadow-[0_0_20px_rgba(44,110,161,0.3)] hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map: Frozen View */}
            <div className="bg-[#16212e] rounded-3xl overflow-hidden border border-[#2C6EA1]/20 shadow-2xl relative h-[250px] group">
              <div className="absolute inset-0 bg-[#2C6EA1]/10 pointer-events-none z-10 opacity-50 mix-blend-overlay" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4420165518453!2d73.8656113751897!3d18.4614138826224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f91a69b%3A0x321b0654247385d7!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1711111111111"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                allowFullScreen
                loading="lazy"
                title="VIT Pune Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      </div>
  );
};

export default Contact;