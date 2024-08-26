import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Main } from "next/document";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Meu bb",
  description: "Marcondes FP DEV",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <header className="flex">
          <div className="w-screen">
            <Link href="/">
              <h1 className="flex justify-center text-3xl text-red-600 cursor-pointer font-bold hover:text-sky-500 duration-300">Meu bb</h1>
            </Link>
            <nav className="justify-center font-bold text-red-600 space-x-4 w-full list-none flex">
              <Link href="/components/mouth">
                <li className="m-auto after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-600 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full hover:text-sky-500 cursor-pointer duration-500">Tua boca</li>
              </Link>
              <Link href="/components/eyes">
                <li className="m-auto after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-600 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full hover:text-sky-500 cursor-pointer duration-300">Teus olhos</li>
              </Link>
              <Link href="/components/smile">
                <li className="m-auto after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-600 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full hover:text-sky-500 cursor-pointer duration-300">Teu sorriso</li>
              </Link>
              <Link href="/components/ass">
                <li className="m-auto after:content-[''] after:duration-500 after:w-[0px] after:h-0.5 after:ease-out after:block after:to-sky-600 after:bg-gradient-to-r after:from-gray-800 hover:after:w-full hover:text-sky-500 cursor-pointer duration-300">Tua raba</li>
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="flex justify-center">
          <h2 className="text-3xl m-4 text-gray-600 hover:text-4xl cursor-pointer hover:text-white duration-500">Vitor Machado</h2>
        </footer>
      </body>
    </html>
  );
}
