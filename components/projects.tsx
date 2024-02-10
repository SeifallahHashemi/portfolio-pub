'use client';
import React, {useEffect} from 'react';
import SectionHeader from "@/components/section-header";
import {projectsData} from "@/libs/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useActiveSection} from "@/hooks/useActiveSection";
import useInview from "@/hooks/useInview";

const Projects = () => {
    const { ref } = useInview("projects", 0.5);
    /*const {ref, inView} = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('projects')
        }
    }, [inView, setActiveSection, timeOfLastClick]);*/
    return (
        <section ref={ref} id={"projects"} className={"scroll-mt-24 mb-28"}>
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