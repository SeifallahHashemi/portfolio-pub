'use client';
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {links} from "@/libs/data";
import Link from "next/link";
import {cn} from "@/utils/tailwind-merger";
import {useActiveSection} from "@/hooks/useActiveSection";

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick} = useActiveSection()
    return (
        <header className={"z-[999] relative"}>
            <motion.div
                className={"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:w-[36rem] md:h-[3.25rem] md:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"}
                initial={{ opacity: 0, y: -100, x: "-50%"}}
                animate={{ opacity: 1, y: 0, x: "-50%"}}
            ></motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[0.5rem] md:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className={"flex w-[40rem] flex-wrap items-center justify-center gap-y-1 space-x-4 sm:space-x-0 text-[0.9rem] font-medium text-gray-500 sm:w-fit sm:flex-nowrap sm:gap-5"}>
                    {links.map((link) => (
                        <motion.li key={link.hash} className={"flex items-center justify-center h-full relative"}
                                   initial={{ opacity: 0, y: -100}}
                                   animate={{ opacity: 1, y: 0}}
                        >
                            <Link href={link.hash} onClick={() => {
                                setActiveSection(link.enName)
                                setTimeOfLastClick(Date.now())
                            }} className={cn("flex justify-center items-center p-4 text-nowrap md:px-3 md:py-3 hover:text-gray-950 transition font-iranSans dark:text-gray-500 dark:hover:text-gray-300", {"text-gray-950 dark:text-gray-200": activeSection === link.enName})}>
                                {link.name}
                                {link.enName === activeSection && (
                                    <motion.span
                                        className={"bg-gray-100 rounded-full absolute inset-0 -inset-x-[0.5rem] -z-10 dark:bg-gray-800"}
                                        layoutId={'activeSection'}
                                        transition={{
                                            type:'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    >
                                </motion.span>)}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;