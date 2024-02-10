'use client'
import React, {useEffect, useState} from 'react';

import {BsMoon, BsSun} from 'react-icons/bs';
import {useTheme} from "@/context/theme-context";

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <button
      className={
        'fixed bottom-5 right-5 w-[3rem] aspect-square bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900'
      }
      onClick={toggleTheme}
    >
        { theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitcher;