import React, { createContext } from "react";
import data from "./alldata"

export const ContextProvider= createContext(null)

const Context=(props)=>{
    const contextValue={data};
    return(
        <ContextProvider.Provider value={contextValue} >
            {props.chlidren}
</ContextProvider.Provider>
    )
};
export default ContextProvider;