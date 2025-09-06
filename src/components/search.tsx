import { SearchIcon } from "lucide-react";
import { forwardRef } from "react";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

const SearchComponent = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={` border rounded-lg items-center flex px-2 py-1 border-[#b8b7b7] bg-white  mx-auto max-w-[650px] ${className}`}
      >
        <SearchIcon className="w-5  text-[#4e526b]" />
        <input
          ref={ref}
          type="text"
          placeholder="Type here..."
          suppressHydrationWarning={true}
          className=" border-none  w-full outline-none focus:outline-none px-2 py-1 bg-transparent"
          {...props}
        />
      </div>
    );
  }
);

export default SearchComponent;
