import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import corpcommentImg from "@/public/Images/corpcomment.png";
import rmtdevImg from "@/public/Images/rmtdev.png";
import wordanalyticsImg from "@/public/Images/wordanalytics.png";

export const links = [
    {
        name: "خانه",
        hash: "#home",
        enName: "home",
    },
    {
        name: "درباره من",
        hash: "#about",
        enName: "about",
    },
    {
        name: "پروژه ها",
        hash: "#projects",
        enName: "projects",
    },
    {
        name: "مهارت ها",
        hash: "#skills",
        enName: "skills",
    },
    {
        name: "تجارب",
        hash: "#experience",
        enName: "experience",
    },
    {
        name: "ارتباط با من",
        hash: "#contact",
        enName: "contact",
    },
] as const;

export const experiencesData = [
    {
        title: "شرکت در دوره آموزشی 7learn",
        location: "7learn",
        link: "https://7learn.com/",
        description:
            "یک دوره آموزشی 50 ساعته، برای یادگیری جاوااسکریپت، اچ تی ام ال و سی اس اس",
        icon: React.createElement(RiJavascriptFill),
        date: "2016",
        color: "#f1bf80"
    },
    {
        title: "شرکت در دوره آموزشی Udemy",
        location: "Udemy",
        link: "https://www.udemy.com/",
        description:
            "شرکت در دوره React ، استاد Maximilian Schwarzmüller : آموزش react, redux, framer-motion, tanstack-query,...",
        icon: React.createElement(FaReact),
        date: "2020 - 2021",
        color: "#8cf07f"
    },
    {
        title: "شرکت در دوره آموزشی Udemy",
        location: "Udemy",
        link: "https://www.udemy.com/",
        description:
            "شرکت در دوره Next.js ، استاد Maximilian Schwarzmüller : آموزش SSR, ISR, CustomComponents, Fonts,...",
        icon: React.createElement(TbBrandNextjs),
        date: "2021 - 2022",
        color: "#ffde12"
    },
] as const;

export const projectsData = [
    {
        title: "وبلاگ شخصی",
        description:
            "این پروژه، یک پروژه شخصی است.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "سایت فروشگاهی",
        description:
            "این پروژه، یک پروژه شخصی است.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "سایت خبری",
        description:
            "این پروژه، یک پروژه شخصی است.",
        tags: ["React", "Next.js", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GSAP",
    "Framer Motion",
] as const;
