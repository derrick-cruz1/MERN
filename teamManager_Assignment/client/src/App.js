import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Header path ="/players/list" />
      <Router>
        <ListAll path ="/players/list"/>
        <New path ="/players/addplayer" />
        <Edit path = "/status/game/1" />
      </Router>
    </div>
  );
}

export default App;
