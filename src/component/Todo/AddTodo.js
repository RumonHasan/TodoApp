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
                <div className = 'modal-header'>
                    <h5 className='modal-title text-white'>Add To-Do Item</h5>
                    <button type="button" className="close" onClick={closeTodoBox} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="text-white">&times;</span>
                    </button>                
                </div>
                <Alert todoValue={todoValue} emptyInputs={emptyInputs}/>
                <form onSubmit={handleSubmit} className='mb-2'>
                    <div className='modal-body'>
                        <div className='form-group'>
                            <label for='title'>Title</label>
                            <input type='text' id='title' className='form-control' value={todoValue.title} placeholder='Enter a title' onChange={handleChangeTodo}></input>
                        </div>
                        <div className='form-group'>
                            <label for='details'>Details</label>
                            <textarea type='text' id='details' className='form-control' value={todoValue.details} placeholder='Enter details here' onChange={handleChangeTodo}></textarea>
                        </div>
                        <div className='form-group'>
                            <label for="categories">Choose a categories:</label>
                            <select id="categories" className='form-control' value={todoValue.category} onChange={handleChangeTodo}>
                                <option defaultValue={defValue}>Default Category</option>
                                {dropList.map((dropItem, index)=>{
                                    return(
                                        <option value={dropItem} key={index}>{dropItem}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-group mb-2'>
                            <div class="d-grid gap-2">
                                <button className='btn btn-primary btn-block mb-2' type='submit'>Confirm</button>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-secondary btn-sm' onClick={closeTodoBox}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                </form>
                
            </div>
        </section>
    )
}

export default AddTodo;
