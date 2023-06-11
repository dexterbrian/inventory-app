import './App.css';
import ProductListing from './components/prodlist/ProductListing';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/NavBar';
import AddProductForm from './components/addprods/AddProductForm';
import { baseUrl } from './components/baseUrl';

function App() {

  const history = useHistory();
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ searching, setSearching ] = useState(false);
  const [ notification, setNotification ] = useState('');
  const [ products, setProducts ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);

  function searchProduct(searchTerm) {
    const results = searchTerm === '' ? products : products.filter(product => product.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
    setSearching(true);
  }

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1>Invento</h1>
      
      { isLoggedIn ? <NavBar setLoggedIn={ setLoggedIn }/> : null }
      <Switch>
        <Route exact path="/">
          {
            isLoggedIn ? <ProductListing products={ searching ? searchResults : products } searchProduct={ searchProduct } /> : history.push('login')
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
