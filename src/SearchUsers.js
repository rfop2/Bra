import './App.css';
import React, {useState} from 'react';

function SearchUsers(props) {
  const [input,setInput] = useState ([]);
  function procurar(){
    //input tem o valor
    // ve se tem user com esse nome
    props.procurar(input);
    // retornar o user
  }
  return (
    
    <div>
        <div className="row">
           <div className="input-field col s4 offset-s4 ctn-flex">
                <input   onChange={event => setInput(event.target.value)} type="text" placeholder="Procure Por um Nome do Usuário"/>
                <button className="btn" onClick={(procurar)}>pesquisar</button>
           </div>
        </div>
    </div>
  );
}

export default SearchUsers;
