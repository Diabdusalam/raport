import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAttendanceViewModel } from "../_attendance-view-model";

export type TAttendance = {
  id: string;
  studentId: string;
  name: string;
  status: string;
  notes: string;
};
export default function TableAttendance({
  model,
}: {
  model: ReturnType<typeof useAttendanceViewModel>;
}) {
  return (
    <form onSubmit={model.handleSubmit}>
      <div className="bg-white overflow-auto rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="text-left text-base font-semibold text-[#667085] w-full bg-gray-50 hover-none">
              <TableHead className="w-0 border-r">No</TableHead>
              <TableHead className="px-4 py-3 ">Student ID</TableHead>
              <TableHead className="px-4 py-3 ">Student Name</TableHead>
              <TableHead className="px-4 py-3 text-center">Status</TableHead>
              <TableHead className="px-4 py-3 text-center">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {model.values.attendance.map((item: TAttendance, index) => (
              <TableRow className="border-t border-gray-200" key={item.id}>
                <TableCell className="w-0 text-center border-r">
                  {index + 1}
                </TableCell>
                <TableCell>{item.studentId}</TableCell>
                <TableCell>{item.name}</TableCell>{" "}
                <TableCell className="px-4 py-3 text-center align-middle">
                  <div className="flex justify-center items-center gap-4">
                    {["Hadir", "Izin", "Sakit"].map((status) => (
                      <label key={status} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={`status-${item.id}`}
                          value={status}
                          checked={
                            model.values.attendance.find(
                              (x) => x.id === item.id
                            )?.status === status
                          }
                          onChange={() =>
                            model.setFieldValue(
                              "attendance",
                              model.values.attendance.map((x) =>
                                x.id === item.id ? { ...x, status } : x
                              )
                            )
                          }
                        ></input>{" "}
                        {status}
                      </label>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <textarea
                    className="w-full text-center"
                    value={item.notes}
                    onChange={(e) => {
                      model.setFieldValue(
                        "attendance",
                        model.values.attendance.map((x) =>
                          x.id === item.id ? { ...x, notes: e.target.value } : x
                        )
                      );
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="btn btn-primary  bg-blue-400 text-white mt-2 py-2 px-4 rounded-lg "
        >
          Save
        </button>
      </div>
    </form>
  );
}
