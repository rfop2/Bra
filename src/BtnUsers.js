import './App.css';
import { Link } from 'react-router-dom';

function BtnUsers() {

  return (
    <div className="addUser">
          <h3>Lista de Usuários</h3>
          <Link to="/add">
            <button className="waves-effect waves-light btn-large quaternary-color"><i className="material-icons left">add_circle</i>Adicionar Usuário</button>
          </Link>
          
    </div>
  );
}

export default BtnUsers;
