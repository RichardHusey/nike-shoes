import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { SIZES } from "../constants";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="p-5 hover:bg-[#DAFFA2] cursor-pointer bg-gray-100">
      <div className=" space-x-2 flex ">
        {/* image */}
        <img className="h-24" src={product.src} />
        {/* Desciption */}
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* price */}
        <div className="font-bold">{`${product.price}$`}</div>
      </div>
      <div className="flex justify-between pl-32 space-y-2">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select defaultValue={size} title="" options={SIZES} className={"w-16 p-1"} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select defaultValue={qty} title="" options={SIZES} className={"w-16 p-1"} />
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
