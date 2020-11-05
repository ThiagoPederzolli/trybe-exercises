import './App.css';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/howto" component={HowTo} />
      <Route path="/profile/:ship" render={(props) => <Profile {...props} name="Troll, o ogro da web" />} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
