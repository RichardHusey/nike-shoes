const CartItem = ({ item }) => {
  return (
    <div className="p-5 space-x-2 flex hover:bg-[#DAFFA2] cursor-pointer bg-gray-100">
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">{`${item.price}$`}</div>
    </div>
  );
};

export default CartItem;
