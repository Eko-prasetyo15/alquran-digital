import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './component/home.js';
import Page from './component/page';
import Tafsir from './component/tafsir';

import Recitation from './component/recitation';
// import Chart from './components/Chart'

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/surah" component={Page} />
        <Route path="/tafsir" component={Tafsir} />
        <Route path="/recitation" component={Recitation} />
      </Switch>
    </Router>
  )
}