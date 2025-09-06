import DashboardViewModel from "../_dashboard-view-model";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const ProjectListTable = ({
  model,
}: {
  model: ReturnType<typeof DashboardViewModel>;
}) => {
  return (
    <Table className=" rounded-md p-5 overflow-hidden">
      <TableHeader className="">
        <TableRow className=" text-gray-400 border-b border-[#56577a] hover:bg-transparent ">
          <TableHead className=" ">Project Name</TableHead>{" "}
          <TableHead>Client</TableHead>
          <TableHead>PM</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {model.dataTableProjects.map((item, i) => (
          <TableRow
            key={i}
            className="text-white border-b border-[#56577a] hover:bg-transparent"
          >
            <TableCell className=" flex items-center border-none">
              {item.projectsName}
            </TableCell>
            <TableCell>{item.client}</TableCell>
            <TableCell>{item.pm}</TableCell>{" "}
            <TableCell>{item.deadline}</TableCell>
            <TableCell>
              {" "}
              <div className="w-full h-2 bg-[#2D2E5F] rounded-full overflow-hidden">
                <div
                  className={`h-full bg-blue-500 `}
                  style={{ width: `${item.completion}%` }}
                ></div>
              </div>
            </TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ProjectListTable;
