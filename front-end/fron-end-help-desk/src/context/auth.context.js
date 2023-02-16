import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL="http://localhost:5005";

const AuthContext = React.createContext()

function AuthPRoviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);


  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */

    const storeToken = (token) => {
        localStorage.setItem(`authToken`, token)
    }

    const authenticateUser = () => {
        //get the stored token from the LocalStorage
        const storedToken = localStorage.getItem(`authToken`)

        // If the token exists in the LocalStorage
        if(storeToken) {
        //Send the JWT in the request's "authorization" Headers
        axios
            .get(
            `${API_URL}/auth/verify`,
            {headers: {Authorization: `Bearer ${storedToken}`}})
            .then((response) => {
                //if server verifies that JWT is valid
                const user = {...response.data};
                //Update state variables
            
               console.log("HEADERS?",response)
               console.log("STORED TOKEN", storedToken);
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(user);

               
            })
            .catch((error) => {
                //in the case of invalid token/password hashs don't match
                setIsLoggedIn(false);
                setIsLoading(false);
                setUser(null);
            });

        } else {
            //If the token is not avaiable (or is removed)
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);

        }

    }
    console.log("Checking Log in status",isLoggedIn)
    const removeToken = () => {

        localStorage.removeItem("authToken");

    }
    
    console.log("Checking Log in status",isLoggedIn)


    const logOutUser = () => {

        removeToken();
        authenticateUser();
    }

// doing this bit below allows us to check everytinme the page is opened
//whether or not the person is logged in
// the token will persist regardless but if we don't do this and 
    useEffect(() => {
        authenticateUser();
       
    }, [])




    return (
        <AuthContext.Provider 
        value={{
             isLoggedIn, 
             isLoading,
             user,
             storeToken,
             authenticateUser,
             logOutUser
              }}>
            {props.children}
        </AuthContext.Provider>

    )

}

export { AuthPRoviderWrapper, AuthContext};