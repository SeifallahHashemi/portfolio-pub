'use client';

import {useInView} from "react-intersection-observer";
import {useActiveSection} from "@/hooks/useActiveSection";
import {useEffect} from "react";
import type {ActiveSection} from "@/libs/types";

const useInview = (sectionName: ActiveSection, threshold = 0.5) => {
    const {ref, inView} = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
        inView,
    }
};

export default useInview;