'use client';
import React from 'react';

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className={"text-3xl font-medium font-iranSans mb-8 text-center"}>
            {children}
        </h2>
    );
};

export default SectionHeader;