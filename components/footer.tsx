'use client';
import React from 'react';

const Footer = () => {
    return (
        <footer className={"mb-10 px-4 text-center text-gray-500"} style={{
            direction: 'ltr',
        }}>
            <small className={"mb-2 block text-xs"}>
                &copy; 2024 Sepehr. All rights reserved.
            </small>
            <p className={"text-xs"}>
                <span className={"font-semibold"}>About this website: </span>built with React & Next.js (App Router & Server Action),TypeScript,Tailwind CSS,Framer Motion,React-Email,resend, Vercel Hosting, and more.
            </p>
        </footer>
    );
};

export default Footer;