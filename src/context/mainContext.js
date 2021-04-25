import React, {useEffect, useState, useContext, useReducer, createContext} from 'react';
import reducer from './reducer'; // main reducer
export const GlobalContext = createContext();

const initialState = {
    loading: true,
}

export const GlobalProvider = ({children}) =>{
    // reducer
    const[state, dispatch] = useReducer(reducer, initialState);

    // functions


    return(
        <GlobalContext.Provider value={{
            ...state,

            


        }}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


