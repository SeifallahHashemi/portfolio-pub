'use client';

import React, {useRef} from 'react';

import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

export default function SectionDivider() {
    const container = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const range = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const pathLength = useSpring(range, {
        duration: 1,
    })
    return (
        <div
            ref={container}
            className={"w-screen h-[15vh] flex items-center justify-center"}
        >
            <motion.div
                className="bg-gray-300 h-20 w-[4px] rounded-full hidden sm:block dark:bg-opacity-20"
                initial={{opacity: 0, y: 100}}
                // animate={{opacity: 1, y: 0}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{
                    once: true,
                }}
                transition={{delay: 0.125, type: "spring", stiffness: 100, damping: 20}}
            ></motion.div>
            {/*<svg width="8" height="108" viewBox="0 0 8 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M3.5 4L3.5 104" stroke="#e5e7eb" strokeWidth="7" strokeLinecap="round"
                             style={{
                                 pathLength,
                             }}
                             whileInView={{
                                 pathLength: range.get()
                             }}
                />
            </svg>*/}
        </div>
    );
}
