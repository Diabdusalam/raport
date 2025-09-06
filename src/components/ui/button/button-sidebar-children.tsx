import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type TLinks = {
  id: string;
  name: string;
  icon?: LucideIcon;
  link: string;
  children?: TLinks[];
  showName?: boolean;
};

export default function ButtonSidebarChildren({
  data,
  isActive,
  showName = true,
}: {
  data: TLinks;
  isActive: boolean;
  showName?: boolean;
}) {
  return (
    <Link href={data.link}>
      <div className={`relative  ${showName ? "pl-2 " : ""} `}>
        {showName ? (
          <div>
            <span className="absolute top-0 left-0 h-full w-[2px] bg-gray-300" />
            <span className="absolute top-1/2 left-0 w-4 h-[2px] bg-gray-300 transform -translate-y-1/2" />
          </div>
        ) : null}

        <div
          className={cn(
            "flex items-center gap-3 py-2 rounded-lg text-gray-400 w-full",
            showName ? "px-4" : "pr-4 pl-3 hover:bg-blue-400 hover:text-white",
            isActive && "bg-blue-100 text-blue-600 font-semibold"
          )}
        >
          {/* hover:bg-blue-400 hover:text-white */}
          <span className="text-sm whitespace-nowrap">{data.name}</span>
        </div>
      </div>
    </Link>
  );
}
