import './App.css';
import Users from './Users';
import Header from './Header';
import AddUsers from './AddUsers';
import SearchUsers from './SearchUsers';
import EditUser from './EditUser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import BtnUsers from './BtnUsers';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function App() {
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

  function updateUser(state){
    setUsers(
      users.map((user) =>{
        return user.id === state.id ? state : user;
      })
    )
  }

  const removeUser = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUserList);
  }

  const procurar = (str) => {
    let achou=" ";
    users.map((user) => {
      return user.name === str ? achou = user : "";
    })
      if(achou != " "){
        fetch(`https://gorest.co.in/public-api/users/${achou.id}` ,{
        method: 'GET',
        headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + "b0cdf5a82b2dc0e769b0ad4b8b7666ab4c5467506261c146b615c98b5b1cfa3a"
        },
      }).then(res => res.json())
      .then(async (resultado) => {
            if(resultado.code === 200){
                alert("Usuário Encontrado!");
                confirmAlert({
                  title: 'Usuário',
                  message: '' + achou.name + "  " + achou.email + "  " + achou.gender + "  " + achou.status,
                  buttons: [
                    {
                      label: 'Confirmo',
                      onClick: () => ""
                    },
                  ]
                });
            } else if(resultado.code === 404){
                alert("Usuário Não Encontrado");
            } else {
                alert("Erro");
            } 
        });
      } else {
        alert("Usuário Não Encontrado!")
      }
      
    
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          path="/"
          render={(props) => (
            <SearchUsers
              {...props}
              procurar={procurar}
            />
          )}
        >
        </Route>
        <BtnUsers/>
        <Switch>
        <Route 
          path="/" 
          exact
          render={(props) => (
            <Users
              {...props}
              users = {users}
              removeUser={removeUser}
            />
          )}
          > 
        </Route>
        <Route path="/add">
          <AddUsers/>
        </Route>
        <Route 
        path="/edit"
        render={(props) => (
          <EditUser
            {...props}
            updateUser={updateUser}
          />
        )}
        >
        </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
