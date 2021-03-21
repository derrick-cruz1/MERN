import './App.css';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Details from './components/Details';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <New />
      <hr></hr>
      <ListAll />
      <Router>
        <Details path ="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
