
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, useNavigate } from "react-router-dom"



function IsPrivate({ children }) {
    
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    //if authetnication is still loading
    if (isLoading) return <p>Loading　・　・　・</p>

    if(!isLoggedIn) {

        return <Navigate to="/issueTicket" />;

    } else {

        return children;
    }

}


export default  IsPrivate;








// /issueTicket