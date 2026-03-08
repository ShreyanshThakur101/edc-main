import React, { useState } from 'react';
import img2 from '@/assets/2.png';
import mag5 from '@/assets/mag_5.jpeg';
import mag6 from '@/assets/mag_6.jpg';
import mag7 from '@/assets/esummit.png'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ================= MAG DATA ================= */

const magazineImages = [img2, mag5, mag6];

const magazines = [
  {
    id: 1,
    title: 'Issue 01',
    subtitle: 'Innovation Spotlight',
    img: magazineImages[0],
    link: 'https://drive.google.com/file/d/1yNVwiubUTZ-aHLIbdD0UkG9v2OgL2K-Y/view'
  },
  {
    id: 2,
    title: 'Issue 02',
    subtitle: 'Startup Stories',
    img: magazineImages[1],
    link: 'https://drive.google.com/file/d/1CyzsE2mVmo6M2TeQO1yveJwANZB5DJzA/view'
  },
  {
    id: 3,
    title: 'Issue 03',
    subtitle: 'E-Summit Special',
    img: magazineImages[2],
    link: 'https://drive.google.com/file/d/157503QKOWNEFZdArKei4CqqFhWvqf-kD/view'
  },
  {
    id: 4,
    title: 'Issue 04',
    subtitle: 'E-Summit 24 Edition',
    img: mag7,
    link: 'https://drive.google.com/file/d/1m3vhyr2mQuwJE4LCS2_hekUFDqcvicfS/view?usp=sharing'
  }
];

/* ================= COMPONENT ================= */

const MagazineBookSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < magazines.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => p + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => p - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section id="vedc-magazines" className="py-20 relative z-10">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#D6D6DB]">
            V-EDC Magazines
          </h2>
          <p className="mt-4 text-[#AFB7C7]">
            Explore curated insights from campus innovators.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {magazines.map((mag) => (
                <div key={mag.id} className="w-full flex-shrink-0 px-4">
                  <div className="rounded-3xl border border-[#2C6EA1]/30 bg-gradient-to-br from-[#16212e] to-[#0a0c10] p-6 shadow-[0_20px_50px_rgba(44,110,161,0.3)]">
                    <div className="relative aspect-[3/4] mb-4 rounded-xl overflow-hidden border border-[#8A9BB4]/20">
                      <img src={mag.img} alt={mag.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16212e] to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white">{mag.title}</h3>
                        <p className="text-[#AFB7C7]">{mag.subtitle}</p>
                      </div>
                    </div>

                    <a
                      href={mag.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2C6EA1] hover:bg-[#D6D6DB] hover:text-[#0a0c10] text-white font-semibold transition-all"
                    >
                      Read Magazine
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {magazines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPage ? 'bg-[#2C6EA1] w-8' : 'bg-[#8A9BB4]/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto perspective-[2000px]">
            <div className="relative h-[700px] flex items-center justify-center">

              {/* LEFT PAGE */}
              <div className="absolute left-0 w-1/2 h-[600px] bg-gradient-to-br from-[#16212e] to-[#0a0c10] rounded-l-3xl border border-[#2C6EA1]/30 p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-4">
                    Curated insights from campus innovators
                  </h3>
                  <p className="text-[#AFB7C7] mb-6">
                    Stay inspired with V-EDC publications.
                  </p>
                  <ul className="space-y-3">
                    {['Actionable articles', 'Startup interviews', 'Downloadable PDFs'].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#AFB7C7]">
                        <ArrowRight className="text-[#2C6EA1]" size={16} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[#8A9BB4] text-sm">
                  Page {currentPage + 1} of {magazines.length}
                </div>
              </div>

              {/* RIGHT PAGE */}
              <div className="absolute right-0 w-1/2 h-[600px]">
                <div className="w-full h-full bg-[#16212e] rounded-r-3xl border border-[#2C6EA1]/30 p-8">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#2C6EA1]/20">
                    <img
                      src={magazines[currentPage].img}
                      alt={magazines[currentPage].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C6EA1]/80 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-bold text-white">
                        {magazines[currentPage].title}
                      </h3>
                      <p className="text-[#AFB7C7] text-lg">
                        {magazines[currentPage].subtitle}
                      </p>

                      <a
                        href={magazines[currentPage].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2C6EA1] hover:bg-white hover:text-[#0a0c10] text-white font-semibold transition-all"
                      >
                        Read Now
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARROWS */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#16212e]/80 border border-[#2C6EA1]/30 flex items-center justify-center disabled:opacity-20"
              >
                <ChevronLeft className="text-white" size={28} />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === magazines.length - 1}
                className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#16212e]/80 border border-[#2C6EA1]/30 flex items-center justify-center disabled:opacity-20"
              >
                <ChevronRight className="text-white" size={28} />
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MagazineBookSection;
