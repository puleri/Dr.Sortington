import './App.css';
import "@fontsource/berkshire-swash"
import Join from './components/Join/Join.js';
import IntroPoster from './components/IntroPoster/IntroPoster.js';

import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>

      <Route exact path='/'
      component={IntroPoster} />
      
      <Route path="/"
      component={Join} />

     

    </Switch>
  );
}

export default App;
