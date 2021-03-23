import './App.css';
import React, {useState, useEffect} from 'react';

function SearchUsers() {
  var name;
  const [input,setInput] = useState ([]);

  
  

  return (
    <div>
        <div className="row">
           <div className="input-field col s4 offset-s4">
                <input   value={name} type="text" placeholder="Procure Por um Nome do Usuário"/>
                <button onClick={() => console.log(input)}>pesquisar</button>
           </div>
        </div>
    </div>
  );
}

export default SearchUsers;
