"use client";
import { ChevronLeft, ChevronsLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  limit: number;
  offset: number;
  totalRows: number;
  currentRows?: number;
  totalPages: number;
  prevPage: number | null;
  nextPage: number | null;
}
//
export default function Pagination({ data }: { data: PaginationProps }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  return (
    <div className="w-full flex items-center justify-between font font-semibold">
      <span className="text-sm "></span>
      <div className="flex items-center gap-8">
        <select
          onChange={(e) =>
            router.push(
              `?page=${searchParams.get("page") || 1}&limit=${
                e.target.value || 10
              }`
            )
          }
          value={searchParams.get("limit") || "10"}
          className="border bg-white  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-1"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <div className="flex items-center gap-2">
          <span className="text-sm">Page</span>
          <span className="text-sm font-bold">
            {searchParams.get("page") || 1}
          </span>
          <span className="text-sm">of</span>
          <span className="text-sm font-bold">
            {searchParams.get("totalPages") || 1}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={!!!data.prevPage}
            className={`w-8 h-8 flex items-center justify-center  ${
              !data.prevPage && "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) =>
              router.push(`?page=${1}&limit=${searchParams.get("limit")}`)
            }
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center ${
              !data.prevPage && "opacity-50 cursor-not-allowed"
            }`}
            disabled={!!!data.prevPage}
            onClick={() =>
              router.push(
                `?page=${data.prevPage}&limit=${searchParams.get("limit")}`
              )
            }
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center ${
              !data.nextPage && "opacity-50 cursor-not-allowed"
            }`}
            disabled={!!!data.nextPage}
            onClick={() =>
              router.push(
                `?page=${data.nextPage}&limit=${searchParams.get("limit")}`
              )
            }
          >
            <ChevronLeft className="w-4 h-4 rotate-180" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center ${
              !data.nextPage && "opacity-50 cursor-not-allowed"
            }`}
            disabled={!!!data.nextPage}
            onClick={(e) =>
              router.push(
                `?page=${data.totalPages}&limit=${searchParams.get("limit")}`
              )
            }
          >
            <ChevronsLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
