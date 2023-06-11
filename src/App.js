import './App.css';
import ProductListing from './components/prodlist/ProductListing';
import { useState } from 'react';
import Login from './components/Login';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/NavBar';
import AddProductForm from './components/addprods/AddProductForm';

function App() {

  const history = useHistory();
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ notification, setNotification ] = useState('');
  const [ products, setProducts ] = useState([]);

  return (
    <div className="App">
      <h1>Invento</h1>
      
      { isLoggedIn ? <NavBar setLoggedIn={ setLoggedIn }/> : null }
      <Switch>
        <Route exact path="/">
          {
            isLoggedIn ? <ProductListing products={ products } setProducts={ setProducts }/> : history.push('login')
          }
        </Route>
        <Route exact path="/login">
          <Login setLoggedIn={ setLoggedIn } setNotification={ setNotification }/>
        </Route>
        <Route exact path="/logout">
          <Login setLoggedIn={ setLoggedIn } setNotification={ setNotification }/>
        </Route>
        <Route exact path="/add">
          <AddProductForm isLoggedIn={ isLoggedIn } products={ products } setProducts={ setProducts }/>
        </Route>
        <Route exact path="/edit">
          <AddProductForm isLoggedIn={ isLoggedIn } products={ products } setProducts={ setProducts }/>
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
