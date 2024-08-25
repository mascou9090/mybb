import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Main } from "next/document";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Meu bb",
  description: "Marcondes FR DEV",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <header className="flex m-20 pb-12 border-b-2">
          <div className="w-full flex justify-between mx-40">
            <h1 className="ml-12 text-3xl text-red-600 cursor-pointer font-bold hover:text-sky-500 duration-300">Meu bb</h1>
            <nav className="font-bold text-red-600 space-x-24 list-none flex mr-40">
              <Link href="/eyes">
                <li className="m-auto hover:text-sky-500 cursor-pointer duration-300">Tua boca</li>
              </Link>
              <Link href="">
                <li className="m-auto hover:text-sky-500 cursor-pointer duration-300">Teus olhos</li>
              </Link>
              <Link href="">
                <li className="m-auto hover:text-sky-500 cursor-pointer duration-300">Teu sorriso</li>
              </Link>
              <Link href="">
                <li className="m-auto hover:text-sky-500 cursor-pointer duration-300">Tua raba</li>
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
