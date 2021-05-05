import React, {useEffect, useState, useContext, useReducer, createContext} from 'react';
import reducer from './reducer'; // main reducer
import { menuItem } from './menuItem';
import { todoItems } from './todoItems';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{

 // retrieving local storage items: status unused
const getTodo = ()=>{
    const todo = localStorage.getItem('TodoItem');
    if(todo){
        return JSON.parse(localStorage.getItem(todo))
    }else{
        return [];
    }
}

    // states
    const initialState = {
        menu: menuItem,
        signState: false,
        todoDisplay: false,

        // will contain all the todoItems 
        todoItem: [],

        //alert
        displayAlert: false,
    }

    // reducer
    const[state, dispatch] = useReducer(reducer, initialState);

    // storing in local storage
    useEffect(()=>{
        window.localStorage.setItem('TodoItem', JSON.stringify(state.todoItem))
    },[state.todoItem])

    // State Control Functions

    // show sign in form
    const showSign = ()=>{
        dispatch({type:'SHOW_SIGN'})
    }
    const closeSign = ()=>{
        dispatch({type:'CLOSE_SIGN'})
    }

    // alert state 
    const showAlert = ()=>{
        dispatch({type:'SHOW_ALERT'})
    }
    const closeAlert = ()=>{
        dispatch({type: 'CLOSE_ALERT'});
    }

    // add todo state
    const showTodoBox = ()=>{
        dispatch({type: 'SHOW_TODO'})
    }
    const closeTodoBox = ()=>{
        dispatch({type: 'CLOSE_TODO'})
    }

    // new todo
    const newTodoItem = (todoObject)=>{
        dispatch({type: 'ADD_TODO', payload:todoObject})
    }

    // removing a single item
    const deleteItem = (id) =>{
        dispatch({type:'DELETE_ITEM', payload:id})
    }

    return(
        <GlobalContext.Provider value={{
            ...state,
            
            // show sign state
            showSign,
            closeSign,

            // show todobox
            showTodoBox,
            closeTodoBox,

            // add new item
            newTodoItem,
            
            // delete an item
            deleteItem,

            //alert
            showAlert,
            closeAlert,

        }}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


