import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Switch>
            <Route excat path='/'>
                <Login/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
