import { Route } from 'react-router-dom';
import './App.css';
import UserForm from './users/UserForm';

function App() {
  return (
    <div className="App">
      <Route path='/signup' >
        <UserForm />
      </Route>
    </div>
  );
}

export default App;
