import {useContext} from "react";
import {ActiveSectionContext} from "@/context/as-context";

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context;
}