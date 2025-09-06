import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, SquarePen, Trash } from "lucide-react";
import { useAcademicYearViewModel } from "../_class-view-model";
export type TAcademicYear = {
  id: string;
  academicYear: string;
  semester: number;
  status: string;
};
export default function TableAcademicYear({
  model,
}: {
  model: ReturnType<typeof useAcademicYearViewModel>;
}) {
  return (
    <form onSubmit={model.handleSubmit}>
      <div className="bg-white overflow-auto rounded-lg border border-gray-200">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="text-left text-base  text-[#667085] capitalize">
              <TableHead className="px-4 py-3 font-semibold  ">No</TableHead>
              <TableHead className="px-4 py-3  font-semibold">
                Academic Year
              </TableHead>{" "}
              <TableHead className="px-4 py-3  font-semibold">
                Semester
              </TableHead>
              <TableHead className="px-4 py-3  font-semibold">Status</TableHead>
              <TableHead className="px-4 py-3 w-0 text-center font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {model.values.academicYears.data.map((item, index) => (
              <TableRow className="border-t border-gray-200" key={item.id}>
                <TableCell className="px-4 py-3 ">{index + 1}</TableCell>
                <TableCell>{item.academicYears}</TableCell>{" "}
                <TableCell>{item.semester}</TableCell>{" "}
                <TableCell>{item.status}</TableCell>{" "}
                <TableCell className="px-4 py-3 w-0 items-center justify-center">
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                      // onClick={() => model.setSelectedId(item.id)}
                    >
                      <SquarePen className="w-5 h-5" />
                    </button>
                    <button
                      className={`p-2 rounded-lg bg-red-500 text-white`}
                      //    ${
                      //   model.selectedId === item.id &&
                      //   "bg-slate-500 cursor-not-allowed"
                      // }

                      // `}
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-end">
        {/* <button
          type="submit"
          className="btn btn-primary  bg-blue-400 text-white mt-2 py-2 px-4 rounded-lg "
        >
          Simpan
        </button> */}
      </div>{" "}
    </form>
  );
}
