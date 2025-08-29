import { ChevronDownIcon, ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";

type TLinks = {
  id: string;
  name: string;
  icon?: LucideIcon;
  link: string;
  children?: TLinks[];
  showName?: boolean;
  iconColor?: string;
};

export default function ButtonSidebar({
  data,
  isActive,
  showName = true,
  openMenuId,
  ...props
}: {
  data: TLinks;
  isActive: boolean;
  showName?: boolean;
  openMenuId?: string | null;
  iconColor?: string;
}) {
  return (
    <Link href={data.link}>
      <div
        className={`flex items-center  gap-3 px-4 py-2  rounded-lg my-2
        ${isActive ? "bg-[#0075FF] text-white " : "text-gray-400  "}
          ${showName ? "gap-3 justify-between" : "justify-center "}`}
      >
        <div className="flex items-center justify-start">
          {" "}
          {data.icon && (
            <div
              className={`p-2 rounded-xl transition-colors 
            ${isActive ? " " : " group-hover:bg-[#0075FF] "}`}
            >
              <data.icon className={`w-5 h-5 ${props.iconColor}`} />
            </div>
          )}
          {/* {showName && ( */}
          <span
            className={`text-sm font-medium  transition-all ${
              showName ? "flex" : "hidden"
            }  duration-300 ease-in-out opacity-100 scale-100`}
          >
            {data.name}
          </span>
          {/* )} */}
        </div>

        {showName && data.children && data.children.length > 0 && (
          <div className="transition-transform duration-300">
            {openMenuId === data.id ? (
              <ChevronDownIcon className="w-5 h-5 transform rotate-180 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
