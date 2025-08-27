import { ChevronDownIcon, ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";

type TLinks = {
  id: string;
  name: string;
  icon?: LucideIcon;
  link: string;
  children?: TLinks[];
  showName?: boolean;
};

export default function ButtonSidebar({
  data,
  isActive,
  showName = true,
  openMenuId,
}: {
  data: TLinks;
  isActive: boolean;
  showName?: boolean;
  openMenuId?: string | null;
}) {
  return (
    <Link href={data.link}>
      <div
        className={`flex items-center gap-3 px-4 py-2  rounded-lg transition-colors  my-2
        ${isActive ? "bg-[#0075FF] text-white " : "text-gray-400  "}
          ${showName ? "gap-3 justify-start" : "justify-center"}`}
      >
        {data.icon && (
          <div
            className={`p-2 rounded-xl transition-colors 
            ${isActive ? " " : " group-hover:bg-[#0075FF] "}`}
          >
            <data.icon className="w-5 h-5" />
          </div>
        )}
        {showName && <span className="text-sm font-medium ">{data.name}</span>}
        {showName &&
          data.children &&
          data.children.length > 0 &&
          (openMenuId === data.id ? (
            <ChevronDownIcon className={`w-5 h-5 transition-transform `} />
          ) : (
            <ChevronRight className={`w-5 h-5 transition-transform `} />
          ))}
      </div>
    </Link>
  );
}
