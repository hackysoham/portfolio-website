import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
            text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15.5vw]"
        >
          Hi, i&apos;m soham
        </h1>
      </FadeIn>

      {/* Hero Portrait - Centered */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Soham Labhshetwar Portrait"
            className="w-full h-auto"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex-1" />
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ml developer driven by building intelligent and impactful solutions
          </p>
        </FadeIn>

        {/* Right contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
