'use client';
import React, {useState} from 'react';
import type {ActiveSection} from "@/libs/types";

type ActiveSectionContextType = {
    activeSection: ActiveSection;
    setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);
const AsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [activeSection, setActiveSection] = useState<ActiveSection>('home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>;
};

export default AsContextProvider;