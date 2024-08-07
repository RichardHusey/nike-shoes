import CartItem from "./CartItem";

const Cart = ({ cartitems }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartitems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
