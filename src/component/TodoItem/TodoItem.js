import React from 'react'
import './style.css';
import {FaTrash,FaEdit} from 'react-icons/fa';
import { useGlobalContext } from '../../context/mainContext';

const TodoItem = ({id, title, details, category, addDate}) => {
  const {deleteItem} = useGlobalContext();

  return (
    <div className='container card pt-1'>
      <div className='row'>
        <div className='form-check ml-2 mt-1'>
          <input type="checkbox" className="form-check-input" id="checkbox"/>
        </div>
        <div className='col'>
          <h5>{title}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-9'>
          <p>{details}</p>
        </div>
        <div className='col-3'>
          <p>{category}</p>
          <button className='delete-btn' onClick={()=>deleteItem(id)}><FaTrash/></button>
          <button className='edit-btn'><FaEdit/></button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;