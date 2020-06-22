import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <Route path="/add" component={AddScreen} />
            <Route path="/edit/:id" component={EditScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
