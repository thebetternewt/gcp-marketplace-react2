import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Profile from './components/Profile';
import About from './components/About';

import './styles/mini-nord.css';

const App = () => (
  <div className="App">
    <Layout>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/help" render={() => <h1>Help</h1>} />
      <Route exact path="/profile" component={Profile} />
    </Layout>
  </div>
);

export default App;
