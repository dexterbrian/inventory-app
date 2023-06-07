import './App.css';
import ProductListing from './components/prodlist/ProductListing';

function App() {
  return (
    <div className="App">
      <h1>Inventory App - Grp1</h1>
      {/* {Our parent component will go here} */}
      <ProductListing/>
    </div>
  );
}

export default App;
