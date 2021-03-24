import './App.css';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function CardUser(props) {
  const {id,name,email,gender,status} = props.user;

  function confirmation() {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => props.clickHandler(id)
          },
          {
            label: 'No',
            onClick: () => ""
          }
        ]
      });
  }
  
  return (
    <div className="">
         <li className="collection-item avatar ctn pf-0" >
                <i className="material-icons medium primary-color pd-2">account_circle</i>
                <p >{name} <br/> {email} <br/> {gender} <br/> {status}</p>
                <div className="mr-left">
                    <span onClick={confirmation} className="secondary-content position secondary-color pointer"><i className="material-icons medium">delete</i></span>
                    <Link to={{pathname: `/edit`, state: {user : props.user}}} >
                        <span className="secondary-content position tertiary-color pointer"><i className="material-icons medium">edit</i></span>
                    </Link>
                </div>   
        </li>
        
    </div>
  );
}

export default CardUser;
//() => props.clickHandler(id)