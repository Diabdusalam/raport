import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGradesViewModel } from "../_grades-view-model";
export type TStudent = {
  id: string;
  studentId: string;
  name: string;
  Uts: number;
  Uas: number;
  UH: number;
};
export default function TableGrades({
  model,
}: {
  model: ReturnType<typeof useGradesViewModel>;
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
              <TableHead className="px-4 py-3 w-20">UTS</TableHead>
              <TableHead className="px-4 py-3 w-20">UAS</TableHead>
              <TableHead className="px-4 py-3 w-20">UH</TableHead>
              <TableHead className="px-4 py-3 whitespace-nowrap text-center ">
                Nilai Akhir
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {model.values.students.map((item: TStudent, index) => (
              <TableRow className="border-t border-gray-200" key={item.id}>
                <TableCell className="w-0 text-center border-r">
                  {index + 1}
                </TableCell>
                <TableCell>{item.studentId}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <input
                    type="number"
                    className="w-full"
                    placeholder="0"
                    max={100}
                    value={item.Uts}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      // if (isNaN(value)) {
                      //   value = 0;
                      // } else if (value > 100) {
                      //   value = 100; // batasi maksimal 100
                      // } else if (value < 0) {
                      //   value = 0; // bisa juga batasi minimal 0 misalnya
                      // }
                      model.setFieldValue(
                        `students[${index}].Uts`,
                        isNaN(value) ? 0 : value
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    className="w-full"
                    placeholder="0"
                    max={100}
                    value={item.Uas}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      model.setFieldValue(
                        `students[${index}].Uas`,
                        isNaN(value) ? 0 : value
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    className="w-full "
                    placeholder="0"
                    value={item.UH}
                    max={100}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      model.setFieldValue(
                        `students[${index}].UH`,
                        isNaN(value) ? 0 : value
                      );
                    }}
                  />
                </TableCell>
                <TableCell className="text-center">
                  {" "}
                  {((item.Uts + item.Uas + item.UH) / 3).toFixed(2)}
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
          Simpan
        </button>
      </div>{" "}
    </form>
  );
}
