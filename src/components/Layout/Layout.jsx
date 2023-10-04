import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <div className=" flex flex-col font-semibold min-h-[100vh] ">
      <div className="fixed top-0">
        <Header />
      </div>
      <div className=" mt-16 grow w-[90%] mx-auto  min-h-[100vh]  border-2 p-6 bg-yellow-200 text-black  shadow-lg shadow-black">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
