import { CheckCheck, SquarePen, Trash } from "lucide-react";
import { StudentsViewModel } from "../_students-view-model";

export default function TableMainStudents({
  model,
}: {
  model: ReturnType<typeof StudentsViewModel>;
}) {
  return (
    <table className="w-full table-auto">
      <thead className="bg-gray-50">
        <tr className="text-left text-base font-semibold text-[#667085]">
          <th className="px-4 py-3">No</th>
          {Object.keys(model.response.data[0]).map((key) =>
            key !== "id" ? (
              <th key={key} className="px-4 py-3 capitalize">
                {key}
              </th>
            ) : null
          )}
          <th className="px-4 py-3 w-0 items-center text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {model.response.data.map((item, index) => (
          <tr
            key={item.id}
            className="hover:bg-gray-50 border-t border-gray-200"
          >
            <td className="px-4 py-3">{index + 1}</td>
            {Object.entries(item).map(([key, value]) =>
              key !== "id" ? (
                <td key={key} className="px-4 py-3">
                  {model.selectedId === item.id ? (
                    <input
                      type="text"
                      className="p-2 border border-gray-300 w-full rounded"
                      value={value as string}
                      onChange={(e) => {
                        model.setValues((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }));
                      }}
                    />
                  ) : (
                    value
                  )}
                </td>
              ) : null
            )}
            <td className="px-4 py-3 w-0 items-center justify-center">
              <div className="flex items-center gap-2">
                {model.selectedId === item.id ? (
                  <button
                    className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                    // onClick={() => model.setSelectedId(null)}
                  >
                    <CheckCheck className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                    onClick={() => model.setSelectedId(item.id)}
                  >
                    <SquarePen className="w-5 h-5" />
                  </button>
                )}

                <button
                  className={`p-2 rounded-lg bg-red-500 text-white ${
                    model.selectedId === item.id &&
                    "bg-slate-500 cursor-not-allowed"
                  }`}
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
