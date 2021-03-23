import './App.css';
import Users from './Users';
import Header from './Header';
import AddUsers from './AddUsers';
import SearchUsers from './SearchUsers';

function App() {
  


  return (
    <div className="App">
        <Header />
        <SearchUsers />
        <AddUsers />
        <Users />
    </div>
  );
}

export default App;
