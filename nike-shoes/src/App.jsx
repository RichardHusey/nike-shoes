import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";

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
        Hi
      </Sidebar>
    </div>
  );
}

export default App;
