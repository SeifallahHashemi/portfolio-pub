'use client';

import React from 'react';

import { skillsData } from '@/libs/data';
import { motion } from 'framer-motion';

import useInview from '@/hooks/useInview';
import SectionHeader from '@/components/section-header';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    }
  }),
};
const Skills = () => {
  const { ref } = useInview('skills', 0.5);
  return (
    <section
      ref={ref}
      className={'mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'}
      id={'skills'}
    >
      <SectionHeader>مهارت ها</SectionHeader>
      <ul
        className={'flex flex-row-reverse flex-wrap justify-center gap-2 text-lg text-gray-800'}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className={
              'bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            }
            key={index}
            variants={fadeInAnimationVariants}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
