import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/" children={<Home />} />
          {/* <Route path="/:mail-id" children={<Message />} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
