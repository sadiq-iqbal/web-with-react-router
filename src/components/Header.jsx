import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="fixed w-full p-4 flex justify-between items-center bg-yellow-300 text-black font-serif shadow-sm shadow-black ">
        <div className=" text-blue-800">
          Your <span className="text-3xl text-red-700  ">Logo </span>
        </div>
        <ul className="flex justify-between items-center">
          <li className="hover:text-lg hover:text-white ">
            <NavLink className="mx-6" to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-lg hover:text-white ">
            <NavLink className="mx-6" to="/contact">
              Contact us
            </NavLink>
          </li>
          <li className="hover:text-lg hover:text-white ">
            <NavLink className="mx-6" to="/about">
              About
            </NavLink>
          </li>
        </ul> 
        <div>
          <button className="mx-4  bg-gray-500 py-1 px-5 rounded-sm  shadow-sm shadow-[black] text-white text-sm font-mono ">hello </button>
          <button className="mx-4 bg-yellow-800  py-1 px-5 rounded-sm shadow-sm shadow-[black] text-white text-sm font-mono " >login</button>
        </div>
      </header>
    </>
  );
}

export default Header;
