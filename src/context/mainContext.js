import React, {useEffect, useState, useContext, useReducer, createContext} from 'react';
import reducer from './reducer'; // main reducer
export const GlobalContext = createContext();
import { menuItem } from './menuItem';

const initialState = {
    menu: menuItem,
    signState: false,
}

export const GlobalProvider = ({children}) =>{
    // reducer
    const[state, dispatch] = useReducer(reducer, initialState);

    // functions

    // show sign in form
    const showSign = ()=>{
        dispatch({type:'SHOW_SIGN'})
    }

    return(
        <GlobalContext.Provider value={{
            ...state,
            
            // show sign state
            showSign,
            


        }}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


