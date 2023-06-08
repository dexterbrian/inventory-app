import './App.css';
import ProductListing from './components/prodlist/ProductListing';
import { useState } from 'react';
import Login from './components/Login';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/NavBar';
import Modify from './components/modify/Modify';

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
          isLoggedIn ? <ProductListing /> : history.push('login')
        }
      </Route>
      <Route exact path="/login">
        <Login setLoggedIn={ setLoggedIn } setNotification={ setNotification }/>
      </Route>
      <Route exact path="/add">
        <h2>Add Product</h2>
      </Route>
      <Route exact path="/edit">
        <Modify />
      </Route>
    </Switch>
      {/* {Our parent component will go here} */}
      
    </div>
  );
}

export default App;
