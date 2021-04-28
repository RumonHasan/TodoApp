import React from 'react'
import './style.css';

const TodoItem = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <div className='container card pt-1'>
      <div className='row'>
        <div className='form-check ml-2 mt-1'>
          <input type="checkbox" class="form-check-input" id="checkbox"/>
        </div>
        <div className='col'>
          <h5>{item.title}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-9'>
          <p>{item.details}</p>
        </div>
        <div className='col-3'>
          <p>{item.dueDate}</p>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;