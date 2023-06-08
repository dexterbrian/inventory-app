import { useState } from 'react';
import Login from './components/Login';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/NavBar';

function App() {

  const history = useHistory();
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ notification, setNotification ] = useState('');

  return (
    <div className="App">
      <h1>Inventory App</h1>
      { isLoggedIn ? <NavBar /> : null }
      <Switch>
      <Route exact path="/">
        {
          isLoggedIn ? <h2>All Products</h2> : history.push('login')
        }
      </Route>
      <Route exact path="/login">
        <Login setLoggedIn={ setLoggedIn } setNotification={ setNotification }/>
      </Route>
      <Route exact path="/add">
        <h2>Add Product</h2>
      </Route>
      <Route exact path="/edit">
        <h2>Edit Product</h2>
      </Route>
    </Switch>
    </div>
  );
}

export default App;