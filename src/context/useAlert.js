import React from 'react';
import styled, {css} from 'styled-components';
const {useState, useEffect} = React;
import {useGlobalContext} from '../context/mainContext';
import './alert.css';

    // styled components
    const AlertTitle = styled.h1 `
        color: green;
        font-size: 20px;
    `;

    const AlertWrapper = styled.div `
        width: 100%;
        background: white;
        padding: 10px;
        box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
        -8px -8px 18px 0 rgba(120, 120, 120, 0.55);
        max-width: 1170px;
        border-bottom-right-radius: 30px ;
        border-bottom-left-radius: 30px;
        width: 300px;
        height: 100px;
        border-radius: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    const AlertAdd = styled.button `
        font-size: 1rem;
        border-radius: 10px;
        background: green;
    `;

    const AlertButtons = styled.div `
        display:flex;
        justify-content: center;
        align-items: center;
    `
    const AlertCancel = styled.button `
        font-size: 1rem;
        border-radius: 10px;
        background: red;
        margin-right:10px;
    `


// custom alert component to render it across whenever its needed
const Alert = ({todoValue, emptyInputs}) =>{

    const {closeTodoBox, closeAlert, displayAlert, newTodoItem} = useGlobalContext()

    const addAlert = ()=>{
       closeTodoBox();
       closeAlert();
       newTodoItem(todoValue);
       emptyInputs();
    }

    return(
        <section className={`${displayAlert ? 'alert-container show': 'alert-container'}`}>
            <AlertWrapper>
                <AlertTitle>Confirm Item</AlertTitle>
                <AlertButtons>
                    <AlertCancel onClick={closeAlert}>Cancel</AlertCancel>
                    <AlertAdd onClick={addAlert}>AddTodo</AlertAdd>
                </AlertButtons>     
            </AlertWrapper>
        </section>
    )
}

export default Alert;
