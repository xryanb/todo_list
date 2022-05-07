import React, {useState} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

function App() {
  const[inputText,setInputText]= useState('');
  const[items,setItems]= useState([]);


function handleChange(event){
  const newValue=event.target.value;
  setInputText(newValue);

}

function addItem(e) {
  e.preventDefault();
  setItems( (prevItems) => {
    return [...prevItems, inputText];
    });

    setInputText('');
}

function deleteItem(id){
  setItems((prevItems) =>{
    return prevItems.filter( (item,idx) => {
      return idx !== id;
    })


  })

}
  return (
    <div className="App">
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={addItem}>
        <input type="text" value={inputText} onChange={handleChange}/>
        <button className="btn btn-primary ms-3">
          <span>Add</span>
        </button>
        </form>
      <div>
        
          {items.map((todoItem,idx) => (<ToDoItem key={idx} id={idx} text={todoItem} onChecked={deleteItem}/> ))}
        
      </div>
    </div>

    </div>
  );
}

export default App;
