import './App.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function AddUsers() {
  //estados
  const [nome, setNome] = useState ("");
  const [email, setEmail] = useState ("");
  const [gender, setGender] = useState ("");
  const [statusUser, setStatus] = useState ("Active");

  // pegar valores do input e fazer o post
  function add(event){
    event.preventDefault();
    if (nome === "" || email === "" || gender === "") {  
      alert("Digite o Nome, Email e Genêro!");
      return;
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      alert("Por favor digite um email válido");
      return;
    }
    if (gender !== "Male" && gender !== "Female") {
      alert("Por Favor Digite Um Genêro Válido(Male ou Female)");
      return;
    }
    //pegar os states e criar um user e enviar
    fetch('https://gorest.co.in/public-api/users?',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + "b0cdf5a82b2dc0e769b0ad4b8b7666ab4c5467506261c146b615c98b5b1cfa3a"
      },
      body: JSON.stringify({
         
          email : email,
          name : nome,
          gender : gender,
          status : statusUser,
          
        })
    })
    .then(res => 
      res.json(),
      )
      
    .then(
     async (result) => {
        if(result.code === 201){
          alert("Usuário Cadastrado Com Sucesso");
          setNome("");
          setEmail("");
          setGender("");
          setStatus("Active");
        } else if (result.code === 422){
          alert("Email Já Cadastrado");
        } else {
          alert("Erro!");
        }
      },
    )
    
    
  }
  return (
    <div className="addUsers">
        <h4>Adicionar Usuário</h4>
          <form action="" onSubmit={add}>
            <div className="field">
              <label className="label-new">Nome</label>
              <input className="input-new" type="text" placeholder="Nome" value={nome} onChange={event => setNome(event.target.value)} />
            </div>
            <div className="field">
              <label className="label-new">Email</label>
              <input className="input-new" type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className="field">
              <label className="label-new">Gender</label>
              <input className="input-new" type="text" placeholder="Gender" value={gender} onChange={event => setGender(event.target.value)}/>
            </div>
            <div className="field">
              <label className="label-new">Status</label>
              <select name="" id="" value={statusUser} onChange={event => setStatus(event.target.value)}  >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn quaternary-color ml-1"><i className="material-icons left">add_circle</i>Adicionar</button>
            <Link to="/">
              <button type="submit" className="btn  ml-1">Voltar</button>
            </Link>
            
          </form>
       
    </div>
  );
}

export default AddUsers;
