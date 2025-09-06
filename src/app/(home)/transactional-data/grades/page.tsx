"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import SearchComponent from "@/components/search";
import dynamic from "next/dynamic";

// import Select from "react-select";
const Select = dynamic(() => import("react-select"), { ssr: false });
import TableGrades from "./_components/table-grades";
import { useGradesViewModel } from "./_grades-view-model";

const Grades = () => {
  const modelView = useGradesViewModel();
  return (
    <div>
      {" "}
      <section className="p-4 flex flex-col w-full gap-4 ">
        <Breadcrumbs
          data={[
            { name: "Transactional Data" },
            { name: "Grades", active: true },
          ]}
        />
        <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
          <div className="w-full justify-between flex items-center px-2">
            <div className="text-black text-2xl font-bold">Grades</div>
          </div>
          <div className="w-full bg-[#f3f4f6] rounded-lg p-4 flex h-full justify-between  ">
            <div>
              <SearchComponent />
            </div>
            <div className="flex items-center gap-4">
              <Select
                placeholder="Select Class"
                options={[
                  { value: "x1", label: "Class 1" },
                  { value: "x2", label: "Class 2" },
                  { value: "x3", label: "Class 3" },
                ]}
                // menuPortalTarget={document.body}
              />
              <Select
                placeholder="Select Subjects"
                options={[
                  { value: "Mtk", label: "Mtk" },
                  { value: "x2", label: "Class 2" },
                  { value: "x3", label: "Class 3" },
                ]}
                // menuPortalTarget={document.body}
              />
              <Select
                placeholder="Select Semester"
                options={[
                  { value: "x1", label: "Class 1" },
                  { value: "x2", label: "Class 2" },
                  { value: "x3", label: "Class 3" },
                ]}
                // menuPortalTarget={document.body}
              />
            </div>
          </div>

          <TableGrades model={modelView} />
          {/* <TableMainStudents model={model} /> */}

          {/* <Pagination data={model.response.pagination} /> */}
        </div>
      </section>
    </div>
  );
};
export default Grades;
