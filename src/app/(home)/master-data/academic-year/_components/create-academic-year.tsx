interface CreateAcademicYearsProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateAcademicYears({
  onClose,
}: CreateAcademicYearsProps) {
  return (
    <div className="h-full shadow-md transition-all duration-200 bg-white rounded-lg p-4 gap-4 flex flex-col w-[1030px]">
      <div className="text-2xl font-semibold text-black ">
        {" "}
        Create Academic Yearss
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label> Academic Year</label>
          <input
            type="text"
            placeholder="Input Academic Year"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Semester</label>
          <input
            type="text"
            placeholder="Input Semester"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4 mt-4">
        <button
          className="text-center items-center flex-1 p-2 border border-red-500 rounded-lg text-red-500"
          onClick={() => {
            onClose(false);
          }}
        >
          {" "}
          Cancel
        </button>
        <button className="text-center items-center flex-1 p-2 border border-blue-500 rounded-lg bg-blue-600 text-white">
          Save
        </button>
      </div>
    </div>
  );
}
