import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Service} />
          <Route path="/footer" component={Footer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App