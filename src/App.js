import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import ConfirmationPage from './components/ConfirmationPage';
import { PizzaProvider } from './components/PizzaContext';


function App() {
  return (
    <PizzaProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pizza" component={OrderPage} />
          <Route path="/onay" component={ConfirmationPage} />
        </Switch>
      </Router>
    </PizzaProvider>
  );
}

export default App;
