import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import AdminLogin from "./AdminLogin";

 function Navbar() {
  const {
  isLoggedIn,
  user,
  logOutUser
} = useContext(AuthContext)


    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center bg-gray-300 p-2 flex items-center justify-between" >
   

  
                                  {/* flex-col */}
   <nav className="bg-gray-300 p-2 md:flex xl:flex items-center justify-between">
  

                             
        <div className="  bg-gray-300 py-2 pl-0 px-3 md:flex  xl:flex  text-left items-center justify-between">

        {/* only show if logged in */}
        {isLoggedIn && 

        <div className="border border-black">
                    
            <Link to='/allTickets' className="bg-slate-200 border border-black background-red block px-2 py-1 text-black hover:text-gray-400"  > Ticket List
            </Link>
        
            <button className="button" onClick={logOutUser}>Logout</button>
         <span>CURRENT USER: {user && user.name}</span> 
           </div> 
          }

            {!isLoggedIn && 
            <div>
            <AdminLogin/>
            </div>
            
          }
            
  
        </div>
     
    </nav>



    <Link to="/issueTicket" className="text-black font-bold text-xl pr-20" >X Company Help Desk</Link>
    
    
    </div>
  )
}

export default Navbar;
