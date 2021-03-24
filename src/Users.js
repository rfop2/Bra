import './App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CardUser from "./CardUser"

function Users(props) {
  const [users, setUsers] = useState ([]);
  useEffect(() =>{
      fetchUsers();
  },[]);

  const fetchUsers = async () => {
       await fetch('https://gorest.co.in/public-api/users?access-token=b0cdf5a82b2dc0e769b0ad4b8b7666ab4c5467506261c146b615c98b5b1cfa3a')
      .then((result) => result.json())
      .then((users) => {
          setUsers(users.data);
      })
  }

  const deleteUser = (id) => {
    fetch(`https://gorest.co.in/public-api/users/${id}` ,{
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + "b0cdf5a82b2dc0e769b0ad4b8b7666ab4c5467506261c146b615c98b5b1cfa3a"
        },
      }).then(res => res.json())
      .then(async (resultado) => {
             if(resultado.code === 204){
                props.removeUser(id);
                 alert("Deletado Com Sucesso!");
             } else if(resultado.code === 404){
                 alert("Usuário Não Encontrado");
             } else {
                 alert("Erro");
             } 
         });
  };

  return (
    <div className="ctn-flex-column">
        {props.users.map( user => (
        <ul className="collection mr-2 width-800"  key={user.id} >
           <CardUser 
                user={user}
                clickHandler={deleteUser}
           />
        </ul>
        ))} 
    </div>
  );
}

export default Users;
