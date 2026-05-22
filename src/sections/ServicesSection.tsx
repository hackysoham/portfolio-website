import React from 'react';
import FadeIn from '../components/FadeIn';

const skills = [
  {
    number: '01',
    name: 'Machine Learning',
    description:
      'Building end-to-end ML pipelines with ensemble models, hyperparameter optimization via Optuna, and interpretability techniques like SHAP and UMAP for real-world prediction tasks.',
  },
  {
    number: '02',
    name: 'Full-Stack Development',
    description:
      'Creating production-grade web applications using React, FastAPI, PostgreSQL, and Redis — from adaptive AI platforms to interactive dashboards with real-time capabilities.',
  },
  {
    number: '03',
    name: 'Competitive Programming',
    description:
      'Codeforces Specialist (max rating 1433) with strong foundations in algorithms, data structures, and problem solving. Global Rank 2334 in Codeforces Round 1062.',
  },
  {
    number: '04',
    name: 'Deep Learning & RL',
    description:
      'Implementing reinforcement learning agents with PyTorch, designing neural network architectures, and building training pipelines with deterministic evaluation and safe interruption handling.',
  },
  {
    number: '05',
    name: 'Data Science',
    description:
      'Performing extensive exploratory data analysis, feature engineering, dimensionality reduction with PCA and UMAP, and building optimized gradient boosting ensembles for predictive modeling.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C]
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Skill Items */}
      <div className="max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12
                py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col justify-center gap-2 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
