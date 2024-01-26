import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
  title: "Sepehr | Personal Portfolio",
  description: "Sepher is a front-end (NextJs) developer, who is passionate about building beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${perFont.variable} ${dstFont.variable} ${irsFont.variable}`}>{children}</body>
    </html>
  );
}
