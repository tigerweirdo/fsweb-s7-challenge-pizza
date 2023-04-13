import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import ConfirmationPage from './components/ConfirmationPage';



function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pizza" component={OrderForm} />
          <Route path="/onay" component={ConfirmationPage} />
        </Switch>
      </Router>
   
  );
}

export default App;
