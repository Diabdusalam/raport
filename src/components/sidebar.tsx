"use client";

import {
  ChartNoAxesColumn,
  ChartPie,
  LogOut,
  LucideIcon,
  SquareCheckBig,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ButtonSidebar from "./ui/button/button-sidebar";
import ButtonSidebarChildren from "./ui/button/button-sidebar-children";

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
      name: "Raport",
      icon: ChartNoAxesColumn,
      link: "",
      children: [
        {
          id: "1",
          name: "Raport Student",
          icon: SquareCheckBig,
          link: "/raport-student",
        },
        {
          id: "2",
          name: "Raport Teacher",
          icon: SquareCheckBig,
          link: "/raport-teacher",
        },
      ],
    },
    {
      id: "4",
      name: "Master Data",
      icon: ChartPie,
      link: "",
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
          link: "/master-data/students",
        },
        {
          id: "3",
          name: "Class",
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
        {
          id: "6",
          name: "Majore",
          icon: SquareCheckBig,
          link: "/majore",
        },
      ],
    },
  ];

  return (
    <aside
      className={` top-0 ${
        onSideBar ? "w-[300px]" : "w-[72px]"
      } h-screen py-7 p-2 space-y-6 transition-[width] duration-300  text-white z-50 bg-[#F0F7FD]`}
    >
      <div className="text-lg font-bold mb-4 text-center text-[#05004E] ">
        MENU
      </div>
      <div>
        {mainLinks.map((item) => (
          <div key={item.id} className="relative">
            <div onClick={() => item.children && handleToggleChildren(item.id)}>
              <ButtonSidebar
                key={item.id}
                data={item}
                isActive={openMenuId === item.id}
                showName={onSideBar}
                openMenuId={openMenuId}
              />
            </div>

            {openMenuId === item.id &&
              item.children &&
              item.children.length > 0 && (
                <div
                  className={` transition-all border-teal-50 ${
                    onSideBar
                      ? "mt-2 ml-8 "
                      : "mt-1 absolute top-0 bg-[#e6fcff] left-[74px] px-2 py-2 rounded-lg  "
                  }`}
                >
                  {item.children.map((child) => (
                    <ButtonSidebarChildren
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
      <div className="absolute bottom-2">
        <ButtonSidebar
          data={{
            id: "5",
            name: "Logout",
            icon: LogOut,
            link: "/",
          }}
          iconColor="text-red-500"
          isActive={false}
          showName={onSideBar}
          openMenuId={openMenuId}
        />
      </div>
    </aside>
  );
}
