"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import { useState } from "react";
import "../../app/globals.css";
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
            <section className="overflow-auto p-4">{children}</section>
          </section>
        </section>
      </body>
    </html>
  );
}
