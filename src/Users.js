import './App.css';
import React, {useState, useEffect} from 'react';

function Users() {
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

  return (
    <div>
        {users.map( user => (
        <ul className="collection mr-2" key={user.id}>
            <li className="collection-item avatar ctn pf-0" >
                <i className="material-icons medium primary-color pd-2">account_circle</i>
                <p >{user.name} <br/> {user.email} <br/> {user.gender} <br/> {user.status} <br/> {user.created_at}</p>
                <div className="mr-left">
                    <span className="secondary-content position secondary-color"><i className="material-icons medium">delete</i></span>
                    <span className="secondary-content position tertiary-color"><i className="material-icons medium">edit</i></span>
                </div>
                
            </li>
        </ul>
        ))} 
    </div>
  );
}

export default Users;
