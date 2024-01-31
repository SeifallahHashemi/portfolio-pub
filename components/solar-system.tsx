'use client';

import React from 'react';
import Image from "next/image";



import CSSLogo from "@/public/Logo/CSSS.png";
import TypescriptLogo from "@/public/Logo/Typescript.png";
import HTMLLogo from "@/public/Logo/htmll.png";
import JavascriptLogo from "@/public/Logo/jS.png";
import NextLogo from "@/public/Logo/NextJs.png";
import ReactLogo from "@/public/Logo/Reactt.png";
import TailwindLogo from "@/public/Logo/TailwindCss.png";
import BGI from "@/public/Logo/stars-bg.png";
import { motion } from 'framer-motion';



import classes from "./solar-system.module.scss";


const logos = [
    { src: ReactLogo, alt: "React", size: "850px", imgSize: 100, time: 5.5, animateInd: 5},
    { src: NextLogo, alt: "Next.js", size: "750px", imgSize: 75, time: 4, animateInd: 4.5},
    { src: JavascriptLogo, alt: "JavaScript", size: "680px", imgSize: 55, time: 3.7, animateInd: 4},
    { src: CSSLogo, alt: "CSS", size: "570px", imgSize: 65, time: 3.2, animateInd: 3.5},
    { src: HTMLLogo, alt: "HTML", size: "440px", imgSize: 75, time: 2.1, animateInd: 3},
    { src: TypescriptLogo, alt: "Framer", size: "320px", imgSize: 35, time: 1.6, animateInd: 2.5},
    { src: TailwindLogo, alt: "Redux", size: "190px", imgSize: 50, time: 1, animateInd: 2},
]
const variants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: (custom: number) => {
        return {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 50,
                mass: 1,
                delay: custom * 0.25,
            }
        }
    }
}
const SolarSystem = () => {
  return (
    <motion.div
      className={'w-screen h-[128vh] flex items-center justify-center relative isolate overflow-y-clip'}
      style={{
        backgroundImage: `url(${BGI.src})`,
      }}
    >
      {logos.map(({ src, alt, size, imgSize, time, animateInd }, ind) => (
        <motion.div
          key={alt + ind}
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          custom={animateInd}
          className={`absolute aspect-square rounded-full flex justify-center items-center border border-white/75 ${classes.wrapper}`}
          style={{
            height: size,
          }}
        >
          <motion.div
              initial={{
                  opacity: 0,
              }}
              animate={{
                  opacity: 1,
              }}
              transition={{
                  type: "spring",
                  delay: 2 + (animateInd * 0.25),
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
              }}
          >
              <Image
                  src={src}
                  alt={alt}
                  width={imgSize}
                  height={imgSize}
                  className={classes.image}
                  style={{
                      animationDelay: `-${(ind + 1) * 2.25}s`,
                      animationDuration: `${time * 7}s`,
                  }}
              />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SolarSystem;