'use client';
import React, {useEffect} from 'react';
import SectionHeader from "@/components/section-header";
import {projectsData} from "@/libs/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useActiveSection} from "@/hooks/useActiveSection";

const Projects = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
    });
    const { setActiveSection } = useActiveSection();
    useEffect(() => {
        if (inView) {
            setActiveSection('projects')
        }
    }, [inView, setActiveSection]);
    return (
        <section ref={ref} id={"projects"} className={"scroll-mt-24"}>
            <SectionHeader>پروژه ها</SectionHeader>
            <div>
                {
                    projectsData.map((project) => (
                        <React.Fragment key={crypto.randomUUID()}><Project {...project}/></React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;