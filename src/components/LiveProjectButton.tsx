import React from 'react';

const LiveProjectButton: React.FC = () => {
  return (
    <span
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        cursor-pointer transition-colors duration-200
        hover:bg-[#D7E2EA]/10 inline-block"
      style={{ background: 'transparent' }}
    >
      View Project
    </span>
  );
};

export default LiveProjectButton;
