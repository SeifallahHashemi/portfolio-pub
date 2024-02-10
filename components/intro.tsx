'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useInView as useInViewScroll } from'react-intersection-observer';
import {
  LuArrowRight,
  LuCodepen,
  LuCodesandbox,
  LuDownload,
  LuGithub,
  LuInstagram,
  LuLinkedin,
} from 'react-icons/lu';
import {useActiveSection} from "@/hooks/useActiveSection";

const Intro = () => {
  const {setActiveSection, setTimeOfLastClick} = useActiveSection();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'a',
        {
          opacity: [0, 1],
          y: [100, 0],
        },
        {
          type: 'spring',
          delay: stagger(0.2, { startDelay: 0.1 }),
          stiffness: 150,
          damping: 10,
          mass: 0.3,
        },
      );
    }
  }, [isInView]);
  return (
    <section
      className={'w-screen h-screen absolute top-0 left-0 font-iranSans'}
      id={"home"}
    >
      <div className={'w-full h-full flex justify-center items-center'}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'profile picture'}
            width={192}
            height={192}
            quality={95}
            priority={true}
            className={
              'h-28 w-28 rounded-full border-[0.35rem] border-slate-300 shadow-xl object-cover translate-y-[6.5rem] -translate-x-4'
            }
          />
        </motion.div>
      </div>
      <motion.div
        className={
          'w-screen h-[25vh] sm:h-[20vh] md:w-[80vw] lg:w-[60vw] xl:w-[40vw] md:h-[8rem] lg:h-[8rem] xl:h-[9rem] flex justify-center items-center -translate-y-[12rem] -translate-x-4 border border-white border-opacity-40 bg-white bg-opacity-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-md dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 dark:backdrop-blur-[0.5rem]'
        }
        style={{ marginInline: 'auto' }}
        initial={{ opacity: 0, y: 0, x: -15 }}
        animate={{ opacity: 1, y: -160, x: -15 }}
        transition={{
          delay: 2.1,
        }}
      >
        <motion.h1 className='px-8 text-2xl font-medium !leading-[1.5] sm:text-xl text-balance space-x-2 sm:text-justify md:text-balance'>
          <span className='font-bold'>سلام, من سپهر هستم.</span> من{' '}
          <span className='font-bold'>برنامه نویس و طراح سایت فرانت اند</span>{' '}
          با <span className='font-bold'>2 سال</span> تجربه در زمینه طراحی سایت
          هستم. من از ساخت و طراحی صفحات <span className='italic'>وب</span> لذت
          میبرم. تخصص من در <span className='underline'>React (Next.js)</span>
          میباشد.
        </motion.h1>
      </motion.div>
      <div
        className={
          'w-screen centered flex-col items-stretch sm:items-center sm:flex-row-reverse gap-4 md:pl-[7rem]'
        }
        ref={scope}
      >
        <div
          className={
            'w-auto h-auto hover:scale-105 sm:focus:scale-110 sm:hover:scale-110 hover:bg-gray-950 sm:active:scale-105 transition rounded-full'
          }
        >
          <Link
            href={'#contact'}
            className={
              'group bg-gray-900 text-white px-7 py-3 centered gap-2 rounded-full opacity-0 outline-none '
            }
            onClick={() => {
              setActiveSection('contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            <LuArrowRight className={'group-hover:translate-x-1 transition'} />
            ارتباط با من
          </Link>
        </div>
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.05,
          }}
          href={'/CV.pdf'}
          download
          className={
            'bg-gray-100 sm:bg-slate-50 px-7 py-3 centered gap-2 rounded-full opacity-0 border border-black/10 dark:bg-white/10'
          }
        >
          <LuDownload />
          دانلود رزومه
        </motion.a>
        <motion.div
          className={
            'centered flex-col items-stretch sm:items-center sm:flex-row-reverse gap-2'
          }
        >
          <a
            href={'#'}
            className={
              'bg-gray-100 sm:bg-slate-50 relative z-[11] text-gray-700 p-4 centered gap-2 rounded-full opacity-0  border border-black/10 dark:bg-gray-900 dark:text-white/60'
            }
          >
            <LuLinkedin />
          </a>
          <a
            href={'https://www.instagram.com/sepehr_next.js_developer/'}
            target={'_blank'}
            className={
              'bg-gray-100 sm:bg-slate-50 relative z-[9] text-gray-700 p-4 centered gap-2 rounded-full md:-left-[2rem] md:hover:ml-[20px] opacity-0 border border-black/10 dark:bg-gray-900 dark:text-white/60'
            }
            style={{ transition: 'margin 0.2s ease' }}
          >
            <LuInstagram />
          </a>
          <a
            href={'#'}
            className={
              'bg-gray-100 sm:bg-slate-50 relative z-[8] text-gray-700 p-4 centered gap-2 rounded-full md:-left-[4rem] md:hover:ml-[20px] opacity-0  border border-black/10 dark:bg-gray-900 dark:text-white/60'
            }
            style={{ transition: 'margin 0.2s ease' }}
          >
            <LuGithub />
          </a>
          <a
            href={'#'}
            className={
              'bg-gray-100 sm:bg-slate-50 relative z-[7] text-gray-700 p-4 centered gap-2 rounded-full md:-left-[6rem] md:hover:ml-[20px] opacity-0  border border-black/10 dark:bg-gray-900 dark:text-white/60'
            }
            style={{ transition: 'margin 0.2s ease' }}
          >
            <LuCodepen />
          </a>
          <a
            href={'#'}
            className={
              'bg-gray-100 sm:bg-slate-50 relative z-[6] text-gray-700 p-4 centered gap-2 rounded-full md:-left-[8rem] md:hover:ml-[20px] opacity-0  border border-black/10 dark:bg-gray-900 dark:text-white/60'
            }
            style={{ transition: 'margin 0.2s ease' }}
          >
            <LuCodesandbox />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
