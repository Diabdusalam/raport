"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [onSideBar, setOnSideBar] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex">
          {/* Sidebar */}
          <Sidebar onSideBar={onSideBar} />

          <section className="flex flex-col w-full">
            <Navbar setOnSideBar={setOnSideBar} onSideBar={onSideBar} />
            {/* <section className="flex-grow p-5 mt-5 h-[87vh] overflow-auto">
              {children}
            </section> */}
          </section>
        </section>
      </body>
    </html>
  );
}
