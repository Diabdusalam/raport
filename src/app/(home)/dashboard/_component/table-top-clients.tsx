import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardViewModel from "../_dashboard-view-model";

const TopClientsTable = ({
  model,
}: {
  model: ReturnType<typeof DashboardViewModel>;
}) => {
  return (
    <Table className=" rounded-md p-5 overflow-hidden">
      <TableHeader className="">
        <TableRow className="text-gray-400 border-b border-[#56577a] hover:bg-transparent">
          <TableHead className="">Client</TableHead>
          <TableHead className="text-center">Total Projects</TableHead>
          <TableHead className="text-center">Active</TableHead>
          <TableHead>Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {model.dataTopClients.map((item, i) => (
          <TableRow
            key={i}
            className="text-white border-b border-[#56577a] hover:bg-transparent"
          >
            <TableCell className=" flex items-center border-none">
              {item.name}
            </TableCell>
            <TableCell className="text-center">{item.total}</TableCell>
            <TableCell className="text-center">{item.active}</TableCell>{" "}
            <TableCell>
              {" "}
              <div className="w-full h-2 bg-[#2D2E5F] rounded-full overflow-hidden">
                <div
                  className={`h-full bg-blue-500 `}
                  style={{ width: `${item.completion}%` }}
                ></div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopClientsTable;
