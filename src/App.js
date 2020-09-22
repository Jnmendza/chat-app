import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* Checks the root we are in and renders the appropriate screen */}
          <Switch>
          {/*This Route param at the end of the path and right of : can be passed to the component in Route
          In this case its the Chat component. */}
            <Route path="/room/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <Chat />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
