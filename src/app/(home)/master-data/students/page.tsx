"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Modal from "@/components/modal";
import Pagination from "@/components/pagination/pagination";
import { Plus } from "lucide-react";
import CreateStudent from "./_components/create-student";
import TableMainStudents from "./_components/table-students";
import { StudentsViewModel } from "./_students-view-model";
import { Suspense } from "react";

const students = () => {
  const model = StudentsViewModel();
  return (
    <>
      <section className="p-4 flex flex-col w-full gap-4 ">
        <Breadcrumbs
          data={[{ name: "Master Data" }, { name: "Students", active: true }]}
        />
        <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
          <div className="w-full justify-between flex items-center px-2">
            <div className="text-black text-2xl font-bold">
              Students
              {/* : <span className="text-gray-400">List of Students</span> */}
            </div>
            <button
              className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
              onClick={() => model.setIsModalOpen(true)}
            >
              <Plus /> Add Student
            </button>
          </div>
          {/* <div className="w-full bg-white rounded-lg p-4 gap-4 h-full"></div> */}
          <div className="bg-white overflow-auto rounded-lg border border-gray-200">
            <TableMainStudents model={model} />
          </div>
          <Suspense fallback={<div>Loading pagination...</div>}>
            <Pagination data={model.response.pagination} />
          </Suspense>
        </div>
      </section>
      <Modal isOpen={model.isModalOpen}>
        <CreateStudent onClose={model.setIsModalOpen} />
      </Modal>
    </>
  );
};

export default students;
