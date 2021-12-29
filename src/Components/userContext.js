import { createContext,useContext,useState } from "react";


const UserContext=createContext();

export function AppWrapper({children}){

      const initialVal=localStorage.getItem("userObj")?JSON.parse(localStorage.getItem("userObj")) :null;

      const [user, setUser] = useState(initialVal)
      
      return (
            <UserContext.Provider value={{user:user,setUser:setUser}}>
                  {children}
            </UserContext.Provider>
      )
}

export function useUserContext() {
      return useContext(UserContext);
}