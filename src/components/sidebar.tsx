"use client";

import {
  BookImage,
  ChartNoAxesColumn,
  ChartPie,
  ChevronDownIcon,
  LucideIcon,
  Plane,
  SquareCheckBig,
} from "lucide-react";
import { usePathname } from "next/navigation";
import ButtonSidebar from "./ui/button-sidebar";
import { useState } from "react";

interface type {
  onSideBar: boolean;
}

export default function Sidebar({ onSideBar }: type) {
  type TLinks = {
    id: string;
    name: string;
    icon?: LucideIcon;
    link: string;
    children?: TLinks[];
  };

  const pathname = usePathname();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggleChildren = (id: string) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const mainLinks: TLinks[] = [
    {
      id: "1",
      name: "Dashboard",
      icon: ChartPie,
      link: "/dashboard",
      children: [],
    },
    {
      id: "2",
      name: "Task Management",
      icon: SquareCheckBig,
      link: "/task-management",
      children: [],
    },
    {
      id: "3",
      name: "Table",
      icon: ChartNoAxesColumn,
      link: "/table",
      children: [],
    },
    {
      id: "4",
      name: "Master Data",
      icon: ChartPie,
      link: "/dashboard",
      children: [
        {
          id: "1",
          name: "Teacher",
          icon: SquareCheckBig,
          link: "/teacher",
        },
        {
          id: "2",
          name: "Student",
          icon: SquareCheckBig,
          link: "/student",
        },
        {
          id: "3",
          name: "Classroom",
          icon: SquareCheckBig,
          link: "/class",
        },
        {
          id: "4",
          name: "Subject",
          icon: SquareCheckBig,
          link: "/subject",
        },
        {
          id: "5",
          name: "Schedule",
          icon: SquareCheckBig,
          link: "/schedule",
        },
      ],
    },
  ];

  return (
    <aside
      className={` top-0 ${
        onSideBar ? "w-[250px]" : "w-[72px]"
      } h-screen py-7 p-2 space-y-6 transition-all  text-white z-50 bg-[#F0F7FD]`}
    >
      <div className="text-lg font-bold mb-4 text-center text-[#05004E] ">
        MENU
      </div>
      <div className="">
        {mainLinks.map((item) => (
          <div key={item.id}>
            <div
              // className="flex items-center justify-between"
              onClick={() => item.children && handleToggleChildren(item.id)}
            >
              <ButtonSidebar
                key={item.id}
                data={item}
                isActive={pathname === item.link}
                showName={onSideBar}
                openMenuId={openMenuId}
              />
            </div>

            {openMenuId === item.id &&
              item.children &&
              item.children.length > 0 && (
                <div className="ml-6 ">
                  {item.children.map((child) => (
                    <ButtonSidebar
                      key={child.id}
                      data={child}
                      isActive={pathname === child.link}
                      showName={onSideBar}
                    />
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
      {/* <div className="space-y-4">
        {mainLinks.map((item) => (
          <div key={item.id}>
            {" "}
            <ButtonSidebar
              key={item.id}
              data={item}
              isActive={pathname === item.link}
              showName={onSideBar}
            />
            {item.children && item.children.length > 0 && (
              <div className="ml-6 space-y-2">
                {item.children.map((child) => (
                  <ButtonSidebar
                    key={child.id}
                    data={child}
                    isActive={pathname === child.link}
                    showName={onSideBar}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </aside>
  );
}
{
  /* <div className="mt-6">
        <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
          Account Pages
        </p>
        <div className="space-y-4">
          {accountLinks.map((item) => (
            <ButtonSidebar
              key={item.id}
              data={item}
              isActive={pathname === item.link}
            />
          ))}
        </div>
      </div> */
}
