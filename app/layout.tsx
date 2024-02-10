import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

import AsContext from '@/context/as-context';
import ThemeContextProvider from '@/context/theme-context';
import Providers from '@/utils/providers';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/footer';
import Header from '@/components/Header/header';
import ThemeSwitcher from '@/components/theme-switcher';

const inter = Inter({ subsets: ['latin'] });
const perFont = localFont({
  src: [
    {
      path: './../public/Fonts/iransansdn.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../public/Fonts/iransansdnbold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-iranSansDn',
});
const dstFont = localFont({
  src: [
    {
      path: './../public/Fonts/Dastnevis-IRSANS.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-dastNevis',
});
const irsFont = localFont({
  src: [
    {
      path: './../public/Fonts/IRANSANSXFANUM-REGULAR.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../public/Fonts/IRANSANSXFANUM-MEDIUM.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../public/Fonts/IRANSANSXFANUM-BOLD.woff',
      weight: '400',
      style: '700',
    },
  ],
  display: 'swap',
  variable: '--font-iranSans',
});

export const metadata: Metadata = {
  title: 'Sepehr | Personal Portfolio',
  description:
    'Sepher is a front-end (NextJs) developer, who is passionate about building beautiful and functional websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={'!scroll-smooth'}>
      <body
        className={`${inter.className} ${perFont.variable} ${dstFont.variable} ${irsFont.variable} w-screen bg-gray-50 text-gray-950 after:absolute after:top-[-6rem] after:right-[-8rem] after:w-[31.25rem] after:aspect-square after:rounded-full after:blur-[10rem] sm:after:w-[68.75rem] after:bg-[#fbe2e3] before:absolute before:top-[-1rem] before:left-[-35rem] before:w-[50rem] before:h-[31.25rem] before:rounded-full before:blur-[10rem] sm:before:w-[68.75rem] before:bg-[#dbd7fb] md:before:left-[-33rem] lg:before:left-[-28rem] xl:before:left-[-15rem] 2xl:before:left-[-5rem] after:-z-10 before:-z-10 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark:after:bg-[#946263] dark:before:bg-[#676394]`}
        style={{
          maxWidth: '100vw',
          overflowX: 'clip',
        }}
      >
        <ThemeContextProvider>
          <AsContext>
            <Header />
            {children}
            <Toaster position={'top-right'} />
            <Footer />
          </AsContext>
          <ThemeSwitcher />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
