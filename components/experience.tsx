'use client';

import React, { Fragment } from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import useInview from '@/hooks/useInview';
import SectionHeader from '@/components/section-header';

import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/libs/data';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInview('experience', 0.5);
  return (
    <section
      id={'experience'}
      ref={ref}
      style={{
        direction: 'ltr',
      }}
      className={'scroll-mt-28 mb-28 sm:mb-40'}
    >
      <SectionHeader>تجربه ها</SectionHeader>
      <VerticalTimeline layout={'2-columns'} lineColor={''}>
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

function TimelineElement({ item }: any) {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight:
            theme === 'light' ?
              '0.4rem solid #9ca3af'
            : '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        date={item.date}
        dateClassName={'space'}
        icon={item.icon}
        iconStyle={{
          background: item.color,
          fontSize: '1.5rem',
            color: theme === 'light' ? '#fff' : '#111827',
        }}
      >
        <h3 className={'font-semibold capitalize'}>{item.title}</h3>
        <h4 className={'font-normal !mt-0'}>{item.location}</h4>
        <p className={'!mt-1 !font-normal text-gray-700 dark:text-white/75'}>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
