import React from 'react'
import { useGlobalContext } from '../../context/mainContext';
import TodoItem from '../TodoItem/TodoItem';

const TodoPage = () => {
    const { todoItems } = useGlobalContext();
    return (
        <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-6'>
                    {todoItems.map(item => (
                        <div className='row mt-2'>
                            <TodoItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoPage;
