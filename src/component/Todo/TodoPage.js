import React from 'react'
import { useGlobalContext } from '../../context/mainContext';
import TodoItem from '../TodoItem/TodoItem';
import style from './style.css';

const TodoPage = () => {
    const {  todoItem } = useGlobalContext();

    return (
        <section className='todo-container'>
            <div className='row justify-content-center '>
                <div className='col-6'>
                    {todoItem.map((item, index)=>{
                        return(
                            <div className='row mt-2' key={index}>
                                <TodoItem {...item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default TodoPage;
