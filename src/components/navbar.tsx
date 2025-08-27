"use client";
import { FaBell, FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import SearchComponent from "./custom/Seacrh";
import { AlignJustify } from "lucide-react";
interface types {
  setOnSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  onSideBar: boolean;
}
export default function Navbar({ setOnSideBar, onSideBar }: types) {
  return (
    <nav className="w-full z-50 top-0 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 h-16 md:h-20 max-w-full transition-all">
        <div className="flex items-center gap-10">
          {" "}
          <AlignJustify
            onClick={() => setOnSideBar(!onSideBar)}
            className="cursor-pointer"
          />
          <Link href="/" className="font-bold text-2xl text-[#05004E]">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:block w-64">
            <SearchComponent />
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            <Link
              href="/signin"
              className="flex items-center gap-2 text-gray-600 hover:text-[#05004E] transition"
            >
              <FaUser className="w-4 h-4" />
              <span className="text-sm">Sign in</span>
            </Link>

            <IoMdSettings className="w-5 h-5 cursor-pointer hover:text-[#05004E]" />
            <FaBell className="w-5 h-5 cursor-pointer hover:text-[#05004E]" />
          </div>
        </div>
      </div>
    </nav>
  );
}
