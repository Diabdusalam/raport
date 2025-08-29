"use client";

import CardActiveUser from "@/components/custom/card-active-user";
import CardCustom from "@/components/custom/card-custom";
import { IoIosRocket } from "react-icons/io";
import { IoDocumentText, IoWallet } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import ProjectListTable from "./_component/table-project-list";
import TopClientsTable from "./_component/table-top-clients";
import DashboardViewModel from "./_dashboard-view-model";

const Home = () => {
  const model = DashboardViewModel();
  return (
    <section className="p-4  w-full space-y-6">
      <div className="grid lg:grid-cols-4  gap-6  w-ful">
        <CardCustom title="Total Projects" count="51" icon={IoDocumentText} />{" "}
        <CardCustom title="Ended Projects" count="11" icon={IoDocumentText} />{" "}
        <CardCustom
          title="On Going Projects"
          count="12"
          icon={IoDocumentText}
        />{" "}
        <CardCustom title="Pending Projects" count="28" icon={IoDocumentText} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[60%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6">
          <h2 className="text-white text-xl font-bold mb-2">
            Project Progress
          </h2>
          <div className="flex items-center text-sm text-green-500 font-semibold ">
            {/* +5% more{" "} */}
            <span className=" text-gray-400 font-normal">
              Monthly Project Completion Trend
            </span>
          </div>
          <div className="h-[310px]">
            {/* <LineChart
              lineChartData={model.lineChartDataDashboard}
              lineChartOptions={model.monthChartOptions}
            /> */}
          </div>
        </div>

        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 space-y-5">
          <div
            className="h-[220px] rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(310deg, #1a73e8, #66bb6a)" }}
          >
            {/* <BarChart
              barChartData={model.barChartDataDashboard}
              barChartOptions={model.monthChartOptions}
            /> */}
          </div>
          <h2 className="text-white text-xl font-bold ">Team Workload</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardActiveUser icon={IoWallet} title="Total" count="12" />
            <CardActiveUser icon={IoIosRocket} title="Over" count="3" />
            <CardActiveUser icon={IoIosRocket} title="Idle" count="2" />
            <CardActiveUser icon={IoIosRocket} title="Avg Task " count="254" />
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col lg:flex-row  w-full">
        <div className="w-full bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 h-full gap-6 ">
          <h2 className="text-white text-xl font-bold mb-2">Project List</h2>
          <ProjectListTable model={model} />
        </div>
      </div>{" "}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[70%] bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 backdrop-blur-md rounded-2xl p-6 gap-6 h-full">
          <h2 className="text-white text-xl font-bold mb-2">Top Clients</h2>
          <TopClientsTable model={model} />
        </div>
        <div className="w-full lg:w-[30%] bg-gradient-to-br from-[#060B26] to-[#1A1F37]/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-4">
            <LuNotebookPen className="text-blue-400 text-xl" />
            <h2 className="text-white text-lg font-semibold">Notes</h2>
          </div>
          <span className="block w-full h-[1px] bg-white/20 mb-4"></span>
          <h2 className="text-white text-2xl font-bold leading-tight ml-1">
            Don't Forget To Do
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
