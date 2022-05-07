import React, {useState} from 'react';


function ToDoItem (props) {
  const [isDone,setIsDone] =useState(false);

function handleClick() {
  setIsDone ((prevValue) => {
    return !prevValue;
  })
}



  return (
  <div className='d-flex justify-content-center align-items-center'>
      <input type='checkbox' onClick={handleClick} className='me-4'></input>
  <div onClick={ handleClick} style ={{textDecoration: isDone ? 'line-through' : 'none'}}>{props.text}</div>
  <div className='ms-3'>
            <button onClick={() => {
    props.onChecked(props.id)}} className='btn btn-danger'>Delete</button>
            </div>
  </div>
  );
}






export default ToDoItem;