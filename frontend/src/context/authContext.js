import { createContext,useEffect,useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

        const login = () => {
            //TO DO 
            setCurrentUser({
                id:1, 
                name:"John Doe", 
                profilepic:
                  "https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg"
            });
        };
            
        useEffect(()=>{
            localStorage.setItem("user",JSON.stringify(currentUser));
        },[currentUser]);
            
        return(
            <AuthContext.Provider value={{currentUser,  login}}>
                {children}
            </AuthContext.Provider>         
        ); 
    
    };
