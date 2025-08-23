"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, CircleUser, Search } from "lucide-react";
import { FaBell, FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchComponent from "./custom/Seacrh";
export default function Navbar() {
  const [navBackground, setnavBackground] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setnavBackground(true);
    } else {
      setnavBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });
  return (
    <>
      {/* <nav className="fixed   "> */}
      <div
        className={`sticky top-0 left-0 z-50 w-full flex items-center justify-between rounded-2xl px-6 py-4 font-semibold text-white transition-all duration-300 
    ${
      navBackground
        ? "rounded-2xl border border-white shadow-md backdrop-blur-lg"
        : " "
    }
  `}
      >
        <Link href={"/"} className="font-semibold text-lg">
          Dashboard
        </Link>

        <div className="hidden md:flex gap-3 text-sm felx items-center">
          <div className="">
            {" "}
            <SearchComponent />
          </div>

          <Link href="/signin" className="flex gap-1 items-center">
            <FaUser />
            Sign in
          </Link>
          {/* <Link href="/services "> */}
          <IoMdSettings className="w-5 h-5" />
          {/* </Link> */}
          <FaBell className="w-5 h-5" />
          {/* <Link href="/team">Teams</Link> */}
        </div>
      </div>
      {/* </nav> */}
    </>
  );
}
