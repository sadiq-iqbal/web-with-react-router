import { NavLink } from "react-router-dom";
function About() {
  return (
    <div className="  ">
      <div className=" bg-yellow-300 rounded-lg shadow-md shadow-black w-[30vw] a min-h-[50vh] ">
        <ul className="flex  flex-col">
          <NavLink
            className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-2 m-3 mt-4 rounded-md"
            to="/about/profile "
          >
            {" "}
            Propfile{" "}
          </NavLink>
          <li></li>

          
         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/dashboard'> Dashboard </NavLink>

         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/info'  >Dummy button </NavLink>
         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/info'  >Dummy button </NavLink>
         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/info'  >Dummy button </NavLink>
         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/info'  >Dummy button </NavLink>
         <NavLink className="p-4 h-11 flex justify-center items-center shadow-sm shadow-zinc-700 hover:scale-[1.05]  bg-yellow-200 my-1 m-3 mt-1 rounded-md font-mono" to='/about/info'  >Dummy button </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default About;
