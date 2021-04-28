import React, {useEffect, useState, useContext, useReducer, createContext} from 'react';
import reducer from './reducer'; // main reducer
import { menuItem } from './menuItem';

export const GlobalContext = createContext();

const initialState = {
    menu: menuItem,
    signState: false,
}

export const GlobalProvider = ({children}) =>{
    // reducer
    const[state, dispatch] = useReducer(reducer, initialState);

    // State Control Functions

    // show sign in form
    const showSign = ()=>{
        dispatch({type:'SHOW_SIGN'})
    }
    const closeSign = ()=>{
        dispatch({type:'CLOSE_SIGN'})
    }

    return(
        <GlobalContext.Provider value={{
            ...state,
            
            // show sign state
            showSign,
            closeSign
            


        }}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


