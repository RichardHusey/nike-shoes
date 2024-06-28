import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe)=>{
  return {
    product: shoe,
    qty: 1,
    size: 44
  }
})
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="p-10 xl:p-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <Cart cartitems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

export default App;
