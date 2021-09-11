import { createContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState( null /* {
        id:1,
        username: "ugurcan",
        bio: "lorem ipsum dolar"
    } */)
    
    const values = {user, setUser}

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export default UserContext