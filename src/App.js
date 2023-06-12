import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';


function App() {
  return ( 
  <div className='App'>
    <Router>
    <NavBar/>
       <Switch>
            <Route path="/" component={Home} exact><Home/>  </Route>
            <Route path="/about" component={About} exact><About/> </Route>
            <Route path="/service" component={Service} exact><Service/> </Route>
            <Route path="/footer" component={Footer} exact><Footer/> </Route>        
       </Switch>
   </Router>
  </div>
)
  
}

export default App