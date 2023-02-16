import { Link } from "react-router-dom";
import { useState } from "react";

 function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-300 p-2 flex items-center justify-between" >
   

  
                                  {/* flex-col */}
   <nav className="bg-gray-300 p-2 md:flex xl:flex items-center justify-between">
  

                             
        <div className="bg-gray-300 py-2 pl-0 px-3 md:flex  xl:flex  text-left items-center justify-between">

        {/* only show if logged in */}
            <Link to='/allTickets' className="block px-2 py-1 text-black hover:text-gray-400"  > Admin Login
            </Link>

            

            
  
        </div>
     
    </nav>

    <Link to="/issueTicket" className="text-black font-bold text-xl pr-20" >X Company Help Desk</Link>
    </div>
  )
}

export default Navbar;
