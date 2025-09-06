"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Modal from "@/components/modal";
import Pagination from "@/components/pagination/pagination";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { useAcademicYearViewModel } from "./_class-view-model";
import CreateTeacher from "./_components/create-academic-year";
import TableAcademicYear from "./_components/table-academic-year";
import CreateAcademicYears from "./_components/create-academic-year";

const AcademicYear = () => {
  const modelView = useAcademicYearViewModel();
  return (
    <>
      <div>
        {" "}
        <section className="p-4 flex flex-col w-full gap-4 ">
          <Breadcrumbs
            data={[
              { name: "Master Data" },
              { name: "Academic Year & Semester", active: true },
            ]}
          />
          <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
            <div className="w-full justify-between flex items-center px-2">
              <div className="text-black text-2xl font-bold">
                Academic Year & Semester
              </div>
              <button
                className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
                onClick={() => modelView.setIsModalOpen(true)}
              >
                <Plus /> Add Academic Year
              </button>
            </div>

            <TableAcademicYear model={modelView} />
            <Suspense fallback={<div>Loading pagination...</div>}>
              {" "}
              <Pagination data={modelView.dataAcademicYear.pagination} />
            </Suspense>
          </div>
        </section>
      </div>
      <Modal isOpen={modelView.isModalOpen}>
        <CreateAcademicYears onClose={modelView.setIsModalOpen} />
      </Modal>
    </>
  );
};
export default AcademicYear;
