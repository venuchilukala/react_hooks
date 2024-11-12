import { createContext } from "react";

export const AppContext = createContext(); 

const ContextProvider = (props) =>{

    const userInfo ={
        name : 'Venu chilukala',
        phone : 56897552,
        email : 'venu@gmail.com'
    } 
    return(
        <AppContext.Provider value={userInfo}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;