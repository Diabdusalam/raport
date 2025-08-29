import { cn } from "@/lib/utils";
import { ChevronRight, HomeIcon, Link } from "lucide-react";

type TBreadcrumbs = {
  name: string;
  link?: string;
  active?: boolean;
};

export default function Breadcrumbs({ data = [] }: { data: TBreadcrumbs[] }) {
  return (
    <div className="flex items-center gap-2">
      <HomeIcon strokeWidth={2} color="#B8B6B6" />
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight strokeWidth={2} color="#B8B6B6" />
          {item.link ? (
            <Link href={item.link} className="text-sm text-[#B8B6B6]">
              {item.name}
            </Link>
          ) : (
            <span
              className={cn(
                `text-sm text-[#B8B6B6] ${
                  item.active && "font-semibold text-black"
                }`
              )}
            >
              {item.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
