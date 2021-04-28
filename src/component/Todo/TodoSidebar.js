import React from 'react'
import style from './style.css';
import { useGlobalContext } from '../../context/mainContext';

const TodoSidebar = () => {
    const {} = useGlobalContext();
    return (
        <section className='todo-sidebar'>

        </section>
    )
}

export default TodoSidebar;
