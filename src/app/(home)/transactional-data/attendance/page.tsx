"use client";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import SearchComponent from "@/components/search";
import dynamic from "next/dynamic";
import { useAttendanceViewModel } from "./_attendance-view-model";
import TableAttendance from "./_components/table-attendance";
import { Scan } from "lucide-react";

// import Select from "react-select";
const Select = dynamic(() => import("react-select"), { ssr: false });

const Attendance = () => {
  const modelView = useAttendanceViewModel();
  return (
    <div>
      {" "}
      <section className="p-4 flex flex-col w-full gap-4 ">
        <Breadcrumbs
          data={[
            { name: "Transactional Data" },
            { name: "Attendance", active: true },
          ]}
        />
        <div className="w-full border border-[#f3f3f6]  rounded-lg p-6 gap-6 h-full space-y-4 shadow">
          <div className="w-full justify-between flex items-center px-2">
            <div className="text-black text-2xl font-bold">Attendance </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="btn btn-primary  bg-green-100 text-green-400 font-semibold mt-2 py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <Scan /> Scan
              </button>
            </div>{" "}
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
              <input
                type="date"
                className="rounded-md px-4 py-1 border border-[#b8b7b7]"
              />
            </div>
          </div>

          <TableAttendance model={modelView} />
          {/* <TableMainStudents model={model} /> */}

          {/* <Pagination data={model.response.pagination} /> */}
        </div>
      </section>
    </div>
  );
};
export default Attendance;
