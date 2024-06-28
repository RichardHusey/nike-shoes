import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { SIZES } from "../constants";

// import { twMerge } from "tw-merge";
const CartItem = ({ item }) => {
  return (
    <div className="p-5 hover:bg-[#DAFFA2] cursor-pointer bg-gray-100">
      <div className=" space-x-2 flex ">
        {/* image */}
        <img className="h-24" src={item.src} />
        {/* Desciption */}
        <div className="space-y-2">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* price */}
        <div className="font-bold">{`${item.price}$`}</div>
      </div>
      <div className="flex justify-between pl-32 space-y-2">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="SIZES" options={SIZES} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="QTY" options={SIZES} />
          </div>
        </div>

        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
