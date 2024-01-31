'use client';
import React, {useState} from 'react';
import {links} from "@/libs/data";

type ActiveSection = (typeof links)[number]['enName'];

type ActiveSectionContextType = {
    activeSection: ActiveSection;
    setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);
const AsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [activeSection, setActiveSection] = useState<ActiveSection>('home')

    return <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>{children}</ActiveSectionContext.Provider>;
};

export default AsContextProvider;