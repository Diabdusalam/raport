interface CreateStudentProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateStudent({ onClose }: CreateStudentProps) {
  return (
    <div className="h-full shadow-md transition-all duration-200 bg-white rounded-lg p-4 gap-4 flex flex-col w-[1030px]">
      <div className="text-2xl font-semibold text-black "> Create Students</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            placeholder="Input Name"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Nis</label>
          <input
            type="text"
            placeholder="Input Nis"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4">
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
