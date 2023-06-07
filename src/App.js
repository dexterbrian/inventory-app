import logo from './logo.svg';
import './App.css';
import Modify from './Components/Modify/Modify';

function App() {
  return (
    <div className="App">
      <h1>Inventory App</h1>
      {/* {Our parent component will go here} */}
      <Modify />
    </div>
  );
}

export default App;
