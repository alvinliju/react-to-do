
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDO,setToDO] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDO} onChange={(e)=>setToDO(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now, text:toDO,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { toDos.map((value)=>{

        return(
          <div className="todo">
          <div className="left">
          <input
                onChange={(e) => {
                    setToDos(toDos.map((value2) => (value2.id === value.id ? { ...value2, status: e.target.checked } : value2)));
                }}
                checked={value.status}
                type="checkbox"
                name=""
                id=""
        />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={() => setToDos(toDos.filter(value2 => value2.id !== value.id))} className="fas fa-times"></i>
          </div>
        </div> 
        ) })}
      </div>
    </div>
  );
}

export default App;