import React, {useState} from 'react';
import { useGlobalContext } from '../../context/mainContext';
import {FaTimes, FaPlus} from 'react-icons/fa';
import './add.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Alert from '../../context/useAlert';

const AddTodo = () => {
    const {todoDisplay, closeTodoBox, newTodoItem, todoItem, showAlert} = useGlobalContext();
    // drop down
    const dropList = ['School', 'Work', 'Personal'];

    // storing the input values in temporary state object
    const [todoValue, setTodoValue] = useState({
        title: '',
        details: '',
        category: '',
        addDate: '',
    });

    // storing the change of values
    const handleChangeTodo = (e)=>{
        const {name, value} = e.target;
        setTodoValue({ // updating the set state value 
            ...todoValue,
            [name]: value,
        })
    }
    const [defValue, setDefValue] = useState('selected');
    // Main Submit Handler function 
    const handleSubmit = (e)=>{
        e.preventDefault();
        const error = 'No item has been entered';
        if(todoValue.title === '' || todoValue.details === '' || todoValue.category === ''){
           return error;
        }else{
            showAlert();
        }
    }

    //empty inputs
    const emptyInputs = ()=>{
        setTodoValue({
            title: '',
            details: '',
            category: '',
            addDate: '',
        })
    }

    return (
        <section className={`${todoDisplay ? 'addtodo-wrapper show': 'addtodo-wrapper'}`} >
            <div className='addtodo-container'>
                <div className = 'addtodo-headers'>
                    <p className='addtodo-title'>TodoApp</p>
                    <button className = 'close-btn' onClick={closeTodoBox}><FaTimes/></button>
                </div>
                <Alert todoValue={todoValue} emptyInputs={emptyInputs}/>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='input title' value={todoValue.title} name='title' placeholder='title' onChange={handleChangeTodo}></input>
                    <textarea type='text' className='input details' value={todoValue.details} name='details' placeholder='details' onChange={handleChangeTodo}></textarea>
                    
                    <label htmlFor="categories">Choose a categories:</label>
                        <select id="categories" name="category" value={todoValue.category} onChange={handleChangeTodo}>
                            <option defaultValue={defValue}>Choose Your  categories</option>
                            {dropList.map((dropItem, index)=>{
                                return(
                                    <option value={dropItem}  key={index}>{dropItem}</option>
                                )
                            })}
                        </select>
                    <button className='addtodo-btn' type='submit'>Confirm<FaPlus/></button>
                </form>
                
            </div>
        </section>
    )
}

export default AddTodo;
