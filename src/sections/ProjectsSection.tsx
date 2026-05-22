import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    category: 'Full-Stack AI',
    name: 'Interview-Buddy AI',
    description: 'React · FastAPI · PostgreSQL · Groq API · Redis',
    col1Image1: '/project_interview_ai.png',
    col1Image2: '/project_interview_ai.png',
    col2Image: '/project_interview_ai.png',
    link: 'https://github.com/hackysoham',
  },
  {
    number: '02',
    category: 'Reinforcement Learning',
    name: 'Snake Game RL Agent',
    description: 'Python · PyTorch · Deep Q-Network',
    col1Image1: '/project_snake_rl.png',
    col1Image2: '/project_snake_rl.png',
    col2Image: '/project_snake_rl.png',
    link: 'https://github.com/hackysoham',
  },
  {
    number: '03',
    category: 'Machine Learning',
    name: 'Veritas: Insurance Prediction',
    description: 'Python · LightGBM · XGBoost · SHAP · UMAP',
    col1Image1: '/project_veritas.png',
    col1Image2: '/project_veritas.png',
    col2Image: '/project_veritas.png',
    link: 'https://github.com/hackysoham',
  },
];

const totalCards = projects.length;

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8 h-full flex flex-col"
        style={{ scale }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-10 flex-wrap">
            {/* Number */}
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col justify-center gap-1 pt-2 sm:pt-4">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
              <span
                className="text-[#D7E2EA]/60 font-light"
                style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)' }}
              >
                {project.description}
              </span>
            </div>
          </div>

          {/* Live Project Button */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 self-center">
            <LiveProjectButton />
          </a>
        </div>

        {/* Bottom row - Image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          {/* Left column - 40% width, 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-bottom"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>

          {/* Right column - 60% width, 1 tall image */}
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-center"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
