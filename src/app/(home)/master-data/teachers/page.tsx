"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { Plus } from "lucide-react";
import { useTeachersViewModel } from "./_class-view-model";
import TableTeachers from "./_components/table-class";
import CreateTeacher from "./_components/create-teachers";
import Modal from "@/components/modal";
import { Suspense } from "react";
import Pagination from "@/components/pagination/pagination";

const Teachers = () => {
  const modelView = useTeachersViewModel();
  return (
    <>
      <div>
        {" "}
        <section className="p-4 flex flex-col w-full gap-4 ">
          <Breadcrumbs
            data={[{ name: "Master Data" }, { name: "Teachers", active: true }]}
          />
          <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
            <div className="w-full justify-between flex items-center px-2">
              <div className="text-black text-2xl font-bold">Teachers</div>
              <button
                className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
                onClick={() => modelView.setIsModalOpen(true)}
              >
                <Plus /> Add Teachers
              </button>
            </div>

            <TableTeachers model={modelView} />
            <Suspense fallback={<div>Loading pagination...</div>}>
              {" "}
              <Pagination data={modelView.dataTeachers.pagination} />
            </Suspense>
          </div>
        </section>
      </div>
      <Modal isOpen={modelView.isModalOpen}>
        <CreateTeacher onClose={modelView.setIsModalOpen} />
      </Modal>
    </>
  );
};
export default Teachers;
