import React from 'react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Vertical line */}
      <div className={`flex flex-col sm:flex-row items-center before:absolute before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-slate-700 ${isLast ? '' : 'sm:before:translate-x-[5.5rem]'}`}>
        {/* Dot on the line */}
        <div className="absolute left-2 sm:left-0 sm:translate-x-[5.5rem] z-10 w-4 h-4 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors duration-300"></div>
        {/* Year */}
        <time className="sm:absolute left-0 sm:translate-x-[-1rem] text-lg font-semibold text-cyan-400 w-20 text-left sm:text-right">
          {event.year}
        </time>
        {/* Content */}
        <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-bold text-slate-100">{event.title}</h3>
            <p className="mt-2 text-slate-400">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
