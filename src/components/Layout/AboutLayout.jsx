import About from "../About"
import { Outlet } from "react-router-dom"
function AboutLayout() {
  return (
    <div className="flex justify-between font-semibold items-stretch">
        
        <About/>
        <div className="w-[50vw] border-2 border-red-900 p-2">
            <Outlet/>
        </div>
    </div>
  )
}

export default AboutLayout
