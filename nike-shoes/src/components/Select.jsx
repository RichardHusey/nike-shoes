import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative">
      <select defaultValue={defaultValue || ""} className={twMerge(`w-24 bg-white appearance-none border border-gray-300 p-4 ${className}`)}>
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none flex-center absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown/>
      </div>
    </div>
  );
};

export default Select;
