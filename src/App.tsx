import React from 'react';
import './App.css';
import { Switch,  Route } from 'react-router';
import { PersonsList } from './components/persons/PersonsList';
import { PersonsDetails } from './components/person-details/PersonsDetails';

const App: React.FC = () => {
  return (
    <Switch>
        <Route component={PersonsDetails} path="/details/:index"/>
        <Route component={PersonsList} path="/"/>
    </Switch>
  );
};

export default App;
