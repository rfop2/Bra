import './App.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

class EditUser extends React.Component {
   constructor(props) {
    super(props);
    const { id, name, email ,gender,status} = props.location.state.user;
    this.state = {
      id,
      name,
      email,
      gender,
      status
    };
  }

  edit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.gender === "") {  
      alert("Digite o Nome, Email e Genêro!");
      return;
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
      alert("Por favor digite um email válido");
      return;
    }
    if (this.state.gender !== "Male" && this.state.gender !== "Female") {
      alert("Por Favor Digite Um Genêro Válido(Male ou Female)");
      return;
    }
    
    fetch(`https://gorest.co.in/public-api/users/${this.state.id}` ,{
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + "b0cdf5a82b2dc0e769b0ad4b8b7666ab4c5467506261c146b615c98b5b1cfa3a"
        },
        body: JSON.stringify({
          email : this.state.email,
          name : this.state.name,
          gender : this.state.gender,
          status : this.state.status,
        })
      }).then(res => res.json())
      .then(async (resultado) => {
             if(resultado.code === 200){
              this.props.updateUser(this.state);
              alert("Usuário Editado Com Sucesso");
             } else {
               alert("Erro!");
             }
         });
  };

  render(){
    return (
      <div className="addUsers">
          <h4>Editar Usuário</h4>
            <form action="" onSubmit={this.edit}>
              <div className="field">
                <label className="label-new">Nome</label>
                <input className="input-new" type="text" placeholder="Nome" value={this.state.name} onChange={event => this.setState({name : event.target.value})} />
              </div>
              <div className="field">
                <label className="label-new">Email</label>
                <input className="input-new" type="text" placeholder="Email" value={this.state.email} onChange={event => this.setState({email : event.target.value})}/>
              </div>
              <div className="field">
                <label className="label-new">Gender</label>
                <input className="input-new" type="text" placeholder="Gender" value={this.state.gender} onChange={event => this.setState({ gender : event.target.value})}/>
              </div>
              <div className="field">
                <label className="label-new">Status</label>
                <select name="" id="" value={this.state.status} onChange={event => this.setState({ status : event.target.value})}  >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" className="btn quaternary-color ml-1"><i className="material-icons left">add_circle</i>Editar</button>
              <Link to="/">
                <button className="btn  ml-1">Voltar</button>
              </Link>
              
            </form>
      </div>
    );
  }
  
}

export default EditUser;
