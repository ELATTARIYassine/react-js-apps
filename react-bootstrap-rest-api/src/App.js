import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './screens/Homescreen';
import EditScreen from './screens/Editscreen';
import AddScreen from './screens/Addscreen';

function App() {
 
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/add">
              <AddScreen />
            </Route>
            <Route path="/edit/:id">
              <EditScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
