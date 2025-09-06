"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import dynamic from "next/dynamic";
import { useClassViewModel } from "./_class-view-model";
import TableClass from "./_components/table-class";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import Pagination from "@/components/pagination/pagination";

const Class = () => {
  const modelView = useClassViewModel();
  return (
    <div>
      {" "}
      <section className="p-4 flex flex-col w-full gap-4 ">
        <Breadcrumbs
          data={[{ name: "Master Data" }, { name: "Class", active: true }]}
        />
        <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
          <div className="w-full justify-between flex items-center px-2">
            <div className="text-black text-2xl font-bold">Class</div>
            <button
              className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
              onClick={() => modelView.setIsModalOpen(true)}
            >
              <Plus /> Add Class
            </button>
          </div>

          <TableClass model={modelView} />
          <Suspense fallback={<div>Loading pagination...</div>}>
            <Pagination data={modelView.dataClasses.pagination} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};
export default Class;
