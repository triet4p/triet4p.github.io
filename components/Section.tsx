
import type { ReactNode } from 'react';
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">
        <span className="relative inline-block">
          {title}
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-cyan-400 rounded-full"></span>
        </span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
